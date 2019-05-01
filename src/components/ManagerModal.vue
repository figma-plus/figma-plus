<template lang="pug">
	#pluginManager.js-fullscreen-prevent-event-capture
		modal(name='pluginManagerModal' ref='modal' @opened='openModal' @closed='modalClosed' draggable='.modal-header' :width='460' height='auto' :maxHeight='642')
			.modal-header.header-large
				.modal-tabs
					.modal-tab-large(:class='{"active-tab": currentTab === "Plugins"}' @click='currentTab = "Plugins", detailScreenOn = false, searchText = ""') Plugins
					.modal-tab-large(:class='{"active-tab": currentTab === "Installed"}' @click='currentTab = "Installed", detailScreenOn = false, searchText = ""') Installed
						.update-count(v-if='numberOfUpdates > 0') {{ numberOfUpdates }}
					.modal-tab-large(v-if='devMode' :class='{"active-tab": currentTab === "Developer"}' @click='currentTab = "Developer", detailScreenOn = false, searchText = ""') Developer
				.modal-close-button(ref='closeButton' @click='hide')
			.modal-content.no-padding.no-overflow
				.list-screen(v-if='currentTab === "Plugins" || (currentTab === "Installed" && installedPlugins.length > 0)' :class='{detailScreenOn: detailScreenOn}')
					.search-box
						.figma-icon.search
						input.no-border(v-model='searchText' placeholder='Search' spellcheck='false')
					.plugins-list
						pluginItem(type='text' v-for='plugin in searchedPlugins' :key='plugin.id' :plugin='plugin' :installedPlugins='installedPlugins' :installedScreenOn='currentTab === "Installed"' @goToDetail='goToDetail' @install='install')
						.no-search-results-message(v-if='searchedPlugins.length === 0 && searchText !== ""') No results for '{{ searchText }}'
				detailScreen(:class='{detailScreenOn: detailScreenOn}' :plugin='selectedPlugin' :pluginStats='pluginStats' :installed='installedPlugins.find(installedPlugin => installedPlugin.id === selectedPlugin.id) !== undefined' @backToList='detailScreenOn = false' @install='install' @uninstall='uninstall' @hide='hide')
				developerScreen(v-if='currentTab === "Developer"')
				.empty-state(v-if='currentTab === "Installed" && installedPlugins.length === 0')
					.empty-state-title No plugins installed
					.empty-state-hint Select the Plugins tab to browse and install plugins.
</template>

<script>
import VModal from "vue-js-modal";
import PluginItem from "./PluginItem";
import DetailScreen from "./DetailScreen";
import DeveloperScreen from "./DeveloperScreen";
import PluginsMenu from "./PluginsMenu.vue";
import ScriptRunner from "./ScriptRunner.vue";
import sha256 from "hash.js/lib/hash/sha/256";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import firebaseConfig from "./../../firebaseConfig.js";

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  components: {
    VModal,
    PluginItem,
    DetailScreen,
    DeveloperScreen,
    PluginsMenu
  },
  data: () => ({
    myOrgId: null,
    myTeams: null,
    modalOpened: false,
    searchText: "",
    selectedPlugin: {},
    detailScreenOn: false,
    currentTab: "Plugins",
    plugins: [],
    installedPlugins: [],
    devMode: window.pluginDevMode,
    pluginStats: [],
    usersInstalledPlugins: [],
    user: null,
    userHash: ""
  }),
  firestore: {
    pluginStats: db.collection("plugins_stats")
  },
  watch: {
    installedPlugins: array => {
      localStorage.setItem("figmaPlus-installedPlugins", JSON.stringify(array));
    }
  },
  beforeMount() {
    figmaPlus.onFileBrowserLoaded(() => {
      if (this.modalOpened) this.hide();
      if (!document.getElementById("pluginManagerButton"))
        this.injectpluginManagerButton();
    });

    figmaPlus.onFileBrowserChanged(() => {
      if (!document.getElementById("pluginManagerButton"))
        this.injectpluginManagerButton();
    });

    if (
      document.querySelector('[data-tooltip-text="Show notifications"]') &&
      !document.getElementById("pluginManagerButton")
    )
      this.injectpluginManagerButton();

    figmaPlus.onFileBrowserUnloaded(this.hide);

    figmaPlus.registerKeyboardShortcut({
      shortcut: {
        mac: { shift: true, command: true, key: "P" },
        windows: { shift: true, control: true, key: "P" }
      },
      action: this.show
    });

    if (this.devMode)
      figmaPlus.registerKeyboardShortcut({
        shortcut: {
          mac: { shift: true, command: true, key: "R" },
          windows: { shift: true, control: true, key: "R" }
        },
        action: () =>
          figmaPlus.showUI({
            title: "Run Script",
            vueComponent: ScriptRunner,
            width: 500
          })
      });

    window.figmaPlus.togglePluginManager = this.toggleModal;

    figmaPlus.onMenuOpened(type => {
      if (type === "fullscreen-menu-dropdown") {
        const integrations = [
          ...document.querySelectorAll(
            'div[class*="multilevel_dropdown--name"]'
          )
        ].find(node => node.innerText === "Integrations").parentNode;
        const pluginsMenuItem = document.createElement("div");
        integrations.parentNode.insertBefore(pluginsMenuItem, integrations);
        new figmaPlus.Vue({
          el: pluginsMenuItem,
          render: h => h(PluginsMenu)
        });
      }
    });

    if (localStorage.getItem("figmaPlus-installedPlugins"))
      this.installedPlugins = JSON.parse(
        localStorage.getItem("figmaPlus-installedPlugins")
      );

    const oldMasterList = JSON.parse(
      localStorage.getItem("figmaPlus-masterList")
    );
    fetch("https://figma-plus.github.io/plugin-directory/plugins.json", {
      cache: "no-cache"
    })
      .then(response => response.json())
      .then(masterList => {
        if (
          localStorage.getItem("figmaPlus-plugins") &&
          oldMasterList &&
          JSON.stringify(oldMasterList) === JSON.stringify(masterList)
        ) {
          this.plugins = JSON.parse(localStorage.getItem("figmaPlus-plugins"));
          this.checkForUpdates();
        } else {
          if (oldMasterList && masterList.length > oldMasterList.length)
            localStorage.setItem("figmaPlus-hasNewPlugins", "true");
          this.loadPlugins(masterList);
        }
      });
  },
  computed: {
    searchedPlugins() {
      let availablePlugins = !this.myOrgId
        ? this.plugins.filter(
            plugin => !plugin.requiredOrgId || plugin.requiredOrgId === ""
          )
        : this.plugins.filter(
            plugin =>
              !plugin.requiredOrgId ||
              plugin.requiredOrgId === "" ||
              plugin.requiredOrgId === this.myOrgId
          );
      availablePlugins =
        this.myTeams && this.myTeams.length > 0
          ? availablePlugins.filter(
              plugin =>
                !plugin.requiredTeamIds ||
                plugin.requiredTeamIds.length === 0 ||
                (plugin.requiredTeamIds.some(id =>
                  this.myTeams.find(teamId => teamId === id)
                ) &&
                  plugin.requiredTeamIds.some(id => figmaPlus.teams[id]))
            )
          : availablePlugins.filter(
              plugin =>
                !plugin.requiredTeamIds || plugin.requiredTeamIds.length === 0
            );

      if (this.currentTab === "Plugins") {
        return availablePlugins
          .filter(plugin => {
            return plugin.name
              .toLowerCase()
              .match(this.searchText.toLowerCase());
          })
          .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
      } else {
        const installedPlugins = availablePlugins.filter(plugin => {
          return this.installedPlugins.find(
            installedPlugin => installedPlugin.id === plugin.id
          );
        });
        return installedPlugins
          .filter(plugin => {
            return plugin.name
              .toLowerCase()
              .match(this.searchText.toLowerCase());
          })
          .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
      }
    },
    numberOfUpdates() {
      const numberOfUpdates = this.installedPlugins.filter(installedPlugin =>
        this.plugins.find(
          plugin =>
            plugin.id === installedPlugin.id &&
            plugin.version !== installedPlugin.version
        )
      ).length;
      if (document.querySelector("#pluginManagerButton")) {
        numberOfUpdates > 0
          ? document
              .querySelector("#pluginManagerButton")
              .classList.add("has-badge")
          : document
              .querySelector("#pluginManagerButton")
              .classList.remove("has-badge");
      }
      return numberOfUpdates;
    }
  },
  methods: {
    injectpluginManagerButton() {
      const notificationButton = document.querySelector(
        '[data-tooltip-text="Show notifications"]'
      );
      notificationButton.parentElement.style.display = "flex";
      const pluginManagerButton = document.createElement("div");
      pluginManagerButton.id = "pluginManagerButton";
      pluginManagerButton.className =
        this.numberOfUpdates > 0
          ? "top-bar-button has-badge"
          : "top-bar-button";
      pluginManagerButton.innerHTML = `<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 5H9V8H12V9H9V12H8V9H5V8H8V5Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 0V9H16.9855C16.7267 13.4617 13.0266 17 8.5 17C3.80558 17 0 13.1944 0 8.5C0 3.97343 3.53831 0.273272 8 0.0144615V0H17ZM16 8.72172L15.9872 8.94209C15.7589 12.878 12.4937 16 8.5 16C4.35786 16 1 12.6421 1 8.5C1 4.50631 4.12203 1.24109 8.05791 1.01278L8.27829 1H16V8.72172Z" fill="white"/>
</svg>`;
      notificationButton.parentNode.insertBefore(
        pluginManagerButton,
        notificationButton
      );
      pluginManagerButton.onclick = this.toggleModal;
      figmaPlus.addTooltip({
        element: pluginManagerButton,
        text: "Figma Plus"
      });
    },
    loadPlugins(masterList) {
      const getManifest = async pluginEntry => {
        let userRepo = pluginEntry.github.replace("https://github.com/", "");
        userRepo =
          userRepo[userRepo.length - 1] === "/"
            ? userRepo.slice(0, -1)
            : userRepo;
        const cdnLink = `https://cdn.jsdelivr.net/gh/${userRepo}@${
          pluginEntry.approvedCommit
        }/`;
        const manifest = await fetch(cdnLink + "manifest.json").then(response =>
          response.json()
        );
        const releases = await fetch(
          `https://api.github.com/repos/${userRepo}/releases`
        ).then(response => response.json());
        manifest.publishDate = releases[releases.length - 1].published_at;
        manifest.updates = releases.map(release => {
          return {
            version: release.tag_name,
            date: release.published_at,
            notes: release.body
          };
        });
        manifest.version = pluginEntry.approvedVersion;
        manifest.commit = pluginEntry.approvedCommit;
        manifest.github = pluginEntry.github;
        manifest.userRepo = userRepo;
        if (manifest.images)
          manifest.images = manifest.images.map(image => {
            if (image.startsWith("https://") || image.startsWith("http://"))
              return image;
            image = image[0] === "/" ? image.substring(1) : image;
            return `https://cdn.jsdelivr.net/gh/${userRepo}@${
              pluginEntry.approvedCommit
            }/${image}`;
          });
        this.plugins.push(manifest);
        return manifest;
      };
      const manifests = masterList.map(pluginEntry => getManifest(pluginEntry));

      Promise.all(manifests).then(() => {
        localStorage.setItem("figmaPlus-plugins", JSON.stringify(this.plugins));
        this.checkForUpdates();

        localStorage.setItem(
          "figmaPlus-masterList",
          JSON.stringify(masterList)
        );

        if (JSON.parse(localStorage.getItem("figmaPlus-hasNewPlugins"))) {
          figmaPlus.onAppLoaded(() => {
            figmaPlus.showToast({
              message: "A new plugin is available!",
              timeoutInSeconds: 10,
              buttonText: "View",
              buttonAction: this.show
            });
          });
        }
      });
    },
    checkForUpdates() {
      this.installedPlugins.forEach(installedPlugin => {
        const newPlugin = this.plugins.find(
          plugin => plugin.id === installedPlugin.id
        );
        if (installedPlugin.version !== newPlugin.version) {
          figmaPlus.onAppLoaded(() => {
            figmaPlus.showToast({
              message: `${installedPlugin.name} plugin has been updated!`,
              timeoutInSeconds: 10,
              buttonText: "What's new",
              buttonAction: this.show
            });
          });
        }
      });
    },
    show() {
      this.userHash = sha256()
        .update(App._state.user.id)
        .digest("hex");
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.user = user;
        } else {
          console.log("not signed in, signing in");
          firebase
            .auth()
            .signInWithEmailAndPassword(
              this.userHash + "@figmaplus.com",
              this.userHash
            )
            .catch(error => {
              if (error.code === "auth/user-not-found") {
                console.log("not user, signing up");
                firebase
                  .auth()
                  .createUserWithEmailAndPassword(
                    this.userHash + "@figmaplus.com",
                    this.userHash
                  );
              }
            });
        }
      });

      this.myOrgId = figmaPlus.myOrg;
      const myTeams = figmaPlus.myTeams.map(team => team.id);
      this.myTeams = myTeams;
      if (this.numberOfUpdates > 0) this.currentTab = "Installed";
      this.$modal.show("pluginManagerModal");
    },
    hide() {
      this.$modal.hide("pluginManagerModal");
    },
    openModal() {
      this.modalOpened = true;
      if (document.getElementById("pluginManagerButton"))
        document.getElementById("pluginManagerButton").classList.add("active");
      localStorage.setItem("figmaPlus-hasNewPlugins", "false");
    },
    modalClosed() {
      if (this.currentTab === "Installed" && this.numberOfUpdates > 0) {
        const updatedInstalledPlugins = this.installedPlugins.map(
          installedPlugin =>
            this.plugins.find(plugin => plugin.id === installedPlugin.id)
        );
        this.installedPlugins = updatedInstalledPlugins;
      }
      this.currentTab = "Plugins";
      this.modalOpened = false;
      this.detailScreenOn = false;
      if (document.getElementById("pluginManagerButton"))
        document
          .querySelector("#pluginManagerButton")
          .classList.remove("active");
    },
    toggleModal() {
      this.modalOpened ? this.hide() : this.show();
    },
    goToDetail(plugin) {
      this.selectedPlugin = plugin;
      document.querySelector(".detail-screen .content").scrollTop = 0;
      this.detailScreenOn = true;
    },
    install(plugin) {
      this.installedPlugins.push(plugin);

      if (plugin.css) {
        plugin.css.forEach(css => {
          const styles = document.createElement("link");
          styles.className = plugin.id;
          styles.rel = "stylesheet";
          styles.type = "text/css";
          styles.href = `https://cdn.jsdelivr.net/gh/${plugin.userRepo}@${
            plugin.commit
          }/${css}`;
          document.head.appendChild(styles);
        });
      }
      if (plugin.js) {
        plugin.js.forEach(js => {
          fetch(
            `https://cdn.jsdelivr.net/gh/${plugin.userRepo}@${
              plugin.commit
            }/${js}`
          )
            .then(response => response.text())
            .then(code => {
              const script = document.createElement("script");
              script.className = plugin.id;
              const inlineScript = document.createTextNode(
                `(function () {${code}}())`
              );
              script.appendChild(inlineScript);
              document.head.appendChild(script);
              figmaPlus.showToast({
                message: `Installed ${plugin.name}`
              });
            });
        });
      }
      const userDoc = db
        .collection("users_installed_plugins")
        .doc(this.user.uid);
      userDoc.get().then(doc => {
        if (doc.exists) {
          userDoc.update({
            plugins: firebase.firestore.FieldValue.arrayUnion(plugin.id)
          });
        } else {
          userDoc.set({
            plugins: [plugin.id]
          });
        }
      });
    },
    uninstall(plugin) {
      this.installedPlugins = this.installedPlugins.filter(
        installedPlugin => installedPlugin.id !== plugin.id
      );
      this.detailScreenOn = false;

      figmaPlus.showToast({
        message: figmaPlus.isDesktop
          ? `${plugin.name} uninstalled. Refresh opened tabs to see changes.`
          : `${plugin.name} uninstalled. Refresh this page to see changes.`,
        timeoutInSeconds: 10,
        buttonText: figmaPlus.isDesktop ? "Refresh this tab" : "Refresh",
        buttonAction: () => location.reload()
      });

      const userDoc = db
        .collection("users_installed_plugins")
        .doc(this.user.uid);

      userDoc.get().then(doc => {
        if (doc.exists) {
          userDoc.update({
            plugins: firebase.firestore.FieldValue.arrayRemove(plugin.id)
          });
        } else {
          userDoc.set({
            plugins: []
          });
        }
      });
    }
  }
};
</script>

<style lang="scss">
@import "./../css/figmaPlusUI";

#pluginManager .modal-content {
  background: #fcfcfc;
}

.list-screen {
  transition: transform 0.2s ease;
  transform: translateX(0px);
  &.detailScreenOn {
    transform: translateX(-100%);
  }
}

.plugins-list {
  height: 546px;
  max-height: calc(70vh - 48px);
  overflow-y: auto;
}

.modal-content > .empty-state {
  width: 460px;
  height: 595px;
  max-height: 70vh;
}

.modal-tab-large {
  font: normal normal 400 14px/24px Inter, Roboto, sans-serif;
  padding: 0 12px;
  color: rgba(0, 0, 0, 0.3);
  align-items: center;
  display: flex;
  &.active-tab {
    color: #000;
  }
  &:hover {
    color: rgba(0, 0, 0, 0.8);
  }
}

.update-count {
  height: 18px;
  width: 18px;
  line-height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border: 1px solid #fff;
  box-sizing: border-box;
  border-radius: 100%;
  margin-left: 6px;
  font-size: 11px;
}

.modal-header-title {
  font-size: 12px;
  letter-spacing: 0.2px;
  line-height: 36px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 12px;
  margin-right: 36px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: calc(100% - 60px);
}

.search-box {
  height: 48px;
  border-bottom: 1px solid #d4d4d4;
  display: flex;
  box-align: center;
  align-items: center;
  .figma-icon.search {
    margin-left: 24px;
    height: 12px;
    width: 12px;
  }
  input {
    cursor: text;
    background: none;
    height: 32px;
    width: 100%;
    margin-left: 10px;
    &::placeholder {
      color: #aaa;
    }
  }
}

.no-search-results-message {
  color: #aaa;
  padding: 24px 24px 0;
}

.empty-state {
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.empty-state-hint {
  margin-top: 16px;
  font-size: 11px;
  color: #aaa;
}
</style>

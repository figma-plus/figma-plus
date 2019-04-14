<template lang="pug">
	.developer-screen(@click='editing = ""')
		.header
			h1 Script Runner
			button(@click='openScriptRunner') Open
		.header.no-divider
			h1 Development Server
			button.primary(v-show='!connected' @click.stop='connect') Connect
			button(v-show='connected' @click.stop='disconnect') Disconnect
		.dev-server-content
			.section
				h2 Port
				.description Set up a local http server at where your plugin files are located, then enter the port number of your server below.
				input.port(type='text' v-model='port' @change='changePort')
			.section
				h2 Javascript files
				a
					.figma-icon.add
					span(@click='addPath("js")') Add a path to Javascript file
				.js-list(v-for='(path, index) in jsFiles')
					.url
						.file-icon.js JS
						.prefix http://localhost:{{port}}/
						.path(v-if='editing !== "js" + index' @click.stop='editing = "js" + index') {{path}}
						input.path-edit(type='text' spellcheck='false' placeholder="File path, e.g. js/app.js" ref='jsEdit' v-if='editing === "js" + index' @keyup.enter='editing = ""' @blur='changePath($event, "js", index)' @click.stop :value='path' @change='changePath($event, "js", index)')
					a(@click='jsFiles.splice(index, 1)') Remove
			.section
				h2 CSS files
				a
					.figma-icon.add
					span(@click='addPath("css")') Add a path to CSS file
				.js-list(v-for='(path, index) in cssFiles')
					.url
						.file-icon.css CSS
						.prefix http://localhost:{{port}}/
						.path(v-if='editing !== "css" + index' @click.stop='editing = "css" + index') {{path}}
						input.path-edit(type='text' spellcheck='false' placeholder="File path, e.g. css/app.css" ref='cssEdit' v-if='editing === "css" + index' @keyup.enter='editing = ""' @blur='changePath($event, "css", index)' @click.stop :value='path' @change='changePath($event, "css", index)')
					a(@click='cssFiles.splice(index, 1)') Remove
</template>

<script>
import ScriptRunner from "./ScriptRunner.vue";

export default {
  data: () => ({
    connected: false,
    port: "8080",
    jsFiles: [],
    cssFiles: [],
    editing: ""
  }),
  mounted() {
    if (JSON.parse(localStorage.getItem("figmaPlus-localServer")) !== null) {
      const localServer = JSON.parse(
        localStorage.getItem("figmaPlus-localServer")
      );
      this.connected = localServer.connected;
      this.port = localServer.port;
      this.jsFiles = localServer.jsFiles;
      this.cssFiles = localServer.cssFiles;
    } else {
      const localServer = {};
      localServer.connected = this.connected;
      localServer.port = this.port;
      localServer.jsFiles = this.jsFiles;
      localServer.cssFiles = this.cssFiles;
      localStorage.setItem(
        "figmaPlus-localServer",
        JSON.stringify(localServer)
      );
    }
  },
  watch: {
    connected: {
      handler: function(val, oldVal) {
        this.updateLocalStorage();
      }
    },
    port: {
      handler: function(val, oldVal) {
        this.updateLocalStorage();
      }
    },
    jsFiles: {
      handler: function(val, oldVal) {
        this.updateLocalStorage();
      }
    },
    cssFiles: {
      handler: function(val, oldVal) {
        this.updateLocalStorage();
      }
    },
    editing: {
      handler: function(val, oldVal) {
        this.updateLocalStorage();
      }
    }
  },
  methods: {
    openScriptRunner() {
      figmaPlus.togglePluginManager();
      figmaPlus.showUI(
        "Run Script",
        element => {
          new figmaPlus.Vue({
            el: element,
            render: h => h(ScriptRunner)
          });
        },
        600
      );
    },
    updateLocalStorage() {
      const localServer = {};
      localServer.connected = this.connected;
      localServer.port = this.port;
      localServer.jsFiles = this.jsFiles;
      localServer.cssFiles = this.cssFiles;
      localStorage.setItem(
        "figmaPlus-localServer",
        JSON.stringify(localServer)
      );
    },
    showToast(message) {
      figmaPlus.showToast(
        message + " Refresh this tab to see changes.",
        10,
        "Refresh",
        () => location.reload()
      );
    },
    connect() {
      this.connected = true;
      this.showToast("Connected to development server.");
    },
    disconnect() {
      this.connected = false;
      this.showToast("Development server disconnected.");
    },
    addPath(type) {
      const files = type === "js" ? this.jsFiles : this.cssFiles;
      console.log(files);
      files.push("");
      setTimeout(() => {
        this.editing = type + (files.length - 1);
      }, 10);
      setTimeout(() => {
        type === "js"
          ? this.$refs.jsEdit[0].focus()
          : this.$refs.cssEdit[0].focus();
      }, 20);
      if (this.connected) this.showToast("Server settings updated.");
    },
    changePort() {
      if (this.connected) showToast("Server settings updated.");
    },
    changePath(event, type, index) {
      let val = event.target.value;
      if (type === "js") {
        val = val === "" ? "app.js" : val;
        this.jsFiles[index] = val;
      }
      if (type === "css") {
        val = val === "" ? "app.css" : val;
        this.cssFiles[index] = val;
      }
      this.editing = "";
      if (this.connected) this.showToast("Server settings updated.");
    }
  }
};
</script>

<style lang="scss">
.developer-screen {
  width: 460px;
  background: #fcfcfc;
  height: 595px;
  max-height: 70vh;
  overflow-y: auto;
  .header {
    height: 48px;
    border-bottom: 1px solid #d4d4d4;
    display: flex;
    align-items: center;
    padding-left: 24px;
    padding-right: 16px;
    &.no-divider {
      border-bottom: none;
    }
    button {
      margin-left: auto;
    }
  }
  .title {
    font-size: 14px;
  }
  .dev-server-content {
    padding: 6px 24px 12px 24px;
  }
  .section {
    margin-bottom: 32px;
    .title {
      margin-bottom: 12px;
    }
    &.no-margin-bottom {
      margin-bottom: 0;
    }
  }
  .port {
    width: 60px;
    margin-top: 12px;
  }
}

.js-list {
  display: flex;
  align-items: center;
  margin-top: 8px;
  padding-bottom: 4px;
  border-bottom: 1px solid #d4d4d4;
  .file-icon,
  .prefix,
  .path {
    display: inline-block;
    line-height: 26px;
  }
  .file-icon {
    margin-right: 6px;
    width: 20px;
    height: 20px;
    border-radius: 3px;
    color: #fff;
    text-align: center;
    line-height: 22px;
    font-weight: 500;
    background: #aaa;
    &.js {
      font-size: 11px;
    }
    &.css {
      font-size: 9px;
    }
  }
  .prefix {
    color: #aaa;
  }
  a {
    margin-left: auto;
  }
  .path,
  .path-edit {
    width: 200px;
  }
  .path {
    cursor: pointer;
  }
}
</style>

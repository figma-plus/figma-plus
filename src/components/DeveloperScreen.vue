<template lang="pug">
	.developer-screen(@click='editing = ""')
		.header
			h1 Development Server
			button.primary(v-show='!connected' @click.stop='connect') Connect
			button(v-show='connected' @click.stop='disconnect') Disconnect
		.dev-server-content
			.section
				h2 Port
				.description Set up a local http server at where your plugin files are located, then enter the port number of your server below.
				input.port(type='text' v-model='port')
			.section
				h2 Javascript files
				a
					.figma-icon.add
					span(@click='addPath("js")') Add a path to Javascript file
				.js-list(v-for='(path, index) in jsFiles')
					.url
						.file-icon.js JS
						.prefix http://localhost:{{port}}/
						.path(v-if='editing !== "js" + index' @click.stop='startEditing("js" + index)') {{path}}
						input.path-edit(type='text' spellcheck='false' placeholder="File path, e.g. js/app.js" ref='jsEdit' v-if='editing === "js" + index' @keyup.enter='editing = ""' @blur='changePath($event, "js", index)' @click.stop :value='path' @change='changePath($event, "js", index)')
					a(@click='removeJSPath(index)') Remove
			.section
				h2 CSS files
				a
					.figma-icon.add
					span(@click='addPath("css")') Add a path to CSS file
				.js-list(v-for='(path, index) in cssFiles')
					.url
						.file-icon.css CSS
						.prefix http://localhost:{{port}}/
						.path(v-if='editing !== "css" + index' @click.stop='startEditing("css" + index)') {{path}}
						input.path-edit(type='text' spellcheck='false' placeholder="File path, e.g. css/app.css" ref='cssEdit' v-if='editing === "css" + index' @keyup.enter='editing = ""' @blur='changePath($event, "css", index)' @click.stop :value='path' @change='changePath($event, "css", index)')
					a(@click='removeCSSPath(index)') Remove
</template>

<script>
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
    connect() {
      this.connected = true;
      this.cssFiles.forEach(css => {
        const styles = document.createElement("link");
        styles.className = "localPlugin";
        styles.rel = "stylesheet";
        styles.type = "text/css";
        styles.href =
          "http://localhost:" +
          this.port +
          "/" +
          css +
          "?_=" +
          new Date().getTime();
        document.head.appendChild(styles);
      });
      this.jsFiles.forEach(js => {
        fetch(
          "http://localhost:" +
            this.port +
            "/" +
            js +
            "?_=" +
            new Date().getTime(),
          { cache: "no-cache" }
        )
          .then(response => response.text())
          .then(code => {
            const script = document.createElement("script");
            script.className = "localPlugin";
            const inlineScript = document.createTextNode(
              `(function () {${code}}())`
            );
            script.appendChild(inlineScript);
            document.head.appendChild(script);
          });
      });
      figmaPlus.showToast({ message: "Connected to development server." });
    },
    disconnect() {
      this.connected = false;
      for (let script of document.getElementsByClassName("localPlugin")) {
        script.remove();
      }
      figmaPlus.showToast({ message: "Development server disconnected." });
    },
    addPath(type) {
      if (!this.connected) {
        const files = type === "js" ? this.jsFiles : this.cssFiles;
        files.push("");
        setTimeout(() => {
          this.editing = type + (files.length - 1);
        }, 10);
        setTimeout(() => {
          type === "js"
            ? this.$refs.jsEdit[0].focus()
            : this.$refs.cssEdit[0].focus();
        }, 20);
      } else
        figmaPlus.showToast({
          message: "Please disconnect server to edit settings"
        });
    },
    startEditing(field) {
      if (!this.connected) this.editing = field;
      else
        figmaPlus.showToast({
          message: "Please disconnect server to edit settings"
        });
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
    },
    removeJSPath(index) {
      if (!this.connected) this.jsFiles.splice(index, 1);
      else
        figmaPlus.showToast({
          message: "Please disconnect server to edit settings"
        });
    },
    removeCSSPath(index) {
      if (!this.connected) this.cssFiles.splice(index, 1);
      else
        figmaPlus.showToast({
          message: "Please disconnect server to edit settings"
        });
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
    display: flex;
    align-items: center;
    padding-left: 24px;
    padding-right: 16px;
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
    .description {
      margin-bottom: 12px;
    }
    &.no-margin-bottom {
      margin-bottom: 0;
    }
  }
  .port {
    width: 60px;
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

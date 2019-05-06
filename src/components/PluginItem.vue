<template lang="pug">
	.pluginItem(@click='goToDetail')
		.name {{ plugin.name }}
		.author {{ plugin.author}}
		.description {{ plugin.description }}
		.whats-new-button(v-if='installedScreenOn && hasUpdate') See what's new in version {{plugin.version}}
		.update-text(v-if='installedScreenOn && hasUpdate') Updated
		button.button(v-show='!installed && !installedScreenOn' @click.stop='install') Install
		button.button(v-show='installed && !installedScreenOn' disabled='true') Installed
		.figma-icon.chevron-right2
</template>

<script>
var compareVersions = require("compare-versions");

export default {
  props: ["plugin", "installedPlugins", "updatedPlugins", "installedScreenOn"],
  methods: {
    goToDetail(event) {
      this.$emit("goToDetail", this.plugin);
    },
    install() {
      this.$emit("install", this.plugin);
    }
  },
  computed: {
    installed() {
      return (
        this.installedPlugins.find(
          installedPlugin => installedPlugin.id === this.plugin.id
        ) !== undefined
      );
    },
    hasUpdate() {
      return this.updatedPlugins.find(
        updatedPlugin => updatedPlugin.id === this.plugin.id
      );
    }
  }
};
</script>

<style lang="scss">
.pluginItem {
  padding: 16px 24px;
  position: relative;
  &:hover {
    background: #f8f8f8;
    color: #000;
  }
  .update-text {
    color: #aaa;
    position: absolute;
    top: 24px;
    right: 48px;
  }
  .name {
    display: inline-block;
    color: #333;
    font-size: 14px;
  }
  .version {
    display: inline-block;
    color: #aaa;
    margin-left: 8px;
  }
  .author {
    margin-top: 3px;
    color: #aaa;
  }
  .description {
    margin-top: 8px;
    color: #aaa;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .whats-new-button {
    color: #30c2ff;
    margin-top: 8px;
    cursor: pointer;
  }
  button {
    position: absolute;
    top: 16px;
    right: 48px;
  }
  .figma-icon.chevron-right2::after {
    font-size: 16px;
    position: absolute;
    top: 24px;
    right: 24px;
  }
}
</style>

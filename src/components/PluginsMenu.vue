<template lang="pug">
	.plugin-dropdown-option.padded(ref='menuItem' @click.self="e => e.stopPropagation()" @mouseenter='showSubmenu')
		.plugin-dropdown-option-text Figma Plus
		.plugin-dropdown-option-chevron
		.plugin-dropdown-submenu(ref='submenu' v-show='menuShown')
			#pluginOptions
			.plugin-dropdown-option(@click='openManager')
				.plugin-dropdown-option-text Get Plugins
				.plugin-dropdown-option-shortcut {{ managerShortcut }}
			.plugin-dropdown-option(v-if='devMode' @click='openScriptRunner')
				.plugin-dropdown-option-text Run Script
				.plugin-dropdown-option-shortcut {{ scriptRunnerShortcut }}
			a.plugin-dropdown-option(target="_blank" href='https://github.com/figma-plus/figma-plus/issues/new' )
				.plugin-dropdown-option-text Report Issues
</template>

<script>
import ScriptRunner from "./ScriptRunner.vue";

export default {
  data: () => ({
    devMode: window.pluginDevMode,
    managerShortcut: navigator.platform.includes("Win")
      ? "Ctrl+Shift+P"
      : "⇧⌘P",
    scriptRunnerShortcut: navigator.platform.includes("Win")
      ? "Ctrl+Shift+R"
      : "⇧⌘R",
    menuShown: false
  }),
  mounted() {
    [
      ...document.querySelectorAll(
        'div[class*="multilevel_dropdown__REFRESH--option"]'
      )
    ].forEach(node =>
      node.addEventListener("mouseover", () => (this.menuShown = false))
    );
  },
  methods: {
    openScriptRunner() {
      figmaPlus.showUI({
        title: "Run Script",
        vueComponent: ScriptRunner,
        width: 500
      });
    },
    openManager() {
      window.figmaPlus.togglePluginManager();
    },
    showSubmenu() {
      const activeNode = document.querySelector(
        'div[class*="multilevel_dropdown__REFRESH--optionActive"]'
      );
      if (activeNode) {
        const activeClassName = [...activeNode.classList].find(className =>
          className.includes("optionActive")
        );
        activeNode.classList.remove(activeClassName);
        const realSubmenu = document.querySelector(
          'div[class*="multilevel_dropdown__REFRESH--submenu"]'
        );
        if (realSubmenu) realSubmenu.style.display = "none";
        activeNode.onmouseenter = () => {
          activeNode.classList.add(activeClassName);
          if (realSubmenu) realSubmenu.style.display = "";
        };
      }

      const menuItem = this.$refs.menuItem;
      const submenu = this.$refs.submenu;
      this.menuShown = true;
      submenu.style.bottom = "";
      submenu.style.top = `${menuItem.getBoundingClientRect().top - 8}px`;
      if (window.innerHeight - submenu.getBoundingClientRect().bottom < 0) {
        submenu.style.top = "";
        submenu.style.bottom = "8px";
      }
      if (window.innerWidth - menuItem.getBoundingClientRect().right > 200)
        submenu.style.left = `${menuItem.getBoundingClientRect().right}px`;
      else
        submenu.style.left = `${menuItem.getBoundingClientRect().left - 200}px`;
    }
  }
};
</script>

<style lang="scss"></style>

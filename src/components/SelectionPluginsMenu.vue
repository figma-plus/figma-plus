<template lang="pug">
	#selectionPluginsMenuItem.plugin-dropdown-option(ref='menuItem' @click.self="e => e.stopPropagation()" @mouseenter='showSubmenu')
		.plugin-dropdown-option-text Figma Plus
		.plugin-dropdown-option-chevron
		.plugin-dropdown-submenu(ref='submenu' v-show='menuShown')
			#selectionPluginOptions
			.plugin-dropdown-option(v-if='!hasPlugins' @click='openPluginManager')
				.plugin-dropdown-option-text Get Plugins
				.plugin-dropdown-option-shortcut {{ shortcut }}
</template>

<script>
export default {
  data: () => ({
    menuShown: false,
    hasPlugins: false,
    shortcut: navigator.platform.includes("Win") ? "Ctrl+Shift+P" : "⇧⌘P"
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
    showSubmenu() {
      this.hasPlugins =
        document.getElementById("selectionPluginOptions").children.length > 0;
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
      const menuItemBounds = menuItem.getBoundingClientRect();
      const submenuBounds = submenu.getBoundingClientRect();
      submenu.style.bottom = "";
      submenu.style.top = `${menuItemBounds.top - 8}px`;
      submenu.style.left = `${menuItemBounds.right}px`;
      this.menuShown = true;
      if (window.innerHeight - submenuBounds.bottom < 0) {
        submenu.style.top = "";
        submenu.style.bottom = "6px";
      }
    },
    openPluginManager() {
      figmaPlus.togglePluginManager();
    }
  }
};
</script>

<style lang="scss"></style>

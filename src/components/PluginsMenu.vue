<template lang="pug">
	.plugin-dropdown-option(ref='menuItem' @click.self="e => e.stopPropagation()" @mouseenter='showSubmenu')
		.plugin-dropdown-option-text Figma Plus
		.plugin-dropdown-option-chevron
		.plugin-dropdown-submenu(ref='submenu' v-show='menuShown')
			#pluginOptions
			.plugin-dropdown-option(@click='openManager')
				.plugin-dropdown-option-text Manage Plugins
				.plugin-dropdown-option-shortcut {{ shortcut }}
</template>

<script>
export default {
  data: () => ({
    shortcut: navigator.platform.includes("Win") ? "Ctrl+Shift+P" : "⇧⌘P",
    menuShown: false
  }),
  mounted() {
    [
      ...document.querySelectorAll('div[class*="multilevel_dropdown--option"]')
    ].forEach(node =>
      node.addEventListener("mouseover", () => (this.menuShown = false))
    );
  },
  methods: {
    openManager() {
      window.figmaPlus.togglePluginManager();
    },
    showSubmenu() {
      const activeNode = document.querySelector(
        'div[class*="multilevel_dropdown--optionActive"]'
      );
      if (activeNode) {
        const activeClassName = [...activeNode.classList].find(className =>
          className.includes("optionActive")
        );
        activeNode.classList.remove(activeClassName);
        const realSubmenu = document.querySelector(
          'div[class*="multilevel_dropdown--menu--"]'
        );
        if (realSubmenu) realSubmenu.style.display = "none";
        activeNode.onmouseover = () => {
          activeNode.classList.add(activeClassName);
          if (realSubmenu) realSubmenu.style.display = "";
        };
      }

      const menuItem = this.$refs.menuItem;
      const submenu = this.$refs.submenu;
      this.menuShown = true;
      submenu.style.bottom = "";
      submenu.style.top = `${menuItem.getBoundingClientRect().top - 6}px`;
      if (window.innerHeight - submenu.getBoundingClientRect().bottom < 0) {
        submenu.style.top = "";
        submenu.style.bottom = "6px";
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

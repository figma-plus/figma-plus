<template lang="pug">
	.plugin-dropdown-option(@click='runFunction' @mouseenter='showSubmenu' @mouseleave='hideSubmenu' ref='menuItem')
		.plugin-dropdown-option-text {{ itemLabel }}
		.plugin-dropdown-option-shortcut(v-if='shortcut && !submenuItems') {{ getShortcutText(shortcut) }}
		.plugin-dropdown-option-chevron(v-if='submenuItems')
		.plugin-dropdown-submenu(v-if='submenuItems' ref='submenu')
			.plugin-dropdown-option(v-for='submenuItem in submenuItems' :submenuItem='submenuItem' v-if='getConditionTrue(submenuItem.condition)' @click='submenuItem.triggerFunction')
				.plugin-dropdown-option-text {{ submenuItem.itemLabel }}
				.plugin-dropdown-option-shortcut(v-if='submenuItem.shortcut') {{ getShortcutText(submenuItem.shortcut) }}
</template>

<script>
export default {
  data: () => ({
    submenuShown: false
  }),
  props: [
    "menuType",
    "itemLabel",
    "triggerFunction",
    "shortcut",
    "submenuItems",
    "isSubmenu"
  ],
  mounted() {
    if (this.submenuItems) this.$refs.submenu.style.display = "none";
    if (this.isFatMenu) this.$refs.menuItem.style.padding = "0 12px";
  },
  computed: {
    isFatMenu() {
      return (
        this.menuType === "FULLSCREEN_FILENAME_DROPDOWN" ||
        this.menuType === "file-actions-dropdown"
      );
    }
  },
  methods: {
    runFunction() {
      if (!this.submenuItems) this.triggerFunction();
    },
    getConditionTrue(condition) {
      if (typeof condition === "function") {
        return condition();
      } else return true;
    },
    getShortcutText(shortcut) {
      if (!shortcut) return undefined;
      let shortcutText = "";
      if (shortcut.mac && shortcut.windows) {
        if (navigator.platform === "MacIntel") {
          shortcut = shortcut.mac;
          shortcutText += shortcut.control ? "⌃" : "";
          shortcutText += shortcut.option ? "⌥" : "";
          shortcutText += shortcut.shift ? "⇧" : "";
          shortcutText += shortcut.command ? "⌘" : "";
          shortcutText += shortcut.key
            ? shortcut.key.charAt(0).toUpperCase() + shortcut.key.slice(1)
            : "";
        }
        if (navigator.platform === "Win32" || navigator.platform === "Win64") {
          shortcut = shortcut.windows;
          shortcutText += shortcut.control ? "Ctrl+" : "";
          shortcutText += shortcut.alt ? "Alt+" : "";
          shortcutText += shortcut.shift ? "Shift+" : "";
          shortcutText += shortcut.key
            ? shortcut.key.charAt(0).toUpperCase() + shortcut.key.slice(1)
            : "";
        }
      }
      return shortcutText;
    },
    showSubmenu() {
      const activeNode = this.isSubmenu
        ? document.querySelectorAll(
            'div[class*="multilevel_dropdown__REFRESH--optionActive"]'
          )[1]
        : document.querySelector(
            'div[class*="multilevel_dropdown__REFRESH--optionActive"]'
          );
      if (activeNode) {
        const activeClassName = [...activeNode.classList].find(className =>
          className.includes("optionActive")
        );
        activeNode.classList.remove(activeClassName);
        const realSubmenu = document.querySelector(
          'div[class*="multilevel_dropdown__REFRESH--submenu--"]'
        );
        if (realSubmenu) realSubmenu.style.display = "none";
        activeNode.onmouseover = () => {
          activeNode.classList.add(activeClassName);
          if (realSubmenu) realSubmenu.style.display = "";
        };
      }

      if (this.submenuItems) {
        const menuItem = this.$refs.menuItem;
        const submenu = this.$refs.submenu;
        submenu.style.display = "block";
        submenu.style.bottom = "";
        submenu.style.top = `${menuItem.getBoundingClientRect().top - 8}px`;
        if (window.innerHeight - submenu.getBoundingClientRect().bottom < 0) {
          submenu.style.top = "";
          submenu.style.bottom = "8px";
        }
        submenu.style.left = `${menuItem.getBoundingClientRect().right}px`;
      }
    },
    hideSubmenu() {
      if (this.submenuItems) this.$refs.submenu.style.display = "none";
    }
  }
};
</script>

<style lang="scss"></style>

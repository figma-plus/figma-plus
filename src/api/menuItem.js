import MenuItem from '../components/MenuItem.vue';
import selectionPluginsMenu from '../components/SelectionPluginsMenu.vue';

export const addMenuItem = (menuType, label, action, condition, shortcut, submenuItems) => {
	figmaPlus.onMenuOpened((type, hasMoreOptions) => {
		if (type === 'DROPDOWN_TYPE_SELECTION_CONTEXT_MENU' || type === 'DROPDOWN_TYPE_OBJECTS_PANEL_CONTEXT_MENU') {
			if (!document.getElementById('selectionPluginsMenuItem')) {
				const selectionPluginsMenuItem = document.createElement('div');
				const extensions = [...document.querySelectorAll('div[class*="multilevel_dropdown__REFRESH--option"]')].find(
					node => node.firstChild.innerText === 'Extensions'
				);
				const show = [...document.querySelectorAll('div[class*="multilevel_dropdown__REFRESH--option"]')].find(
					node => node.firstChild.innerText === 'Show/Hide'
				);
				const menu = show.parentNode;
				if (extensions) {
					menu.insertBefore(selectionPluginsMenuItem, extensions.nextSibling);
				} else {
					const separator = document.createElement('div');
					separator.className = 'dropdown__REFRESH--separator--11K1o';
					menu.insertBefore(selectionPluginsMenuItem, show);
					menu.insertBefore(separator, show);
				}
				new figmaPlus.Vue({
					el: selectionPluginsMenuItem,
					render: h => h(selectionPluginsMenu)
				});
				const menuBounds = menu.getBoundingClientRect();
				if (window.innerHeight - menuBounds.bottom < 6) {
					menu.style.top = `${window.innerHeight - menuBounds.height - 6}px`;
				}
			}
		}
		if (type === menuType && !(typeof condition === 'function' && !condition()) && !hasMoreOptions)
			injectMenuItem(menuType, false, label, action, shortcut, submenuItems);
	});
	figmaPlus.onSubmenuOpened((type, highlightedOption) => {
		if (type === menuType && !(typeof condition === 'function' && !condition()) && highlightedOption === 'More')
			injectMenuItem(menuType, true, label, action, shortcut, submenuItems);
	});
};

export const injectMenuItem = (menuType, isSubmenu, label, action, shortcut, submenuItems) => {
	const isFatDropdown = menuType === 'FULLSCREEN_FILENAME_DROPDOWN' || menuType === 'file-actions-dropdown';
	let menu = isSubmenu
		? document.querySelector('div[class*="multilevel_dropdown__REFRESH--menu--"]')
		: document.querySelector('div[class*="dropdown__REFRESH--dropdown--"]');
	if (menuType === 'fullscreen-menu-dropdown') menu = document.getElementById('pluginOptions');
	if (menuType === 'DROPDOWN_TYPE_SELECTION_CONTEXT_MENU' || menuType === 'DROPDOWN_TYPE_OBJECTS_PANEL_CONTEXT_MENU')
		menu = document.getElementById('selectionPluginOptions');
	const newMenuItem = document.createElement('div');
	menu.appendChild(newMenuItem);
	new figmaPlus.Vue({
		el: newMenuItem,
		data: function() {
			return {
				menuType: menuType,
				label: label,
				action: action,
				shortcut: shortcut,
				submenuItems: submenuItems,
				isSubmenu: isSubmenu
			};
		},
		components: { MenuItem },
		template: `<MenuItem :menuType='menuType' :label='label' :action='action' :shortcut='shortcut' :submenuItems='submenuItems' :isSubmenu='isSubmenu'></MenuItem>`
	});
	if (menuType === 'fullscreen-menu-dropdown') {
		if (menu.style.borderBottom === '') {
			menu.style.borderBottom = '1px solid #2c2c2c';
			menu.style.paddingBottom = '6px';
			menu.style.marginBottom = '6px';
		}
	}
	const numberOfSeparators = [...menu.children].filter(node => node.className.includes('dropdown--separator')).length;
	if (!isFatDropdown)
		menu.style.top = isSubmenu
			? `${parseInt(menu.style.top) - 24 - numberOfSeparators * 2}px`
			: `${parseInt(menu.style.top) - 24}px`;
};

import { scene } from './scene.js';
import Vue from 'vue';
import VModal from 'vue-js-modal';
import VueTabs from './vue-tabs';
import MenuItem from './components/MenuItem.vue';
import React from 'react';
import ReactDOM from 'react-dom';

Vue.config.productionTip = false;
Vue.use(VModal, { dynamic: true, injectModalsContainer: true });
Vue.use(VueTabs);
window.vueInstance = new Vue();

export const figmaPlus = {
	Vue: Vue,
	React: React,
	ReactDOM: ReactDOM,
	scene: scene,
	onFileBrowserLoaded: triggerFunction => {
		window.addEventListener('fileBrowserLoaded', () => {
			triggerFunction();
		});
	},
	onFileBrowserChanged: triggerFunction => {
		window.addEventListener('fileBrowserChanged', () => {
			triggerFunction();
		});
	},
	onFileBrowserUnloaded: triggerFunction => {
		window.addEventListener('fileBrowserUnloaded', () => {
			triggerFunction();
		});
	},
	onFileLoaded: triggerFunction => {
		window.addEventListener('fileLoaded', () => {
			triggerFunction();
		});
	},
	onFileUnloaded: triggerFunction => {
		window.addEventListener('fileUnloaded', () => {
			triggerFunction();
		});
	},
	onModalOpened: triggerFunction => {
		window.addEventListener('modalOpened', event => {
			triggerFunction(event.detail);
		});
	},
	onModalClosed: triggerFunction => {
		window.addEventListener('modalClosed', () => {
			triggerFunction();
		});
	},
	onMenuOpened: triggerFunction => {
		window.addEventListener('menuOpened', event => {
			triggerFunction(event.detail.type, event.detail.hasMoreOptions);
		});
	},
	onSubmenuOpened: triggerFunction => {
		window.addEventListener('submenuOpened', event => {
			triggerFunction(event.detail.type, event.detail.highlightedOption);
		});
	},
	onMenuClosed: triggerFunction => {
		window.addEventListener('menuClosed', () => {
			triggerFunction();
		});
	},
	onDomChanged: triggerFunction => {
		window.addEventListener('domChanged', event => {
			triggerFunction(event.detail);
		});
	},
	createPluginsMenuItem: (itemLabel, triggerFunction, condition, shortcut, submenuItems) => {
		window.addEventListener('pluginOptionsFound', () => {
			if (typeof condition === 'function') {
				if (condition()) {
					injectMenuItem('fullscreen-menu-dropdown', false, itemLabel, triggerFunction, shortcut, submenuItems);
				}
			} else injectMenuItem('fullscreen-menu-dropdown', false, itemLabel, triggerFunction, shortcut, submenuItems);
		});
	},
	createContextMenuItem: {
		Canvas: (itemLabel, triggerFunction, condition, shortcut, submenuItems) => {
			addMenuItem('DROPDOWN_TYPE_CANVAS_CONTEXT_MENU', itemLabel, triggerFunction, condition, shortcut, submenuItems);
		},
		Selection: (itemLabel, triggerFunction, condition, shortcut, submenuItems) => {
			addMenuItem(
				'DROPDOWN_TYPE_SELECTION_CONTEXT_MENU',
				itemLabel,
				triggerFunction,
				condition,
				shortcut,
				submenuItems
			);
		},
		ObjectsPanel: (itemLabel, triggerFunction, condition, shortcut, submenuItems) => {
			addMenuItem(
				'DROPDOWN_TYPE_OBJECTS_PANEL_CONTEXT_MENU',
				itemLabel,
				triggerFunction,
				condition,
				shortcut,
				submenuItems
			);
		},
		Page: (itemLabel, triggerFunction, condition, shortcut, submenuItems) => {
			addMenuItem('DROPDOWN_TYPE_PAGE_CONTEXT_MENU', itemLabel, triggerFunction, condition, shortcut, submenuItems);
		},
		Filename: (itemLabel, triggerFunction, condition, shortcut, submenuItems) => {
			addMenuItem('FULLSCREEN_FILENAME_DROPDOWN', itemLabel, triggerFunction, condition, shortcut, submenuItems);
		},
		Version: (itemLabel, triggerFunction, condition, shortcut, submenuItems) => {
			addMenuItem(
				'DROPDOWN_TYPE_SAVEPOINT_CONTEXT_MENU',
				itemLabel,
				triggerFunction,
				condition,
				shortcut,
				submenuItems
			);
		},
		File: (itemLabel, triggerFunction, condition, shortcut, submenuItems) => {
			addMenuItem('file-actions-dropdown', itemLabel, triggerFunction, condition, shortcut, submenuItems);
		}
	},
	createKeyboardShortcut: (shortcut, triggerFunction) => {
		if (document.getElementsByClassName('focus-target').length > 0) {
			const focusTarget = document.getElementsByClassName('focus-target')[0];
			addKeyboardShortcutInFile(focusTarget, shortcut, triggerFunction);
		} else {
			window.addEventListener('focusTargetFound', event => {
				const focusTarget = event.detail;
				addKeyboardShortcutInFile(focusTarget, shortcut, triggerFunction);
			});
		}
	},
	addTooltip: (element, tooltipText, showAfterDelay) => {
		element.addEventListener('mousemove', () => {
			window.App._dispatch({
				type: showAfterDelay ? 'TOOLTIP_SHOW_AFTER_DELAY' : 'TOOLTIP_SHOW_IMMEDIATELY',
				payload: {
					interactive: false,
					position: 0,
					target: { kind: 2, text: tooltipText },
					targetRect: element.getBoundingClientRect(),
					timeoutDelay: 500
				}
			});
		});
		element.addEventListener('click', () => {
			if (window.App._state.tooltip.state === 1) window.App._dispatch({ type: 'TOOLTIP_HIDE' });
		});
	},
	showToast: (message, timeoutInSeconds, buttonText, buttonAction) => {
		const toast = {
			type: 'VISUAL_BELL_ENQUEUE',
			payload: {
				type: 'installed_plugin',
				message: message,
				timeout: timeoutInSeconds ? timeoutInSeconds * 1000 : 3000
			}
		};
		buttonText && buttonAction
			? Object.assign(toast.payload, {
					button: {
						text: buttonText,
						action: buttonAction
					}
			  })
			: null;
		window.App._dispatch(toast);
	},
	showUI: (modalTitle, callback, width, height, positionX, positionY, overlay, tabs) => {
		width = width ? width : 300;
		height = height ? height : 'auto';
		positionX = positionX ? positionX : 0.5;
		positionY = positionY ? positionY : 0.5;
		vueInstance.$modal.hide(modalTitle);
		vueInstance.$modal.show(
			{
				props: tabs ? ['tabs'] : [],
				template: tabs
					? `
					<div class='modal'>
						<div class='modal-header'>
							${modalTitle}
							<div class='modal-close-button' @click="$emit('close')"></div>
						</div>
						<vue-tabs>
							<v-tab v-for='tab in tabs' key='tab' :title="tab">
							</v-tab>
						</vue-tabs>
					</div>
			`
					: `
					<div class='modal'>
						<div class='modal-header'>
							${modalTitle}
							<div class='modal-close-button' @click="$emit('close')"></div>
						</div>
						<div class='modal-content'>
							<div></div>
						</div>
					</div>
			`
			},
			{
				tabs: tabs
			},
			{
				name: modalTitle,
				draggable: overlay ? false : '.modal-header',
				width: width,
				height: height,
				pivotX: positionX,
				pivotY: positionY
			},
			{
				opened: e => {
					if (overlay) {
						const overlay = document.getElementsByClassName('v--modal-overlay')[0];
						overlay.style.setProperty('width', '100%', 'important');
						overlay.style.setProperty('height', '100%', 'important');
					}
					if (tabs) {
						const args = tabs.map(tab => {
							const index = tabs.indexOf(tab);
							return e.ref.firstChild.children[1].children[1].children[index].firstChild;
						});
						callback.apply(this, args);
					} else callback(e.ref.firstChild.children[1].firstChild);
				}
			}
		);
		if (document.querySelector('div[class*="nav-"]') === null) {
			figmaPlus.onFileUnloaded(() => {
				vueInstance.$modal.hide(modalTitle);
			});
		} else {
			figmaPlus.onFileBrowserUnloaded(() => {
				vueInstance.$modal.hide(modalTitle);
			});
		}
	},
	hideUI: modalTitle => {
		vueInstance.$modal.hide(modalTitle);
	}
};

const addMenuItem = (menuType, itemLabel, triggerFunction, condition, shortcut, submenuItems) => {
	figmaPlus.onMenuOpened((type, hasMoreOptions) => {
		if (type === menuType) {
			if (typeof condition === 'function') {
				if (condition()) {
					if (!hasMoreOptions) injectMenuItem(menuType, false, itemLabel, triggerFunction, shortcut, submenuItems);
				}
			} else {
				if (!hasMoreOptions) injectMenuItem(menuType, false, itemLabel, triggerFunction, shortcut, submenuItems);
			}
		}
	});
	figmaPlus.onSubmenuOpened((type, highlightedOption) => {
		if (type === menuType) {
			if (typeof condition === 'function') {
				if (condition()) {
					if (highlightedOption === 'More')
						injectMenuItem(menuType, true, itemLabel, triggerFunction, shortcut, submenuItems);
				}
			} else {
				if (highlightedOption === 'More')
					injectMenuItem(menuType, true, itemLabel, triggerFunction, shortcut, submenuItems);
			}
		}
	});
};

const injectMenuItem = (menuType, isSubmenu, itemLabel, triggerFunction, shortcut, submenuItems) => {
	const isFatDropdown = menuType === 'FULLSCREEN_FILENAME_DROPDOWN' || menuType === 'file-actions-dropdown';
	let menu = isSubmenu
		? document.querySelector('div[class*="multilevel_dropdown--menu--"]')
		: document.querySelector('div[class*="dropdown--dropdown--"]');
	menu = menuType === 'fullscreen-menu-dropdown' ? document.getElementById('pluginOptions') : menu;
	const newMenuItem = document.createElement('div');
	menu.appendChild(newMenuItem);
	new figmaPlus.Vue({
		el: newMenuItem,
		data: function() {
			return {
				menuType: menuType,
				itemLabel: itemLabel,
				triggerFunction: triggerFunction,
				shortcut: shortcut,
				submenuItems: submenuItems
			};
		},
		components: { MenuItem },
		template: `<MenuItem :menuType='menuType' :itemLabel='itemLabel' :triggerFunction='triggerFunction' :shortcut='shortcut' :submenuItems='submenuItems'></MenuItem>`
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

const addKeyboardShortcutInFile = (focusTarget, shortcut, triggerFunction) => {
	if (shortcut.mac && shortcut.windows) {
		focusTarget.addEventListener('keydown', e => {
			if (navigator.platform === 'MacIntel') {
				if (
					e.metaKey !== !shortcut.mac.command &&
					e.shiftKey !== !shortcut.mac.shift &&
					e.ctrlKey !== !shortcut.mac.control &&
					e.altKey !== !shortcut.mac.option &&
					e.key.toLowerCase() === shortcut.mac.key.toLowerCase()
				) {
					e.preventDefault();
					triggerFunction();
				}
			}
			if (navigator.platform === 'Win32' || navigator.platform === 'Win64') {
				if (
					e.shiftKey !== !shortcut.windows.shift &&
					e.ctrlKey !== !shortcut.windows.control &&
					e.altKey !== !shortcut.windows.alt &&
					e.key.toLowerCase() === shortcut.windows.key.toLowerCase()
				) {
					e.preventDefault();
					triggerFunction();
				}
			}
		});
	}
};

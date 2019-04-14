import { scene } from './scene';
import { createKeyboardShortcut } from './keyboardShortcut';
import { showUI, hideUI } from './ui';
import { addMenuItem, injectMenuItem } from './menuItem';
import Vue from 'vue';
import React from 'react';
import ReactDOM from 'react-dom';

Vue.config.productionTip = false;

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
	onAppLoaded: triggerFunction => {
		window.addEventListener('appLoaded', () => {
			triggerFunction();
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
	createKeyboardShortcut: (shortcut, triggerFunction, condition) => {
		createKeyboardShortcut(shortcut, triggerFunction, condition);
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
	showUI: (modalTitle, callback, width, height, positionX, positionY, overlay, includePadding, tabs) => {
		showUI(modalTitle, callback, width, height, positionX, positionY, overlay, includePadding, tabs);
	},
	hideUI: modalTitle => {
		hideUI(modalTitle);
	},
	toggleShowNodeId: () => App.triggerAction('toggle-show-guids'),
	isDesktop: () => window.__figmaDesktop !== undefined,
	getOrgs: () => App._state.orgById,
	getMyOrgId: () => App._state.currentOrgId,
	getTeams: () => App._state.teams,
	getMyTeams: () => App._state.user.teams,
	getFileKey: () => App._state.editingFileKey
};

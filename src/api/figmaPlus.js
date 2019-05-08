import { getNode } from './scene';
import { registerKeyboardShortcut } from './keyboardShortcut';
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
	getNodeById: nodeId => {
		return getNode(nodeId);
	},
	styles: {
		findAll: callback => {
			const flattenedFiles = [].concat.apply(
				[],
				Object.values(App._state.library.published.styles).map(org => Object.values(org))
			);
			const flattenedStyles = [].concat.apply([], flattenedFiles.map(team => Object.values(team)));
			const publishedStyles = flattenedStyles.map(style => {
				const obj = {
					id: style.key,
					name: style.name,
					type: style.style_type,
					description: style.description,
					canvas_url: style.canvas_url,
					file_key: style.file_key,
					content_hash: style.content_hash
				};
				if (style.thumbnail_url) obj.thumbnail_url = style.thumbnail_url;
				if (style.style_type === 'FILL' && style.meta) obj.fills = style.meta.style_thumbnail.fillPaints;
				if (style.style_type === 'EFFECT' && style.meta) obj.effects = style.meta.style_thumbnail.effects;
				if (style.style_type === 'GRID' && style.meta) obj.layoutGrids = style.meta.style_thumbnail.layoutGrids;
				obj.remote = true;
				return obj;
			});
			const allStyles = figmaPlus.styles.local.concat(publishedStyles);
			callback = callback ? callback : () => true;
			return allStyles.filter(callback);
		},
		findOne: callback => {
			const flattenedFiles = [].concat.apply(
				[],
				Object.values(App._state.library.published.styles).map(org => Object.values(org))
			);
			const flattenedStyles = [].concat.apply([], flattenedFiles.map(team => Object.values(team)));
			const publishedStyles = flattenedStyles.map(style => {
				const obj = {
					id: style.key,
					name: style.name,
					type: style.style_type,
					description: style.description,
					canvas_url: style.canvas_url,
					file_key: style.file_key,
					content_hash: style.content_hash
				};
				if (style.thumbnail_url) obj.thumbnail_url = style.thumbnail_url;
				if (style.style_type === 'FILL' && style.meta) obj.fills = style.meta.style_thumbnail.fillPaints;
				if (style.style_type === 'EFFECT' && style.meta) obj.effects = style.meta.style_thumbnail.effects;
				if (style.style_type === 'GRID' && style.meta) obj.layoutGrids = style.meta.style_thumbnail.layoutGrids;
				obj.remote = true;
				return obj;
			});
			const allStyles = figmaPlus.styles.local.concat(publishedStyles);
			if (callback) return allStyles.find(callback) ? allStyles.find(callback) : null;
			else return null;
		}
	},
	comments: {
		findAll: callback => {
			const comments = Object.values(App._state.comments.commentsById);
			callback = callback ? callback : () => true;
			return comments.filter(callback);
		},
		findOne: callback => {
			const comments = Object.values(App._state.comments.commentsById);
			if (callback) return comments.find(callback) ? comments.find(callback) : null;
			else return null;
		}
	},
	getStyleById: styleId => {
		const styles = figmaPlus.styles.local.concat(figmaPlus.styles.published);
		return styles.find(style => style.id === styleId);
	},
	getCommentById: commentId => {
		return figmaPlus.comments.findOne(comment => comment.id === commentId);
	},
	onFileBrowserLoaded: action => {
		window.addEventListener('fileBrowserLoaded', () => {
			action();
		});
	},
	onFileBrowserChanged: action => {
		window.addEventListener('fileBrowserChanged', () => {
			action();
		});
	},
	onFileBrowserUnloaded: action => {
		window.addEventListener('fileBrowserUnloaded', () => {
			action();
		});
	},
	onFileLoaded: action => {
		window.addEventListener('fileLoaded', () => {
			action();
		});
	},
	onFileUnloaded: action => {
		window.addEventListener('fileUnloaded', () => {
			action();
		});
	},
	onModalOpened: action => {
		window.addEventListener('modalOpened', event => {
			action(event.detail);
		});
	},
	onModalClosed: action => {
		window.addEventListener('modalClosed', () => {
			action();
		});
	},
	onMenuOpened: action => {
		window.addEventListener('menuOpened', event => {
			action(event.detail.type, event.detail.hasMoreOptions);
		});
	},
	onSubmenuOpened: action => {
		window.addEventListener('submenuOpened', event => {
			action(event.detail.type, event.detail.highlightedOption);
		});
	},
	onMenuClosed: action => {
		window.addEventListener('menuClosed', () => {
			action();
		});
	},
	onDomChanged: action => {
		window.addEventListener('domChanged', event => {
			action(event.detail);
		});
	},
	onAppLoaded: action => {
		window.addEventListener('appLoaded', () => {
			action();
		});
	},
	addCommand: ({
		label,
		action,
		condition,
		shortcut,
		submenu,
		showInCanvasMenu,
		showInSelectionMenu,
		hideInMainMenu
	}) => {
		if (!action) action = () => {};
		if (!hideInMainMenu) {
			window.addEventListener('pluginOptionsFound', () => {
				if (typeof condition === 'function') {
					if (condition()) {
						injectMenuItem('fullscreen-menu-dropdown', false, label, action, shortcut, submenu);
					}
				} else injectMenuItem('fullscreen-menu-dropdown', false, label, action, shortcut, submenu);
			});
		}
		if (showInCanvasMenu) addMenuItem('DROPDOWN_TYPE_CANVAS_CONTEXT_MENU', label, action, condition, shortcut, submenu);
		if (showInSelectionMenu) {
			addMenuItem('DROPDOWN_TYPE_SELECTION_CONTEXT_MENU', label, action, condition, shortcut, submenu);
			addMenuItem('DROPDOWN_TYPE_OBJECTS_PANEL_CONTEXT_MENU', label, action, condition, shortcut, submenu);
		}
		if (shortcut && !submenu) registerKeyboardShortcut(shortcut, action, condition);
		if (submenu)
			submenu.forEach(menuItem => {
				if (menuItem.shortcut) registerKeyboardShortcut(menuItem.shortcut, menuItem.action, menuItem.condition);
			});
	},
	registerKeyboardShortcut: ({ shortcut, action, condition }) => {
		registerKeyboardShortcut(shortcut, action, condition);
	},
	addTooltip: ({ element, text, showAfterDelay }) => {
		element.addEventListener('mousemove', () => {
			const currentTooltip = App._state.tooltip;
			if (
				JSON.stringify(currentTooltip.targetRect) === JSON.stringify(element.getBoundingClientRect()) &&
				currentTooltip.state === 2
			) {
				App._dispatch({ type: 'TOOLTIP_CANCEL_HIDE_AFTER_DELAY', payload: {} });
			} else if (
				JSON.stringify(currentTooltip.targetRect) !== JSON.stringify(element.getBoundingClientRect()) &&
				currentTooltip.state === 2
			) {
				window.App._dispatch({
					type: 'TOOLTIP_UPDATE',
					payload: {
						tooltip: {
							state: 2,
							position: currentTooltip.position,
							target: { kind: 2, text: text },
							targetRect: element.getBoundingClientRect(),
							timeoutID: null,
							interactive: false
						}
					}
				});
			} else {
				window.App._dispatch({
					type: showAfterDelay === false ? 'TOOLTIP_SHOW_IMMEDIATELY' : 'TOOLTIP_SHOW_AFTER_DELAY',
					payload: {
						interactive: false,
						position: 0,
						target: { kind: 2, text: text },
						targetRect: element.getBoundingClientRect(),
						timeoutDelay: 500
					}
				});
			}
		});
		element.addEventListener('click', () => {
			if (window.App._state.tooltip.state === 1) window.App._dispatch({ type: 'TOOLTIP_HIDE' });
		});
	},
	showToast: ({ message, timeoutInSeconds, buttonText, buttonAction }) => {
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
	showUI: ({
		title,
		html,
		onMount,
		reactComponent,
		vueComponent,
		width,
		height,
		positionX,
		positionY,
		overlay,
		padding,
		useFigmaStyles,
		tabs
	}) => {
		showUI(
			title,
			html,
			onMount,
			reactComponent,
			vueComponent,
			width,
			height,
			positionX,
			positionY,
			overlay,
			padding,
			useFigmaStyles,
			tabs
		);
	},
	hideUI: title => {
		hideUI(title);
	},
	viewport: {
		scrollAndZoomIntoView: nodes => {
			const selectedNodes = Object.keys(App._state.mirror.sceneGraphSelection);
			if (nodes.length === 0) return;
			nodes = typeof nodes[0] === 'object' ? nodes.map(node => node.id) : nodes;
			App.sendMessage('clearSelection');
			App.sendMessage('addToSelection', { nodeIds: nodes });
			App.triggerAction('zoom-to-selection');
			App.sendMessage('clearSelection');
			if (selectedNodes.length > 0) App.sendMessage('addToSelection', { nodeIds: selectedNodes });
		},
		panToNode: node => {
			node = typeof node === 'object' ? node.id : node;
			App.panToNode(node);
		}
	},
	toggleShowNodeId: () => App.triggerAction('toggle-show-guids')
};

Object.defineProperties(figmaPlus, {
	isDesktop: {
		get() {
			return window.__figmaDesktop !== undefined;
		}
	},
	orgs: {
		get() {
			return App._state.orgById;
		}
	},
	myOrg: {
		get() {
			return App._state.currentOrgId;
		}
	},
	teams: {
		get() {
			return App._state.teams;
		}
	},
	myTeams: {
		get() {
			return App._state.user.teams;
		}
	},
	fileKey: {
		get() {
			return App._state.editingFileKey;
		}
	},
	fileName: {
		get() {
			return App.getCurrentFileName();
		}
	}
});

Object.defineProperties(figmaPlus.viewport, {
	center: {
		get() {
			const viewportInfo = App.getViewportInfo();
			return { x: viewportInfo.x, y: viewportInfo.y };
		},
		set(val) {
			App.sendMessage('setCanvasSpaceCenter', { x: val.x, y: val.y });
		}
	},
	zoom: {
		get() {
			return App.getViewportInfo().zoomScale;
		},
		set(val) {
			App.sendMessage('updateActiveCanvasCurrentZoom', { zoom: val });
		}
	}
});

Object.defineProperties(figmaPlus, {
	root: {
		get() {
			return getNode('0:0');
		}
	},
	currentPage: {
		get() {
			const currentPage = getNode(App._state.mirror.appModel.currentPage);
			Object.defineProperty(currentPage, 'selection', {
				get() {
					return Object.keys(App._state.mirror.sceneGraphSelection).map(nodeId => getNode(nodeId));
				},
				set(selections) {
					if (selections.length === 0) {
						App.sendMessage('clearSelection');
						return;
					}
					selections = typeof selections[0] === 'object' ? selections.map(selection => selection.id) : selections;
					App.sendMessage('clearSelection');
					App.sendMessage('addToSelection', { nodeIds: selections });
					if (App.fromFullscreen._listenersByEvent.scrollToNode)
						App.fromFullscreen._listenersByEvent.scrollToNode[0]({ nodeId: selections[0] });
				}
			});
			return currentPage;
		}
	}
});

Object.defineProperties(figmaPlus.styles, {
	local: {
		get() {
			return Object.values(App._state.library.local.styles).map(style => {
				const obj = {
					id: style.key,
					name: style.name,
					type: style.style_type,
					description: style.description,
					content_hash: style.content_hash
				};
				if (style.thumbnail_url) obj.thumbnail_url = style.thumbnail_url;
				if (style.style_type === 'FILL' && style.meta) obj.fills = style.meta.style_thumbnail.fillPaints;
				if (style.style_type === 'EFFECT' && style.meta) obj.effects = style.meta.style_thumbnail.effects;
				if (style.style_type === 'GRID' && style.meta) obj.layoutGrids = style.meta.style_thumbnail.layoutGrids;
				obj.remote = false;
				return obj;
			});
		}
	},
	libraries: {
		get() {
			const libraries = [];
			Object.values(App._state.library.published.styles).forEach(team => {
				for (let file in team) {
					const fileObj = App._state.fileByKey[file];
					const styles = Object.values(team[file]).map(style => {
						return {
							id: style.key,
							name: style.name,
							type: style.style_type,
							description: style.description,
							canvas_url: style.canvas_url,
							file_key: style.file_key,
							content_hash: style.content_hash
						};
					});
					const obj = { name: fileObj.name, key: file, styles: styles };
					libraries.push(obj);
				}
			});
			return libraries;
		}
	},
	addedLibraries: {
		get() {
			const enalbedLibraries = Object.keys(App._state.library.subscriptions.byFile[App.editingFileKey()]).filter(
				key => {
					return App._state.library.subscriptions.byFile[App.editingFileKey()][key];
				}
			);
			const libraries = [];
			Object.values(App._state.library.published.styles).forEach(team => {
				for (let file in team) {
					const fileObj = App._state.fileByKey[file];
					const styles = Object.values(team[file]).map(style => {
						return {
							id: style.key,
							name: style.name,
							type: style.style_type,
							description: style.description,
							canvas_url: style.canvas_url,
							file_key: style.file_key,
							content_hash: style.content_hash
						};
					});
					const obj = { name: fileObj.name, key: file, styles: styles };
					libraries.push(obj);
				}
			});
			return enalbedLibraries.map(enabledLibrary => libraries.find(library => library.key === enabledLibrary));
		}
	}
});

Object.defineProperty(figmaPlus.comments, 'threads', {
	get() {
		const comments = App._state.comments;
		return Object.values(comments.commentIdsByThread).map(thread => {
			if (thread.length === 1) return comments.commentsById[thread[0]];
			const parent = comments.commentsById[thread[thread.length - 1]];
			parent.replies = thread
				.slice(0, -1)
				.reverse()
				.map(comment => comments.commentsById[comment]);
			return parent;
		});
	}
});

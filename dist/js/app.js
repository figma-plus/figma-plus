(function(t) {
	function e(e) {
		for (var i, a, r = e[0], l = e[1], u = e[2], d = 0, p = []; d < r.length; d++)
			(a = r[d]), s[a] && p.push(s[a][0]), (s[a] = 0);
		for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (t[i] = l[i]);
		c && c(e);
		while (p.length) p.shift()();
		return o.push.apply(o, u || []), n();
	}
	function n() {
		for (var t, e = 0; e < o.length; e++) {
			for (var n = o[e], i = !0, r = 1; r < n.length; r++) {
				var l = n[r];
				0 !== s[l] && (i = !1);
			}
			i && (o.splice(e--, 1), (t = a((a.s = n[0]))));
		}
		return t;
	}
	var i = {},
		s = { app: 0 },
		o = [];
	function a(e) {
		if (i[e]) return i[e].exports;
		var n = (i[e] = { i: e, l: !1, exports: {} });
		return t[e].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
	}
	(a.m = t),
		(a.c = i),
		(a.d = function(t, e, n) {
			a.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
		}),
		(a.r = function(t) {
			'undefined' !== typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
				Object.defineProperty(t, '__esModule', { value: !0 });
		}),
		(a.t = function(t, e) {
			if ((1 & e && (t = a(t)), 8 & e)) return t;
			if (4 & e && 'object' === typeof t && t && t.__esModule) return t;
			var n = Object.create(null);
			if ((a.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: t }), 2 & e && 'string' != typeof t))
				for (var i in t)
					a.d(
						n,
						i,
						function(e) {
							return t[e];
						}.bind(null, i)
					);
			return n;
		}),
		(a.n = function(t) {
			var e =
				t && t.__esModule
					? function() {
							return t['default'];
					  }
					: function() {
							return t;
					  };
			return a.d(e, 'a', e), e;
		}),
		(a.o = function(t, e) {
			return Object.prototype.hasOwnProperty.call(t, e);
		}),
		(a.p = '/');
	var r = (window['figmaPlus'] = window['figmaPlus'] || []),
		l = r.push.bind(r);
	(r.push = e), (r = r.slice());
	for (var u = 0; u < r.length; u++) e(r[u]);
	var c = l;
	o.push([0, 'chunk-vendors']), n();
})({
	0: function(t, e, n) {
		t.exports = n('56d7');
	},
	'12ca': function(t, e, n) {},
	'18f3': function(t, e, n) {
		'use strict';
		var i = n('4265'),
			s = n.n(i);
		s.a;
	},
	'212c': function(t) {
		t.exports = [
			{
				id: 'find-and-replace',
				github: 'https://github.com/jackiecorn/figma-find-and-replace/',
				approvedVersion: '1.0.0',
				approvedCommit: '3c77aa8f6916082c00f8cb6a82d1d0de8d62b3f2'
			},
			{
				id: 'power-platform-theme-switcher',
				github: 'https://github.com/jackiecorn/power-platform-theme-switcher/',
				approvedVersion: '1.0.0',
				approvedCommit: 'ced93c24f275b448a0be36b551bf68dc7ecdc286'
			},
			{
				id: 'power-platform-library-enabler',
				github: 'https://github.com/jackiecorn/power-platform-library-enabler/',
				approvedVersion: '1.0.0',
				approvedCommit: '1df9e1127681f3bf20213ebdfc7d342c6ef1639b'
			},
			{
				id: 'figma-advanced-rename-plugin',
				github: 'https://github.com/cdes/figma-advanced-rename-plugin/',
				approvedVersion: '2.0.2',
				approvedCommit: 'e3e33ecd0c8aeee89e4b660ba3cb8468a30e1dae'
			},
			{
				id: 'figma-content-generator-plugin',
				github: 'https://github.com/cdes/figma-content-generator-plugin/',
				approvedVersion: '0.50.5',
				approvedCommit: '6f8aa394c641a6839666e321f132f99d2320f32f'
			},
			{
				id: 'figma-arabic-support-plugin',
				github: 'https://github.com/cdes/figma-arabic-support-plugin/',
				approvedVersion: '0.0.5',
				approvedCommit: 'b60823add611e91441c44eb3eec24a526d995fef'
			},
			{
				id: 'figma-automations-plugin',
				github: 'https://github.com/cdes/figma-automations-plugin/',
				approvedVersion: '0.0.2',
				approvedCommit: '72dcef1358bc1a45b27f14934a390af4a2926a83'
			},
			{
				id: 'files-list-view',
				github: 'https://github.com/jackiecorn/figma-files-list-view/',
				approvedVersion: '1.0.1',
				approvedCommit: '8ac156861d81afdac19fb1f07f868df56b6e27c0'
			},
			{
				id: 'paste-and-replace',
				github: 'https://github.com/jackiecorn/figma-paste-and-replace/',
				approvedVersion: '1.0.0',
				approvedCommit: 'f3c2d012f091398f309c27a3269463543370e6ce'
			},
			{
				id: 'replace-with-component',
				github: 'https://github.com/jackiecorn/figma-replace-with-component/',
				approvedVersion: '1.0.1',
				approvedCommit: '6981abe55998422857111b537f0c50a74064d996'
			},
			{
				id: 'paste-to-all',
				github: 'https://github.com/jackiecorn/figma-paste-to-all/',
				approvedVersion: '1.0.0',
				approvedCommit: '407b52b5697d465b8845cda0c6e5a07e7663ede5'
			},
			{
				id: 'figma-material-design-icons-plugin',
				github: 'https://github.com/cdes/figma-material-design-icons-plugin/',
				approvedVersion: '0.0.3',
				approvedCommit: '607df7cb69ddf3d6c0d98515f9e31c1d0b09f2db'
			},
			{
				id: 'figma-dark-ui-plugin',
				github: 'https://github.com/PaperTiger/figma-dark-ui/',
				approvedVersion: '0.0.3',
				approvedCommit: '7caff7cf7bcd0093739d26741aa1a17a7e5e6bce'
			}
		];
	},
	'3cf6': function(t, e, n) {
		'use strict';
		var i = n('6b25'),
			s = n.n(i);
		s.a;
	},
	'416c': function(t, e, n) {
		'use strict';
		var i = n('d073'),
			s = n.n(i);
		s.a;
	},
	4265: function(t, e, n) {},
	'42ee': function(t, e, n) {},
	'4bbf': function(t, e, n) {
		'use strict';
		/*!
		 * vue-nav-tabs v0.5.7
		 * (c) 2019-present cristij <joracristi@gmail.com>
		 * Released under the MIT License.
		 */ function i(t) {
			return t && 'object' === typeof t && 'default' in t ? t['default'] : t;
		}
		Object.defineProperty(e, '__esModule', { value: !0 });
		var s = i(n('92fa')),
			o = {
				name: 'vue-tabs',
				props: {
					activeTabColor: String,
					activeTextColor: String,
					disabledColor: String,
					disabledTextColor: String,
					textPosition: { type: String, default: 'center' },
					type: { type: String, default: 'tabs' },
					direction: { type: String, default: 'horizontal' },
					centered: Boolean,
					value: [String, Number, Object]
				},
				data: function() {
					return { activeTabIndex: 0, tabs: [] };
				},
				computed: {
					isTabShape: function() {
						return 'tabs' === this.type;
					},
					isStacked: function() {
						return 'vertical' === this.direction;
					},
					classList: function() {
						return 'modal-tabs';
					},
					stackedClass: function() {
						return this.isStacked ? 'stacked' : '';
					},
					activeTabStyle: function() {
						return { backgroundColor: this.activeTabColor, color: this.activeTextColor };
					}
				},
				methods: {
					navigateToTab: function(t, e) {
						this.changeTab(this.activeTabIndex, t, e);
					},
					activateTab: function(t) {
						this.activeTabIndex = t;
						var e = this.tabs[t];
						(e.active = !0), this.$emit('input', e.title);
					},
					changeTab: function(t, e, n) {
						var i = this.tabs[t] || {},
							s = this.tabs[e];
						s.disabled ||
							((this.activeTabIndex = e),
							(i.active = !1),
							(s.active = !0),
							this.$emit('input', this.tabs[e].title),
							this.$emit('tab-change', e, s, i),
							this.tryChangeRoute(n));
					},
					tryChangeRoute: function(t) {
						this.$router && t && this.$router.push(t);
					},
					addTab: function(t) {
						var e = this.$slots.default.indexOf(t.$vnode);
						this.tabs.splice(e, 0, t);
					},
					removeTab: function(t) {
						var e = this.tabs,
							n = e.indexOf(t);
						n > -1 && e.splice(n, 1);
					},
					getTabs: function() {
						return this.$slots.default
							? this.$slots.default.filter(function(t) {
									return t.componentOptions;
							  })
							: [];
					},
					findTabAndActivate: function(t) {
						var e = this.tabs.findIndex(function(e, n) {
							return e.title === t || n === t;
						});
						e !== this.activeTabIndex ||
							this.tabs[this.activeTabIndex].active ||
							(this.tabs[this.activeTabIndex].active = !0),
							-1 !== e ? this.changeTab(this.activeTabIndex, e) : this.changeTab(this.activeTabIndex, 0);
					},
					renderTabTitle: function(t) {
						var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'top',
							n = this.$createElement;
						if (0 !== this.tabs.length) {
							var i = this.tabs[t],
								s = i.active,
								o = i.title,
								a = { color: this.activeTabColor };
							'center' === e && (a.color = this.activeTextColor);
							var r = n('span', { class: 'title title_' + e, style: s ? a : {} }, [
								'center' === e && this.renderIcon(t),
								o
							]);
							return i.$slots.title
								? i.$slots.title
								: i.$scopedSlots.title
								? i.$scopedSlots.title({ active: s, title: o, position: e, icon: i.icon, data: i.tabData })
								: r;
						}
					},
					renderIcon: function(t) {
						var e = this.$createElement;
						if (0 !== this.tabs.length) {
							var n = this.tabs[t],
								i = n.icon,
								s = e('i', { class: i }, [' ']);
							return !n.$slots.title && i ? s : void 0;
						}
					},
					tabStyles: function(t) {
						return t.disabled ? { backgroundColor: this.disabledColor, color: this.disabledTextColor } : {};
					},
					renderTabs: function() {
						var t = this,
							e = this.$createElement;
						return this.tabs.map(function(n, i) {
							if (n) {
								var o = n.route,
									a = (n.id, n.title),
									r = (n.icon, n.tabId),
									l = t.activeTabIndex === i,
									u = t.activeTabIndex === i + 1;
								return e(
									'li',
									s([
										{
											attrs: { name: 'tab', id: 't-' + r, 'aria-selected': l, 'aria-controls': 'p-' + r, role: 'tab' },
											class: ['modal-tab', { active: l }, { disabled: n.disabled }, { leftOfActive: u }],
											key: a
										},
										{
											on: {
												click: function(e) {
													for (var s = arguments.length, a = Array(s > 1 ? s - 1 : 0), r = 1; r < s; r++)
														a[r - 1] = arguments[r];
													(function() {
														return !n.disabled && t.navigateToTab(i, o);
													}.apply(void 0, [e].concat(a)));
												}
											}
										}
									]),
									['center' === t.textPosition && t.renderTabTitle(i, t.textPosition)]
								);
							}
						});
					}
				},
				render: function() {
					var t = arguments[0],
						e = this.renderTabs();
					return t('div', { class: ['vue-tabs', this.stackedClass] }, [
						t(
							'div',
							{ class: [{ 'nav-tabs-navigation': !this.isStacked }, { 'left-vertical-tabs': this.isStacked }] },
							[
								t('div', { class: ['nav-tabs-wrapper', this.stackedClass] }, [
									t('ul', { class: this.classList, attrs: { role: 'tablist' } }, [e])
								])
							]
						),
						t('div', { class: ['tab-content', { 'right-text-tabs': this.isStacked }] }, [this.$slots.default])
					]);
				},
				watch: {
					tabs: function(t) {
						t.length > 0 &&
							!this.value &&
							(t.length <= this.activeTabIndex
								? this.activateTab(this.activeTabIndex - 1)
								: this.activateTab(this.activeTabIndex)),
							t.length > 0 && this.value && this.findTabAndActivate(this.value);
					},
					value: function(t) {
						this.findTabAndActivate(t);
					}
				}
			},
			a = {
				name: 'v-tab',
				props: {
					title: { type: String, default: '' },
					icon: { type: String, default: '' },
					tabData: { default: null },
					beforeChange: { type: Function },
					id: String,
					route: { type: [String, Object] },
					disabled: Boolean,
					transitionName: String,
					transitionMode: String
				},
				computed: {
					isValidParent: function() {
						return 'vue-tabs' === this.$parent.$options.name;
					},
					hash: function() {
						return '#' + this.id;
					},
					tabId: function() {
						return this.id ? this.id : this.title;
					}
				},
				data: function() {
					return { active: !1, validationError: null };
				},
				mounted: function() {
					this.$parent.addTab(this);
				},
				destroyed: function() {
					this.$el && this.$el.parentNode && this.$el.parentNode.removeChild(this.$el), this.$parent.removeTab(this);
				},
				render: function() {
					var t = arguments[0];
					return t(
						'section',
						{
							class: 'modal-content',
							attrs: { id: 'p-' + this.tabId, 'aria-labelledby': 't-' + this.tabId, role: 'tabpanel' },
							directives: [{ name: 'show', value: this.active }]
						},
						[t('div', [this.$slots.default])]
					);
				}
			},
			r = {
				install: function(t) {
					t.component('vue-tabs', o), t.component('v-tab', a);
				}
			};
		'undefined' !== typeof window && window.Vue && (window.Vue.use(r), (window.VueTabs = r)),
			(e['default'] = r),
			(e.VueTabs = o),
			(e.VTab = a);
	},
	'56d7': function(t, e, n) {
		'use strict';
		n.r(e);
		n('7514'), n('ac6a');
		var i = n('5d73'),
			s = n.n(i),
			o = (n('96cf'), n('3b8d')),
			a = (n('cadf'), n('551c'), n('f751'), n('097d'), n('75fc'));
		function r() {
			var t = !1,
				e = !1,
				n = !1,
				i = !1,
				s = !1,
				o = !1,
				r = !1,
				l = 0;
			new MutationObserver(function(u) {
				window.dispatchEvent(new CustomEvent('domChanged', { detail: u })),
					void 0 === window.App._state || t || ((t = !0), window.dispatchEvent(new CustomEvent('appLoaded'))),
					document.querySelector('div[class*="sidebar__REFRESH--navDefault-"]') &&
						!e &&
						((e = !0), window.dispatchEvent(new CustomEvent('fileBrowserLoaded'))),
					!document.getElementById('pluginManagerButton') &&
						document.querySelector('div[class*="sidebar__REFRESH--navDefault-"]') &&
						e &&
						window.dispatchEvent(new CustomEvent('fileBrowserChanged')),
					!document.querySelector('div[class*="sidebar__REFRESH--navDefault-"]') &&
						e &&
						((e = !1), window.dispatchEvent(new CustomEvent('fileBrowserUnloaded'))),
					window.App._fullscreenIsReady &&
						window.App._state.selectedView.fullscreen &&
						!n &&
						((n = !0), window.dispatchEvent(new CustomEvent('fileLoaded'))),
					window.App._fullscreenIsReady &&
						void 0 === window.App._state.selectedView.fullscreen &&
						n &&
						((n = !1), window.dispatchEvent(new CustomEvent('fileUnloaded'))),
					document.querySelector('div[class*="modal--header--"]') &&
						!i &&
						((i = !0),
						window.dispatchEvent(
							new CustomEvent('modalOpened', {
								detail: document.querySelector('div[class*="modal--header"]').innerText.trim()
							})
						)),
					!document.querySelector('div[class*="modal--header--"]') &&
						i &&
						((i = !1), window.dispatchEvent(new CustomEvent('modalClosed'))),
					window.App._state.dropdownShown &&
						!s &&
						((s = !0),
						window.dispatchEvent(
							new CustomEvent('menuOpened', {
								detail: {
									type: window.App._state.dropdownShown.type,
									hasMoreOptions:
										void 0 !==
										Object(a['a'])(document.querySelectorAll('div[class*="multilevel_dropdown__REFRESH--name"]')).find(
											function(t) {
												return 'More' === t.innerText;
											}
										)
								}
							})
						)),
					window.App._state.dropdownShown &&
						s &&
						document.querySelector('div[class*="multilevel_dropdown__REFRESH--menu"]') &&
						document.querySelectorAll('div[class*="multilevel_dropdown__REFRESH--menu"]').length > l &&
						window.dispatchEvent(
							new CustomEvent('submenuOpened', {
								detail: {
									type: window.App._state.dropdownShown.type,
									highlightedOption: document.querySelectorAll(
										'div[class*="multilevel_dropdown__REFRESH--optionActive"]'
									)[document.querySelectorAll('div[class*="multilevel_dropdown__REFRESH--menu"]').length - 1]
										.textContent
								}
							})
						),
					(l = document.querySelectorAll('div[class*="multilevel_dropdown__REFRESH--menu"]').length),
					!window.App._state.dropdownShown &&
						s &&
						((s = !1),
						(o = !1),
						Object(a['a'])(document.getElementsByClassName('plugin-dropdown-submenu')).forEach(function(t) {
							t.parentNode.removeChild(t);
						}),
						window.dispatchEvent(new CustomEvent('menuClosed'))),
					document.getElementsByClassName('focus-target').length > 0 &&
						!r &&
						((r = !0),
						window.dispatchEvent(
							new CustomEvent('focusTargetFound', { detail: document.getElementsByClassName('focus-target')[0] })
						)),
					document.getElementById('pluginOptions') &&
						!o &&
						((o = !0), window.dispatchEvent(new CustomEvent('pluginOptionsFound')));
			}).observe(document.getElementById('react-page'), { childList: !0, subtree: !0 });
		}
		var l = n('5176'),
			u = n.n(l),
			c = n('795b'),
			d = n.n(c),
			p = (n('7f7f'), n('d847')),
			g = n.n(p),
			f = n('85f2'),
			h = n.n(f),
			m = n('7618'),
			v = n('a4bb'),
			b = n.n(v),
			C = {
				getNodeById: function(t) {
					return w(t);
				},
				zoomOnNodes: function(t) {
					var e = b()(App._state.mirror.sceneGraphSelection);
					0 !== t.length &&
						((t =
							'object' === Object(m['a'])(t[0])
								? t.map(function(t) {
										return t.id;
								  })
								: t),
						App.sendMessage('clearSelection'),
						App.sendMessage('addToSelection', { nodeIds: t }),
						App.triggerAction('zoom-to-selection'),
						App.sendMessage('clearSelection'),
						e.length > 0 && App.sendMessage('addToSelection', { nodeIds: e }));
				},
				panToNode: function(t) {
					(t = 'object' === Object(m['a'])(t) ? t.id : t), App.panToNode(t);
				},
				centerOnPoint: function(t, e) {
					(e = e || 1),
						App.sendMessage('setCanvasSpaceCenter', { x: t.x, y: t.y }),
						App.sendMessage('updateActiveCanvasCurrentZoom', { zoom: e });
				}
			},
			w = function t(e) {
				var n = App._state.mirror.sceneGraph.get(e),
					i = { id: n.guid, type: n.type };
				if (
					(n.parent &&
						h()(i, 'parent', {
							get: function() {
								return t(n.parent);
							}
						}),
					g()(i, {
						name: {
							get: function() {
								return n.name;
							},
							set: function(t) {
								App.sendMessage('setNodeProperty', { nodeId: n.guid, property: 'name', value: t });
							}
						},
						visible: {
							get: function() {
								return n.visible;
							},
							set: function(t) {
								App.sendMessage('setNodeProperty', { nodeId: n.guid, property: 'visible', value: t });
							}
						},
						locked: {
							get: function() {
								return n.locked;
							},
							set: function(t) {
								App.sendMessage('setNodeProperty', { nodeId: n.guid, property: 'locked', value: t });
							}
						}
					}),
					0 !== n.reversedChildren.length &&
						h()(i, 'children', {
							value: n.reversedChildren.map(function(e) {
								return t(e);
							})
						}),
					'DOCUMENT' !== n.type && 'CANVAS' !== n.type)
				) {
					var s = App.sendMessage('inspectNodeForInteractionTests', { nodeId: n.guid }).args;
					i.absoluteBounds = s.absoluteBounds;
					var a = s.relativeTransform;
					(i.relativeTransform = [[a.m00, a.m01, a.m02], [a.m10, a.m11, a.m12]]),
						'TEXT' === n.type &&
							h()(i, 'characters', {
								get: function() {
									return s.extractedText;
								},
								set: function(t) {
									var e = b()(App._state.mirror.sceneGraphSelection);
									App.sendMessage('clearSelection'),
										App.sendMessage('addToSelection', { nodeIds: [i.id] }),
										App.triggerAction('request-edit-mode');
									var n = document.querySelector('.focus-target');
									n.focus(),
										(n.value = t),
										n.dispatchEvent(new InputEvent('input')),
										App.triggerAction('leave-edit-mode'),
										App.sendMessage('clearSelection'),
										e.length > 0 && App.sendMessage('addToSelection', { nodeIds: e });
								}
							}),
						(i.getProperties = Object(o['a'])(
							regeneratorRuntime.mark(function t() {
								var e, n;
								return regeneratorRuntime.wrap(function(t) {
									while (1)
										switch ((t.prev = t.next)) {
											case 0:
												if ('DOCUMENT' === i.type || 'CANVAS' === i.type) {
													t.next = 32;
													break;
												}
												if (
													((e = b()(App._state.mirror.sceneGraphSelection)),
													1 === e.length && (1 !== e.length || i.id === e[0]))
												) {
													t.next = 9;
													break;
												}
												return (
													App.sendMessage('clearSelection'),
													(t.next = 6),
													S(function() {
														return null === window.App._state.mirror.selectionProperties.visible;
													})
												);
											case 6:
												return (
													App.sendMessage('addToSelection', { nodeIds: [i.id] }),
													(t.next = 9),
													S(function() {
														return null !== window.App._state.mirror.selectionProperties.visible;
													})
												);
											case 9:
												(n = App._state.mirror.selectionProperties),
													g()(i, {
														size: {
															get: function() {
																return s.size;
															},
															set: function(t) {
																y(this.id, { width: t.x, height: t.y });
															}
														},
														opacity: {
															get: function() {
																return n.opacity;
															},
															set: function(t) {
																y(this.id, { opacity: t });
															}
														},
														blendMode: {
															get: function() {
																return n.blendMode;
															},
															set: function(t) {
																y(this.id, { blendMode: t });
															}
														},
														isMask: {
															get: function() {
																return n.mask;
															},
															set: function(t) {
																y(this.id, { mask: t });
															}
														},
														effects: {
															get: function() {
																return n.effects;
															},
															set: function(t) {
																y(this.id, { effects: t });
															}
														},
														constraints: {
															get: function() {
																return { horizontal: n.horizontalConstraint, vertical: n.verticalConstraint };
															},
															set: function(t) {
																y(this.id, { horizontalConstraint: t.horizontal, verticalConstraint: t.vertical });
															}
														},
														x: {
															get: function() {
																return n.x;
															},
															set: function(t) {
																y(this.id, { x: t });
															}
														},
														y: {
															get: function() {
																return n.y;
															},
															set: function(t) {
																y(this.id, { y: t });
															}
														},
														width: {
															get: function() {
																return n.width;
															},
															set: function(t) {
																y(this.id, { width: t });
															}
														},
														height: {
															get: function() {
																return n.height;
															},
															set: function(t) {
																y(this.id, { height: t });
															}
														},
														exportSettings: {
															get: function() {
																return n.exportSettings;
															},
															set: function(t) {
																y(this.id, { exportSettings: t });
															}
														}
													}),
													n.inheritFillStyleID &&
														'__mixed__' !== b()(n.inheritFillStyleID)[0] &&
														4294967295 !== n.inheritFillStyleID.sessionID &&
														g()(i, {
															inheritFillStyleID: {
																get: function() {
																	return n.inheritFillStyleID;
																},
																set: function(t) {
																	y(this.id, { inheritFillStyleID: t });
																}
															},
															inheritFillStyleKey: {
																get: function() {
																	return n.inheritFillStyleKey;
																},
																set: function(t) {
																	y(this.id, { inheritFillStyleKey: t });
																}
															},
															inheritFillStyleName: {
																get: function() {
																	return n.inheritFillStyleName;
																},
																set: function(t) {
																	y(this.id, { inheritFillStyleName: t });
																}
															}
														}),
													n.inheritFillStyleIDForStroke &&
														'__mixed__' !== b()(n.inheritFillStyleIDForStroke)[0] &&
														4294967295 !== n.inheritFillStyleIDForStroke.sessionID &&
														g()(i, {
															inheritFillStyleIDForStroke: {
																get: function() {
																	return n.inheritFillStyleIDForStroke;
																},
																set: function(t) {
																	y(this.id, { inheritFillStyleIDForStroke: t });
																}
															},
															inheritFillStyleKeyForStroke: {
																get: function() {
																	return n.inheritFillStyleKeyForStroke;
																},
																set: function(t) {
																	y(this.id, { inheritFillStyleKeyForStroke: t });
																}
															},
															inheritFillStyleNameForStroke: {
																get: function() {
																	return n.inheritFillStyleNameForStroke;
																},
																set: function(t) {
																	y(this.id, { inheritFillStyleNameForStroke: t });
																}
															}
														}),
													n.inheritFillStyleIDForBackground &&
														'__mixed__' !== b()(n.inheritFillStyleIDForBackground)[0] &&
														4294967295 !== n.inheritFillStyleIDForBackground.sessionID &&
														g()(i, {
															inheritFillStyleIDForBackground: {
																get: function() {
																	return n.inheritFillStyleIDForBackground;
																},
																set: function(t) {
																	y(this.id, { inheritFillStyleIDForBackground: t });
																}
															},
															inheritFillStyleKeyForBackground: {
																get: function() {
																	return n.inheritFillStyleKeyForBackground;
																},
																set: function(t) {
																	y(this.id, { inheritFillStyleKeyForBackground: t });
																}
															},
															inheritFillStyleNameForBackground: {
																get: function() {
																	return n.inheritFillStyleNameForBackground;
																},
																set: function(t) {
																	y(this.id, { inheritFillStyleNameForBackground: t });
																}
															}
														}),
													n.inheritEffectStyleID &&
														'__mixed__' !== b()(n.inheritEffectStyleID)[0] &&
														4294967295 !== n.inheritEffectStyleID.sessionID &&
														g()(i, {
															inheritEffectStyleID: {
																get: function() {
																	return n.inheritEffectStyleID;
																},
																set: function(t) {
																	y(this.id, { inheritEffectStyleID: t });
																}
															},
															inheritEffectStyleKey: {
																get: function() {
																	return n.inheritEffectStyleKey;
																},
																set: function(t) {
																	y(this.id, { inheritEffectStyleKey: t });
																}
															},
															inheritEffectStyleName: {
																get: function() {
																	return n.inheritEffectStyleName;
																},
																set: function(t) {
																	y(this.id, { inheritEffectStyleName: t });
																}
															}
														}),
													('FRAME' === i.type && 'INSTANCE' === i.type) ||
														g()(i, {
															fills: {
																get: function() {
																	return n.fillPaints;
																},
																set: function(t) {
																	y(this.id, { fillPaints: t });
																}
															},
															strokes: {
																get: function() {
																	return n.fillPaints;
																},
																set: function(t) {
																	y(this.id, { fillPaints: t });
																}
															},
															strokeWeight: {
																get: function() {
																	return n.strokeWeight;
																},
																set: function(t) {
																	y(this.id, { strokeWeight: t });
																}
															},
															strokeAlign: {
																get: function() {
																	return n.strokeAlign;
																},
																set: function(t) {
																	y(this.id, { strokeAlign: t });
																}
															},
															strokeCap: {
																get: function() {
																	return n.strokeCap;
																},
																set: function(t) {
																	y(this.id, { strokeCap: t });
																}
															},
															strokeJoin: {
																get: function() {
																	return n.strokeJoin;
																},
																set: function(t) {
																	y(this.id, { strokeJoin: t });
																}
															},
															dashPattern: {
																get: function() {
																	return n.dashPattern;
																},
																set: function(t) {
																	y(this.id, { dashPattern: t });
																}
															}
														}),
													('FRAME' !== i.type && 'INSTANCE' !== i.type && 'SYMBOL' !== i.type) ||
														g()(i, {
															backgrounds: {
																get: function() {
																	return n.backgroundPaints;
																},
																set: function(t) {
																	y(this.id, { backgroundPaints: t });
																}
															},
															layoutGrids: {
																get: function() {
																	return n.layoutGrids;
																},
																set: function(t) {
																	y(this.id, { layoutGrids: t });
																}
															},
															clipsContent: {
																get: function() {
																	return !n.frameMaskDisabled;
																},
																set: function(t) {
																	y(this.id, { frameMaskDisabled: !t });
																}
															}
														}),
													('BOOLEAN_OPERATION' !== i.type &&
														'VECTOR' !== i.type &&
														'STAR' !== i.type &&
														'REGULAR_POLYGON' !== i.type &&
														'RECTANGLE' !== i.type) ||
														g()(i, {
															cornerRadius: {
																get: function() {
																	return n.cornerRadius;
																},
																set: function(t) {
																	y(this.id, { cornerRadius: t });
																}
															},
															cornerSmoothing: {
																get: function() {
																	return n.cornerSmoothing;
																},
																set: function(t) {
																	y(this.id, { cornerSmoothing: t });
																}
															}
														}),
													(t.t0 = i.type),
													(t.next =
														'STAR' === t.t0
															? 21
															: 'ELLIPSE' === t.t0
															? 23
															: 'REGULAR_POLYGON' === t.t0
															? 25
															: 'RECTANGLE' === t.t0
															? 27
															: 'TEXT' === t.t0
															? 29
															: 31);
												break;
											case 21:
												return (
													g()(i, {
														pointCount: {
															get: function() {
																return n.count;
															},
															set: function(t) {
																y(this.id, { count: t });
															}
														},
														starInnerRadius: {
															get: function() {
																return n.starInnerScale;
															},
															set: function(t) {
																y(this.id, { starInnerScale: t });
															}
														}
													}),
													t.abrupt('break', 31)
												);
											case 23:
												return (
													h()(i, 'arcData', {
														get: function() {
															return { startingAngle: n.arcStart, endingAngle: n.arcSweep, innerRadius: n.arcRadius };
														},
														set: function(t) {
															y(this.id, {
																arcStart: t.startingAngle,
																arcSweep: t.endingAngle,
																arcRadius: t.innerRadius
															});
														}
													}),
													t.abrupt('break', 31)
												);
											case 25:
												return (
													h()(i, 'pointCount', {
														get: function() {
															return n.count;
														},
														set: function(t) {
															y(this.id, { count: t });
														}
													}),
													t.abrupt('break', 31)
												);
											case 27:
												return (
													g()(i, {
														rectangleBottomLeftCornerRadius: {
															get: function() {
																return n.rectangleBottomLeftCornerRadius;
															},
															set: function(t) {
																y(this.id, { rectangleBottomLeftCornerRadius: t });
															}
														},
														rectangleBottomRightCornerRadius: {
															get: function() {
																return n.rectangleBottomRightCornerRadius;
															},
															set: function(t) {
																y(this.id, { rectangleBottomRightCornerRadius: t });
															}
														},
														rectangleTopLeftCornerRadius: {
															get: function() {
																return n.rectangleTopLeftCornerRadius;
															},
															set: function(t) {
																y(this.id, { rectangleTopLeftCornerRadius: t });
															}
														},
														rectangleTopRightCornerRadius: {
															get: function() {
																return n.rectangleTopRightCornerRadius;
															},
															set: function(t) {
																y(this.id, { rectangleTopRightCornerRadius: t });
															}
														},
														rectangleCornerRadiiIndependent: {
															get: function() {
																return n.rectangleCornerRadiiIndependent;
															},
															set: function(t) {
																y(this.id, { rectangleCornerRadiiIndependent: t });
															}
														}
													}),
													t.abrupt('break', 31)
												);
											case 29:
												g()(i, {
													fontSize: {
														get: function() {
															return n.fontSize;
														},
														set: function(t) {
															y(this.id, { fontSize: t });
														}
													},
													textAlignHorizontal: {
														get: function() {
															return n.textAlignHorizontal;
														},
														set: function(t) {
															y(this.id, { textAlignHorizontal: t });
														}
													},
													textAlignVertical: {
														get: function() {
															return n.textAlignVertical;
														},
														set: function(t) {
															y(this.id, { textAlignVertical: t });
														}
													},
													textDecoration: {
														get: function() {
															return n.textDecoration;
														},
														set: function(t) {
															y(this.id, { textDecoration: t });
														}
													},
													textAutoResize: {
														get: function() {
															return n.textAutoResize;
														},
														set: function(t) {
															y(this.id, { textAutoResize: t });
														}
													},
													fontName: {
														get: function() {
															return n.fontName;
														},
														set: function(t) {
															y(this.id, { fontName: t });
														}
													},
													letterSpacing: {
														get: function() {
															return n.letterSpacing;
														},
														set: function(t) {
															y(this.id, { letterSpacing: t });
														}
													},
													lineHeight: {
														get: function() {
															return n.lineHeight;
														},
														set: function(t) {
															y(this.id, { lineHeight: t });
														}
													},
													paragraphIndent: {
														get: function() {
															return n.paragraphIndent;
														},
														set: function(t) {
															y(this.id, { paragraphIndent: t });
														}
													},
													paragraphSpacing: {
														get: function() {
															return n.paragraphSpacing;
														},
														set: function(t) {
															y(this.id, { paragraphSpacing: t });
														}
													},
													textCase: {
														get: function() {
															return n.textCase;
														},
														set: function(t) {
															y(this.id, { textCase: t });
														}
													}
												}),
													n.inheritTextStyleID &&
														'__mixed__' !== b()(n.inheritTextStyleID)[0] &&
														4294967295 !== n.inheritTextStyleID.sessionID &&
														g()(i, {
															inheritTextStyleID: {
																get: function() {
																	return n.inheritTextStyleID;
																},
																set: function(t) {
																	y(this.id, { inheritTextStyleID: t });
																}
															},
															inheritTextStyleKey: {
																get: function() {
																	return n.inheritTextStyleKey;
																},
																set: function(t) {
																	y(this.id, { inheritTextStyleKey: t });
																}
															},
															inheritTextStyleName: {
																get: function() {
																	return n.inheritTextStyleName;
																},
																set: function(t) {
																	y(this.id, { inheritTextStyleName: t });
																}
															}
														});
											case 31:
												return t.abrupt('return', i);
											case 32:
											case 'end':
												return t.stop();
										}
								}, t);
							})
						));
				}
				return (
					'BOOLEAN_OPERATION' === n.type && (i.booleanOperation = n.booleanOperation),
					i.children &&
						(i.getAllDescendents = function() {
							return _(i);
						}),
					(i.exportAsImageAsync = (function() {
						var t = Object(o['a'])(
							regeneratorRuntime.mark(function t(e) {
								var n, s, o, a, r;
								return regeneratorRuntime.wrap(function(t) {
									while (1)
										switch ((t.prev = t.next)) {
											case 0:
												if (
													((n = b()(App._state.mirror.sceneGraphSelection)),
													1 === n.length && (1 !== n.length || i.id === n[0]))
												) {
													t.next = 8;
													break;
												}
												return (
													App.sendMessage('clearSelection'),
													(t.next = 5),
													S(function() {
														return null === window.App._state.mirror.selectionProperties.visible;
													})
												);
											case 5:
												return (
													App.sendMessage('addToSelection', { nodeIds: [i.id] }),
													(t.next = 8),
													S(function() {
														return null !== window.App._state.mirror.selectionProperties.visible;
													})
												);
											case 8:
												return (t.next = 10), i.getProperties();
											case 10:
												return (
													(s = t.sent),
													(o = s.exportSettings),
													(a = [
														{
															contentsOnly: !0,
															imageType: 'PNG',
															constraint: { type: 'CONTENT_SCALE', value: e || 1 },
															suffix: ''
														}
													]),
													o !== a && (s.exportSettings = a),
													(t.next = 16),
													E()
												);
											case 16:
												return (r = t.sent), (s.exportSettings = o), t.abrupt('return', r);
											case 19:
											case 'end':
												return t.stop();
										}
								}, t);
							})
						);
						return function(e) {
							return t.apply(this, arguments);
						};
					})()),
					i
				);
			},
			_ = function(t) {
				var e = [],
					n = function t(n) {
						if (n.children)
							for (var i = 0; i < n.children.length; i++) {
								var s = n.children[i];
								e.push(s), t(s);
							}
					};
				return n(t), e;
			};
		g()(C, {
			root: {
				get: function() {
					return w('0:0');
				}
			},
			currentPage: {
				get: function() {
					return w(App._state.mirror.appModel.currentPage);
				}
			},
			selection: {
				get: function() {
					return b()(App._state.mirror.sceneGraphSelection).map(function(t) {
						return w(t);
					});
				},
				set: function(t) {
					0 !== t.length
						? ((t =
								'object' === Object(m['a'])(t[0])
									? t.map(function(t) {
											return t.id;
									  })
									: t),
						  App.sendMessage('clearSelection'),
						  App.sendMessage('addToSelection', { nodeIds: t }),
						  App.fromFullscreen._listenersByEvent.scrollToNode[0]({ nodeId: t[0] }))
						: App.sendMessage('clearSelection');
				}
			}
		});
		var S = function(t) {
				var e = function e(n) {
					t()
						? n()
						: setTimeout(function() {
								return e(n);
						  }, 10);
				};
				return new d.a(e);
			},
			y = (function() {
				var t = Object(o['a'])(
					regeneratorRuntime.mark(function t(e, n) {
						var i;
						return regeneratorRuntime.wrap(function(t) {
							while (1)
								switch ((t.prev = t.next)) {
									case 0:
										if (
											((i = b()(App._state.mirror.sceneGraphSelection)),
											1 === i.length && (1 !== i.length || e === i[0]))
										) {
											t.next = 8;
											break;
										}
										return (
											App.sendMessage('clearSelection'),
											(t.next = 5),
											S(function() {
												return null === window.App._state.mirror.selectionProperties.visible;
											})
										);
									case 5:
										return (
											App.sendMessage('addToSelection', { nodeIds: [e] }),
											(t.next = 8),
											S(function() {
												return null !== window.App._state.mirror.selectionProperties.visible;
											})
										);
									case 8:
										App.updateSelectionProperties(n);
									case 9:
									case 'end':
										return t.stop();
								}
						}, t);
					})
				);
				return function(e, n) {
					return t.apply(this, arguments);
				};
			})(),
			E = function() {
				return new d.a(function(t) {
					var e = document.createElement,
						n = document.createElement('a');
					document.createElement = function() {
						var t = n;
						return (
							(t.click = function() {
								document.createElement = e;
							}),
							t
						);
					};
					var i = URL.createObjectURL;
					(URL.createObjectURL = function() {
						var e = arguments.length <= 0 ? void 0 : arguments[0],
							n = new FileReader();
						(n.onload = function() {
							t({ getBlob: e, getBytes: n.result, getUrl: i(e) }), (URL.createObjectURL = i);
						}),
							n.readAsArrayBuffer(arguments.length <= 0 ? void 0 : arguments[0]);
					}),
						App.triggerAction('export-selected-exportables-direct');
				});
			},
			P = function(t, e, n) {
				if (document.getElementsByClassName('focus-target').length > 0) {
					var i = document.getElementsByClassName('focus-target')[0];
					T(i, t, e, n);
				} else
					window.addEventListener('focusTargetFound', function(i) {
						var s = i.detail;
						T(s, t, e, n);
					});
			},
			T = function(t, e, n, i) {
				e.mac &&
					e.windows &&
					t.addEventListener('keydown', function(t) {
						'MacIntel' === navigator.platform &&
							t.metaKey !== !e.mac.command &&
							t.shiftKey !== !e.mac.shift &&
							t.ctrlKey !== !e.mac.control &&
							t.altKey !== !e.mac.option &&
							t.key.toLowerCase() === e.mac.key.toLowerCase() &&
							(('function' === typeof i && i()) || 'function' !== typeof i) &&
							(t.preventDefault(), n()),
							('Win32' !== navigator.platform && 'Win64' !== navigator.platform) ||
								(t.shiftKey !== !e.windows.shift &&
									t.ctrlKey !== !e.windows.control &&
									t.altKey !== !e.windows.alt &&
									t.key.toLowerCase() === e.windows.key.toLowerCase() &&
									(('function' === typeof i && i()) || 'function' !== typeof i) &&
									(t.preventDefault(), n()));
					});
			},
			I = n('a026'),
			x = n('1881'),
			O = n.n(x),
			k = n('4bbf'),
			R = n.n(k),
			A = void 0;
		(I['a'].config.productionTip = !1),
			I['a'].use(O.a, { dynamic: !0, injectModalsContainer: !0 }),
			I['a'].use(R.a),
			(window.vueModal = new I['a']());
		var F = function(t, e, n, i, s, o, r, l, u) {
				(n = n || 300),
					(i = i || 'auto'),
					'auto' !== i && (i = i >= window.innerHeight - 40 ? window.innerHeight : i + 40),
					(s = s || 0.5),
					(o = o || 0.5),
					(l = !(!1 === l)),
					vueModal.$modal.hide(t),
					vueModal.$modal.show(
						{
							props: u ? ['tabs'] : [],
							template: "\n\t\t\t\t\t<div class='modal js-fullscreen-prevent-event-capture'>\n\t\t\t\t\t\t<div class='modal-header'>\n\t\t\t\t\t\t\t".concat(
								t,
								u
									? "\n\t\t\t\t\t\t\t<div class='modal-close-button' @click=\"$emit('close')\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<vue-tabs>\n\t\t\t\t\t\t\t<v-tab v-for='tab in tabs' :key='tab' :title=\"tab\">\n\t\t\t\t\t\t\t</v-tab>\n\t\t\t\t\t\t</vue-tabs>\n\t\t\t\t\t</div>\n\t\t\t"
									: "\n\t\t\t\t\t\t\t<div class='modal-close-button' @click=\"$emit('close')\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class='modal-content'>\n\t\t\t\t\t\t\t<div></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t"
							)
						},
						{ tabs: u },
						{
							name: t,
							draggable: !r && '.modal-header',
							width: n >= window.innerWidth ? window.innerWidth : n,
							height: i,
							pivotX: s,
							pivotY: o,
							maxWidth: window.innerWidth,
							maxHeight: window.innerHeight - 36
						},
						{
							opened: function(t) {
								if (
									(l ||
										Object(a['a'])(document.getElementsByClassName('modal-content')).forEach(function(t) {
											return t.classList.add('no-padding');
										}),
									r)
								) {
									var n = document.getElementsByClassName('v--modal-overlay')[0];
									n.style.setProperty('width', '100%', 'important'), n.style.setProperty('height', '100%', 'important');
								}
								if (u) {
									var i = u.map(function(e) {
										var n = u.indexOf(e);
										return t.ref.firstChild.children[1].children[1].children[n].firstChild;
									});
									e.apply(A, i);
								} else e(t.ref.firstChild.children[1].firstChild);
							}
						}
					),
					null === document.querySelector('div[class*="nav-"]')
						? figmaPlus.onFileUnloaded(function() {
								vueModal.$modal.hide(t);
						  })
						: figmaPlus.onFileBrowserUnloaded(function() {
								vueModal.$modal.hide(t);
						  });
			},
			M = function(t) {
				vueModal.$modal.hide(t);
			},
			N = n('e814'),
			L = n.n(N),
			D = (n('6762'),
			n('2fdb'),
			function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n(
					'div',
					{
						ref: 'menuItem',
						staticClass: 'plugin-dropdown-option',
						on: { click: t.runFunction, mouseenter: t.showSubmenu, mouseleave: t.hideSubmenu }
					},
					[
						n('div', { staticClass: 'plugin-dropdown-option-text' }, [t._v(t._s(t.label))]),
						t.shortcut && !t.submenuItems
							? n('div', { staticClass: 'plugin-dropdown-option-shortcut' }, [
									t._v(t._s(t.getShortcutText(t.shortcut)))
							  ])
							: t._e(),
						t.submenuItems ? n('div', { staticClass: 'plugin-dropdown-option-chevron' }) : t._e(),
						t.submenuItems
							? n(
									'div',
									{ ref: 'submenu', staticClass: 'plugin-dropdown-submenu' },
									t._l(t.submenuItems, function(e) {
										return t.getConditionTrue(e.condition)
											? n(
													'div',
													{
														staticClass: 'plugin-dropdown-option',
														attrs: { submenuItem: e },
														on: { click: e.action }
													},
													[
														n('div', { staticClass: 'plugin-dropdown-option-text' }, [t._v(t._s(e.label))]),
														e.shortcut
															? n('div', { staticClass: 'plugin-dropdown-option-shortcut' }, [
																	t._v(t._s(t.getShortcutText(e.shortcut)))
															  ])
															: t._e()
													]
											  )
											: t._e();
									}),
									0
							  )
							: t._e()
					]
				);
			}),
			B = [],
			j = {
				data: function() {
					return { submenuShown: !1 };
				},
				props: ['menuType', 'label', 'action', 'shortcut', 'submenuItems', 'isSubmenu'],
				mounted: function() {
					this.submenuItems && (this.$refs.submenu.style.display = 'none'),
						this.isFatMenu && (this.$refs.menuItem.style.padding = '0 12px');
				},
				computed: {
					isFatMenu: function() {
						return 'FULLSCREEN_FILENAME_DROPDOWN' === this.menuType || 'file-actions-dropdown' === this.menuType;
					}
				},
				methods: {
					runFunction: function() {
						this.submenuItems || this.action();
					},
					getConditionTrue: function(t) {
						return 'function' !== typeof t || t();
					},
					getShortcutText: function(t) {
						if (t) {
							var e = '';
							return (
								t.mac &&
									t.windows &&
									('MacIntel' === navigator.platform &&
										((t = t.mac),
										(e += t.control ? '⌃' : ''),
										(e += t.option ? '⌥' : ''),
										(e += t.shift ? '⇧' : ''),
										(e += t.command ? '⌘' : ''),
										(e += t.key ? t.key.charAt(0).toUpperCase() + t.key.slice(1) : '')),
									('Win32' !== navigator.platform && 'Win64' !== navigator.platform) ||
										((t = t.windows),
										(e += t.control ? 'Ctrl+' : ''),
										(e += t.alt ? 'Alt+' : ''),
										(e += t.shift ? 'Shift+' : ''),
										(e += t.key ? t.key.charAt(0).toUpperCase() + t.key.slice(1) : ''))),
								e
							);
						}
					},
					showSubmenu: function() {
						var t = this.isSubmenu
							? document.querySelectorAll('div[class*="multilevel_dropdown__REFRESH--optionActive"]')[1]
							: document.querySelector('div[class*="multilevel_dropdown__REFRESH--optionActive"]');
						if (t) {
							var e = Object(a['a'])(t.classList).find(function(t) {
								return t.includes('optionActive');
							});
							t.classList.remove(e);
							var n = document.querySelector('div[class*="multilevel_dropdown__REFRESH--submenu--"]');
							n && (n.style.display = 'none'),
								(t.onmouseover = function() {
									t.classList.add(e), n && (n.style.display = '');
								});
						}
						if (this.submenuItems) {
							var i = this.$refs.menuItem,
								s = this.$refs.submenu;
							(s.style.display = 'block'),
								(s.style.bottom = ''),
								(s.style.top = ''.concat(i.getBoundingClientRect().top - 8, 'px')),
								window.innerHeight - s.getBoundingClientRect().bottom < 0 &&
									((s.style.top = ''), (s.style.bottom = '8px')),
								(s.style.left = ''.concat(i.getBoundingClientRect().right, 'px'));
						}
					},
					hideSubmenu: function() {
						this.submenuItems && (this.$refs.submenu.style.display = 'none');
					}
				}
			},
			$ = j,
			H = n('2877'),
			U = Object(H['a'])($, D, B, !1, null, null, null),
			V = U.exports,
			q = function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n(
					'div',
					{
						ref: 'menuItem',
						staticClass: 'plugin-dropdown-option',
						attrs: { id: 'selectionPluginsMenuItem' },
						on: {
							click: function(t) {
								return t.target !== t.currentTarget
									? null
									: (function(t) {
											return t.stopPropagation();
									  })(t);
							},
							mouseenter: t.showSubmenu
						}
					},
					[
						n('div', { staticClass: 'plugin-dropdown-option-text' }, [t._v('Figma Plus')]),
						n('div', { staticClass: 'plugin-dropdown-option-chevron' }),
						n(
							'div',
							{
								directives: [{ name: 'show', rawName: 'v-show', value: t.menuShown, expression: 'menuShown' }],
								ref: 'submenu',
								staticClass: 'plugin-dropdown-submenu'
							},
							[
								n('div', { attrs: { id: 'selectionPluginOptions' } }),
								t.hasPlugins
									? t._e()
									: n('div', { staticClass: 'plugin-dropdown-option', on: { click: t.openPluginManager } }, [
											n('div', { staticClass: 'plugin-dropdown-option-text' }, [t._v('Get Plugins')]),
											n('div', { staticClass: 'plugin-dropdown-option-shortcut' }, [t._v(t._s(t.shortcut))])
									  ])
							]
						)
					]
				);
			},
			W = [],
			K = {
				data: function() {
					return {
						menuShown: !1,
						hasPlugins: !1,
						shortcut: navigator.platform.includes('Win') ? 'Ctrl+Shift+P' : '⇧⌘P'
					};
				},
				mounted: function() {
					var t = this;
					Object(a['a'])(document.querySelectorAll('div[class*="multilevel_dropdown__REFRESH--option"]')).forEach(
						function(e) {
							return e.addEventListener('mouseover', function() {
								return (t.menuShown = !1);
							});
						}
					);
				},
				methods: {
					showSubmenu: function() {
						this.hasPlugins = document.getElementById('selectionPluginOptions').children.length > 0;
						var t = document.querySelector('div[class*="multilevel_dropdown__REFRESH--optionActive"]');
						if (t) {
							var e = Object(a['a'])(t.classList).find(function(t) {
								return t.includes('optionActive');
							});
							t.classList.remove(e);
							var n = document.querySelector('div[class*="multilevel_dropdown__REFRESH--submenu"]');
							n && (n.style.display = 'none'),
								(t.onmouseenter = function() {
									t.classList.add(e), n && (n.style.display = '');
								});
						}
						var i = this.$refs.menuItem,
							s = this.$refs.submenu,
							o = i.getBoundingClientRect(),
							r = s.getBoundingClientRect();
						(s.style.bottom = ''),
							(s.style.top = ''.concat(o.top - 6, 'px')),
							(s.style.left = ''.concat(o.right, 'px')),
							(this.menuShown = !0),
							window.innerHeight - r.bottom < 0 && ((s.style.top = ''), (s.style.bottom = '6px'));
					},
					openPluginManager: function() {
						figmaPlus.togglePluginManager();
					}
				}
			},
			z = K,
			G = Object(H['a'])(z, q, W, !1, null, null, null),
			J = G.exports,
			Y = function(t, e, n, i, s, o) {
				figmaPlus.onMenuOpened(function(r, l) {
					if (
						('DROPDOWN_TYPE_SELECTION_CONTEXT_MENU' === r || 'DROPDOWN_TYPE_OBJECTS_PANEL_CONTEXT_MENU' === r) &&
						!document.getElementById('selectionPluginsMenuItem')
					) {
						var u = document.createElement('div'),
							c = Object(a['a'])(document.querySelectorAll('div[class*="multilevel_dropdown__REFRESH--option"]')).find(
								function(t) {
									return 'Extensions' === t.firstChild.innerText;
								}
							),
							d = Object(a['a'])(document.querySelectorAll('div[class*="multilevel_dropdown__REFRESH--option"]')).find(
								function(t) {
									return 'Show/Hide' === t.firstChild.innerText;
								}
							),
							p = d.parentNode;
						if (c) p.insertBefore(u, c.nextSibling);
						else {
							var g = document.createElement('div');
							(g.className = 'dropdown__REFRESH--separator--11K1o'), p.insertBefore(u, d), p.insertBefore(g, d);
						}
						new figmaPlus.Vue({
							el: u,
							render: function(t) {
								return t(J);
							}
						});
						var f = p.getBoundingClientRect();
						window.innerHeight - f.bottom < 6 && (p.style.top = ''.concat(window.innerHeight - f.height - 6, 'px'));
					}
					r !== t || ('function' === typeof i && !i()) || l || X(t, !1, e, n, s, o);
				}),
					figmaPlus.onSubmenuOpened(function(a, r) {
						a !== t || ('function' === typeof i && !i()) || 'More' !== r || X(t, !0, e, n, s, o);
					});
			},
			X = function(t, e, n, i, s, o) {
				var r = 'FULLSCREEN_FILENAME_DROPDOWN' === t || 'file-actions-dropdown' === t,
					l = e
						? document.querySelector('div[class*="multilevel_dropdown__REFRESH--menu--"]')
						: document.querySelector('div[class*="dropdown__REFRESH--dropdown--"]');
				'fullscreen-menu-dropdown' === t && (l = document.getElementById('pluginOptions')),
					('DROPDOWN_TYPE_SELECTION_CONTEXT_MENU' !== t && 'DROPDOWN_TYPE_OBJECTS_PANEL_CONTEXT_MENU' !== t) ||
						(l = document.getElementById('selectionPluginOptions'));
				var u = document.createElement('div');
				l.appendChild(u),
					new figmaPlus.Vue({
						el: u,
						data: function() {
							return { menuType: t, label: n, action: i, shortcut: s, submenuItems: o, isSubmenu: e };
						},
						components: { MenuItem: V },
						template:
							"<MenuItem :menuType='menuType' :label='label' :action='action' :shortcut='shortcut' :submenuItems='submenuItems' :isSubmenu='isSubmenu'></MenuItem>"
					}),
					'fullscreen-menu-dropdown' === t &&
						'' === l.style.borderBottom &&
						((l.style.borderBottom = '1px solid #2c2c2c'),
						(l.style.paddingBottom = '6px'),
						(l.style.marginBottom = '6px'));
				var c = Object(a['a'])(l.children).filter(function(t) {
					return t.className.includes('dropdown--separator');
				}).length;
				r || (l.style.top = ''.concat(e ? L()(l.style.top) - 24 - 2 * c : L()(l.style.top) - 24, 'px'));
			},
			Z = n('ab5b'),
			Q = n.n(Z),
			tt = n('8bc8'),
			et = n.n(tt);
		I['a'].config.productionTip = !1;
		var nt = {
				Vue: I['a'],
				React: Q.a,
				ReactDOM: et.a,
				scene: C,
				onFileBrowserLoaded: function(t) {
					window.addEventListener('fileBrowserLoaded', function() {
						t();
					});
				},
				onFileBrowserChanged: function(t) {
					window.addEventListener('fileBrowserChanged', function() {
						t();
					});
				},
				onFileBrowserUnloaded: function(t) {
					window.addEventListener('fileBrowserUnloaded', function() {
						t();
					});
				},
				onFileLoaded: function(t) {
					window.addEventListener('fileLoaded', function() {
						t();
					});
				},
				onFileUnloaded: function(t) {
					window.addEventListener('fileUnloaded', function() {
						t();
					});
				},
				onModalOpened: function(t) {
					window.addEventListener('modalOpened', function(e) {
						t(e.detail);
					});
				},
				onModalClosed: function(t) {
					window.addEventListener('modalClosed', function() {
						t();
					});
				},
				onMenuOpened: function(t) {
					window.addEventListener('menuOpened', function(e) {
						t(e.detail.type, e.detail.hasMoreOptions);
					});
				},
				onSubmenuOpened: function(t) {
					window.addEventListener('submenuOpened', function(e) {
						t(e.detail.type, e.detail.highlightedOption);
					});
				},
				onMenuClosed: function(t) {
					window.addEventListener('menuClosed', function() {
						t();
					});
				},
				onDomChanged: function(t) {
					window.addEventListener('domChanged', function(e) {
						t(e.detail);
					});
				},
				onAppLoaded: function(t) {
					window.addEventListener('appLoaded', function() {
						t();
					});
				},
				createPluginsMenuItem: function(t, e, n, i, s) {
					window.addEventListener('pluginOptionsFound', function() {
						'function' === typeof n
							? n() && X('fullscreen-menu-dropdown', !1, t, e, i, s)
							: X('fullscreen-menu-dropdown', !1, t, e, i, s);
					});
				},
				createContextMenuItem: {
					Canvas: function(t, e, n, i, s) {
						Y('DROPDOWN_TYPE_CANVAS_CONTEXT_MENU', t, e, n, i, s);
					},
					Selection: function(t, e, n, i, s) {
						Y('DROPDOWN_TYPE_SELECTION_CONTEXT_MENU', t, e, n, i, s),
							Y('DROPDOWN_TYPE_OBJECTS_PANEL_CONTEXT_MENU', t, e, n, i, s);
					},
					Page: function(t, e, n, i, s) {
						Y('DROPDOWN_TYPE_PAGE_CONTEXT_MENU', t, e, n, i, s);
					},
					Filename: function(t, e, n, i, s) {
						Y('FULLSCREEN_FILENAME_DROPDOWN', t, e, n, i, s);
					},
					Version: function(t, e, n, i, s) {
						Y('DROPDOWN_TYPE_SAVEPOINT_CONTEXT_MENU', t, e, n, i, s);
					},
					File: function(t, e, n, i, s) {
						Y('file-actions-dropdown', t, e, n, i, s);
					}
				},
				registerKeyboardShortcut: function(t, e, n) {
					P(t, e, n);
				},
				addTooltip: function(t, e, n) {
					t.addEventListener('mousemove', function() {
						window.App._dispatch({
							type: n ? 'TOOLTIP_SHOW_AFTER_DELAY' : 'TOOLTIP_SHOW_IMMEDIATELY',
							payload: {
								interactive: !1,
								position: 0,
								target: { kind: 2, text: e },
								targetRect: t.getBoundingClientRect(),
								timeoutDelay: 500
							}
						});
					}),
						t.addEventListener('click', function() {
							1 === window.App._state.tooltip.state && window.App._dispatch({ type: 'TOOLTIP_HIDE' });
						});
				},
				showToast: function(t, e, n, i) {
					var s = {
						type: 'VISUAL_BELL_ENQUEUE',
						payload: { type: 'installed_plugin', message: t, timeout: e ? 1e3 * e : 3e3 }
					};
					n && i && u()(s.payload, { button: { text: n, action: i } }), window.App._dispatch(s);
				},
				showUI: function(t, e, n, i, s, o, a, r, l) {
					F(t, e, n, i, s, o, a, r, l);
				},
				hideUI: function(t) {
					M(t);
				},
				toggleShowNodeId: function() {
					return App.triggerAction('toggle-show-guids');
				},
				isDesktop: function() {
					return void 0 !== window.__figmaDesktop;
				},
				getOrgs: function() {
					return App._state.orgById;
				},
				getMyOrgId: function() {
					return App._state.currentOrgId;
				},
				getTeams: function() {
					return App._state.teams;
				},
				getMyTeams: function() {
					return App._state.user.teams;
				},
				getFileKey: function() {
					return App._state.editingFileKey;
				}
			},
			it = function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n(
					'div',
					{ staticClass: 'js-fullscreen-prevent-event-capture', attrs: { id: 'pluginManager' } },
					[
						n(
							'modal',
							{
								ref: 'modal',
								attrs: {
									name: 'pluginManagerModal',
									draggable: '.modal-header',
									width: 460,
									height: 'auto',
									maxHeight: 642
								},
								on: { opened: t.openModal, closed: t.modalClosed }
							},
							[
								n('div', { staticClass: 'modal-header header-large' }, [
									n('div', { staticClass: 'modal-tabs' }, [
										n(
											'div',
											{
												staticClass: 'modal-tab-large',
												class: { 'active-tab': 'Plugins' === t.currentTab },
												on: {
													click: function(e) {
														(t.currentTab = 'Plugins'), (t.detailScreenOn = !1), (t.searchText = '');
													}
												}
											},
											[t._v('Plugins')]
										),
										n(
											'div',
											{
												staticClass: 'modal-tab-large',
												class: { 'active-tab': 'Installed' === t.currentTab },
												on: {
													click: function(e) {
														(t.currentTab = 'Installed'), (t.detailScreenOn = !1), (t.searchText = '');
													}
												}
											},
											[
												t._v('Installed'),
												t.numberOfUpdates > 0
													? n('div', { staticClass: 'update-count' }, [t._v(t._s(t.numberOfUpdates))])
													: t._e()
											]
										),
										t.devMode
											? n(
													'div',
													{
														staticClass: 'modal-tab-large',
														class: { 'active-tab': 'Developer' === t.currentTab },
														on: {
															click: function(e) {
																(t.currentTab = 'Developer'), (t.detailScreenOn = !1), (t.searchText = '');
															}
														}
													},
													[t._v('Developer')]
											  )
											: t._e()
									]),
									n('div', { ref: 'closeButton', staticClass: 'modal-close-button', on: { click: t.hide } })
								]),
								n(
									'div',
									{ staticClass: 'modal-content no-padding no-overflow' },
									[
										'Plugins' === t.currentTab || ('Installed' === t.currentTab && t.installedPlugins.length > 0)
											? n('div', { staticClass: 'list-screen', class: { detailScreenOn: t.detailScreenOn } }, [
													n('div', { staticClass: 'search-box' }, [
														n('div', { staticClass: 'figma-icon search' }),
														n('input', {
															directives: [
																{ name: 'model', rawName: 'v-model', value: t.searchText, expression: 'searchText' }
															],
															staticClass: 'no-border',
															attrs: { placeholder: 'Search', spellcheck: 'false' },
															domProps: { value: t.searchText },
															on: {
																input: function(e) {
																	e.target.composing || (t.searchText = e.target.value);
																}
															}
														})
													]),
													n(
														'div',
														{ staticClass: 'plugins-list' },
														[
															t._l(t.searchedPlugins, function(e) {
																return n('pluginItem', {
																	key: e.id,
																	attrs: {
																		type: 'text',
																		plugin: e,
																		installedPlugins: t.installedPlugins,
																		installedScreenOn: 'Installed' === t.currentTab
																	},
																	on: { goToDetail: t.goToDetail, install: t.install }
																});
															}),
															0 === t.searchedPlugins.length && '' !== t.searchText
																? n('div', { staticClass: 'no-search-results-message' }, [
																		t._v("No results for '" + t._s(t.searchText) + "'")
																  ])
																: t._e()
														],
														2
													)
											  ])
											: t._e(),
										n('detailScreen', {
											class: { detailScreenOn: t.detailScreenOn },
											attrs: {
												plugin: t.selectedPlugin,
												pluginStats: t.pluginStats,
												installed:
													void 0 !==
													t.installedPlugins.find(function(e) {
														return e.id === t.selectedPlugin.id;
													})
											},
											on: {
												backToList: function(e) {
													t.detailScreenOn = !1;
												},
												install: t.install,
												uninstall: t.uninstall,
												hide: t.hide
											}
										}),
										'Developer' === t.currentTab ? n('developerScreen') : t._e(),
										'Installed' === t.currentTab && 0 === t.installedPlugins.length
											? n('div', { staticClass: 'empty-state' }, [
													n('div', { staticClass: 'empty-state-title' }, [t._v('No plugins installed')]),
													n('div', { staticClass: 'empty-state-hint' }, [
														t._v('Select the Plugins tab to browse and install plugins.')
													])
											  ])
											: t._e()
									],
									1
								)
							]
						)
					],
					1
				);
			},
			st = [],
			ot = (n('5df3'), n('f559'), n('a481'), n('4917'), n('55dd'), n('f499')),
			at = n.n(ot),
			rt = function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n('div', { staticClass: 'pluginItem', on: { click: t.goToDetail } }, [
					n('div', { staticClass: 'name' }, [t._v(t._s(t.plugin.name))]),
					n('div', { staticClass: 'author' }, [t._v(t._s(t.plugin.author))]),
					n('div', { staticClass: 'description' }, [t._v(t._s(t.plugin.description))]),
					t.installedScreenOn && t.hasUpdate
						? n('div', { staticClass: 'whats-new-button' }, [
								t._v("See what's new in version " + t._s(t.plugin.version))
						  ])
						: t._e(),
					t.installedScreenOn && t.hasUpdate ? n('div', { staticClass: 'update-text' }, [t._v('Updated')]) : t._e(),
					n(
						'button',
						{
							directives: [
								{
									name: 'show',
									rawName: 'v-show',
									value: !t.installed && !t.installedScreenOn,
									expression: '!installed && !installedScreenOn'
								}
							],
							staticClass: 'button',
							on: {
								click: function(e) {
									return e.stopPropagation(), t.install(e);
								}
							}
						},
						[t._v('Install')]
					),
					n(
						'button',
						{
							directives: [
								{
									name: 'show',
									rawName: 'v-show',
									value: t.installed && !t.installedScreenOn,
									expression: 'installed && !installedScreenOn'
								}
							],
							staticClass: 'button',
							attrs: { disabled: 'true' }
						},
						[t._v('Installed')]
					),
					n('div', { staticClass: 'figma-icon chevron-right2' })
				]);
			},
			lt = [],
			ut = n('b697'),
			ct = {
				props: ['plugin', 'installedPlugins', 'installedScreenOn'],
				methods: {
					goToDetail: function(t) {
						this.$emit('goToDetail', this.plugin);
					},
					install: function() {
						this.$emit('install', this.plugin);
					}
				},
				computed: {
					installed: function() {
						var t = this;
						return (
							void 0 !==
							this.installedPlugins.find(function(e) {
								return e.id === t.plugin.id;
							})
						);
					},
					hasUpdate: function() {
						var t = this,
							e = this.installedPlugins.find(function(e) {
								return e.id === t.plugin.id;
							});
						return void 0 !== e && ut(this.plugin.version, e.version);
					}
				}
			},
			dt = ct,
			pt = (n('3cf6'), Object(H['a'])(dt, rt, lt, !1, null, null, null)),
			gt = pt.exports,
			ft = function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n('div', { staticClass: 'detail-screen' }, [
					n('div', { staticClass: 'header' }, [
						n('div', { staticClass: 'back-button figma-icon chevron-left', on: { click: t.backToList } }),
						n('div', { staticClass: 'title' }, [
							n('div', { staticClass: 'name' }, [t._v(t._s(t.plugin.name))]),
							n('div', { staticClass: 'author' }, [t._v(t._s(t.plugin.author))])
						]),
						n(
							'button',
							{
								directives: [{ name: 'show', rawName: 'v-show', value: !t.installed, expression: '!installed' }],
								staticClass: 'button primary',
								on: {
									click: function(e) {
										return e.stopPropagation(), t.install(e);
									}
								}
							},
							[t._v('Install')]
						),
						n(
							'button',
							{
								directives: [{ name: 'show', rawName: 'v-show', value: t.installed, expression: 'installed' }],
								staticClass: 'button',
								on: {
									click: function(e) {
										return e.stopPropagation(), t.uninstall(e);
									}
								}
							},
							[t._v('Uninstall')]
						)
					]),
					t.plugin.requiredOrgId
						? n('div', { staticClass: 'org-header' }, [
								t.orgImage && 1 === t.orgImage.length
									? n('span', { staticClass: 'fake-org-image' }, [t._v(t._s(t.orgImage))])
									: t._e(),
								t.orgImage && t.orgImage.length > 1
									? n('img', { staticClass: 'org-image', attrs: { src: t.orgImage } })
									: t._e(),
								t.orgName
									? n('span', [
											t._v('This plugin is only available to '),
											n('b', { staticStyle: { 'font-weight': '500' } }, [t._v(t._s(t.orgName))]),
											t._v(' org members.')
									  ])
									: t._e()
						  ])
						: t._e(),
					t.plugin.requiredTeamIds
						? n(
								'div',
								{ staticClass: 'org-header' },
								[
									t._l(t.requiredTeams, function(e) {
										return e.img_url
											? t._e()
											: n('span', { key: 'team', staticClass: 'fake-org-image' }, [t._v(t._s(e.name[0]))]);
									}),
									t._l(t.requiredTeams, function(e) {
										return e.img_url
											? n('img', { key: 'team', staticClass: 'org-image', attrs: { src: e.img_url } })
											: t._e();
									}),
									n(
										'span',
										[
											t._v('This plugin is only available to '),
											t._l(t.requiredTeams, function(e) {
												return n('span', [
													n('b', { staticStyle: { 'font-weight': '500' } }, [t._v(t._s(e.name))]),
													t.requiredTeams.indexOf(e) !== t.requiredTeams.length - 1 ? n('span', [t._v(', ')]) : t._e()
												]);
											}),
											t._v(' team members.')
										],
										2
									)
								],
								2
						  )
						: t._e(),
					n('div', { staticClass: 'content' }, [
						t.plugin.images && t.plugin.images.length > 0
							? n(
									'div',
									{ staticClass: 'section image-section', class: { singleImage: 1 === t.plugin.images.length } },
									[
										n(
											'carousel',
											{ ref: 'carousel', attrs: { 'watch-items': t.plugin.images, loop: '' } },
											t._l(t.plugin.images, function(t) {
												return n('carousel-item', { style: { backgroundImage: 'url(' + t + ')' } });
											}),
											1
										),
										n('div', {
											staticClass: 'v-carousel-nav prev figma-icon chevron-left',
											on: {
												click: function(e) {
													return t.$refs.carousel.$emit('prev');
												}
											}
										}),
										n('div', {
											staticClass: 'v-carousel-nav next figma-icon chevron-right',
											on: {
												click: function(e) {
													return t.$refs.carousel.$emit('next');
												}
											}
										})
									],
									1
							  )
							: t._e(),
						t.plugin.description && '' !== t.plugin.description
							? n('div', { staticClass: 'section' }, [
									n('div', { staticClass: 'section-title' }, [t._v('Overview')]),
									n('div', { staticClass: 'description' }, [t._v(t._s(t.plugin.description))])
							  ])
							: t._e(),
						t.plugin.instructions && '' !== t.plugin.instructions
							? n('div', { staticClass: 'section' }, [
									n('div', { staticClass: 'section-title' }, [t._v('How to use')]),
									n('div', { staticClass: 'instructions' }, [t._v(t._s(t.plugin.instructions))])
							  ])
							: t._e(),
						t.plugin.updates && t.plugin.updates.length > 0
							? n(
									'div',
									{ staticClass: 'section' },
									[
										n('div', { staticClass: 'section-title' }, [t._v("What's new")]),
										t._l(t.sortedUpdates, function(e) {
											return n('div', { key: e.version, staticClass: 'version' }, [
												n('div', { staticClass: 'version-number' }, [t._v('Version ' + t._s(e.version))]),
												n('div', { staticClass: 'date' }, [t._v(t._s(t.timeAgo.format(new Date(e.date))))]),
												'' !== e.notes
													? n('div', { staticClass: 'notes' }, [t._v(t._s(e.notes))])
													: n('div', { staticClass: 'notes' }, [t._v('No update notes.')])
											]);
										}),
										!t.showAllVersions && t.plugin.updates.length > 1
											? n(
													'div',
													{
														staticClass: 'show-all-versions-button',
														on: {
															click: function(e) {
																t.showAllVersions = !0;
															}
														}
													},
													[t._v('See all versions')]
											  )
											: t._e()
									],
									2
							  )
							: t._e(),
						t.installs > 0
							? n('div', { staticClass: 'section' }, [
									n('div', { staticClass: 'section-title' }, [t._v('Stats')]),
									n('div', { staticClass: 'stats' }, [t._v(t._s(t.installs - t.uninstalls) + ' active users')]),
									n('div', { staticClass: 'stats' }, [t._v(t._s(t.installs) + ' total installs')])
							  ])
							: t._e(),
						t.plugin.github && t.plugin.github.includes('github.com/')
							? n('div', { staticClass: 'section' }, [
									n('a', { staticClass: 'link', attrs: { href: t.plugin.github, target: '_blank' } }, [
										n('div', { staticClass: 'icon' }, [
											n(
												'svg',
												{
													attrs: {
														width: '14',
														height: '14',
														viewBox: '0 0 12 12',
														fill: 'none',
														xmlns: 'http://www.w3.org/2000/svg'
													}
												},
												[
													n('path', {
														attrs: {
															d:
																'M6 0.146484C6.55078 0.146484 7.08203 0.21875 7.59375 0.363281C8.10547 0.503906 8.58203 0.705078 9.02344 0.966797C9.46875 1.22852 9.87305 1.54297 10.2363 1.91016C10.6035 2.27344 10.918 2.67773 11.1797 3.12305C11.4414 3.56445 11.6426 4.04102 11.7832 4.55273C11.9277 5.06445 12 5.5957 12 6.14648C12 6.79102 11.9004 7.41211 11.7012 8.00977C11.5059 8.60742 11.2285 9.15625 10.8691 9.65625C10.5098 10.1562 10.0781 10.5957 9.57422 10.9746C9.07031 11.3496 8.51172 11.6387 7.89844 11.8418C7.88672 11.8457 7.86914 11.8496 7.8457 11.8535C7.82227 11.8535 7.80469 11.8535 7.79297 11.8535C7.69922 11.8535 7.625 11.8262 7.57031 11.7715C7.51562 11.7168 7.48828 11.6445 7.48828 11.5547C7.48828 11.2773 7.48828 11.0039 7.48828 10.7344C7.49219 10.4609 7.49414 10.1855 7.49414 9.9082C7.49414 9.70898 7.46484 9.50781 7.40625 9.30469C7.34766 9.10156 7.24219 8.93164 7.08984 8.79492C7.54297 8.74414 7.93945 8.65234 8.2793 8.51953C8.62305 8.38281 8.9082 8.19531 9.13477 7.95703C9.36523 7.71875 9.53711 7.42578 9.65039 7.07812C9.76758 6.72656 9.82617 6.3125 9.82617 5.83594C9.82617 5.53125 9.77539 5.24414 9.67383 4.97461C9.57227 4.70117 9.41797 4.45117 9.21094 4.22461C9.25391 4.11523 9.28516 4.00195 9.30469 3.88477C9.32422 3.76758 9.33398 3.65039 9.33398 3.5332C9.33398 3.38086 9.31641 3.23047 9.28125 3.08203C9.25 2.92969 9.20703 2.78125 9.15234 2.63672C9.13281 2.62891 9.11133 2.625 9.08789 2.625C9.06445 2.625 9.04297 2.625 9.02344 2.625C8.89844 2.625 8.76758 2.64648 8.63086 2.68945C8.49414 2.72852 8.35742 2.7793 8.2207 2.8418C8.08789 2.90039 7.95898 2.9668 7.83398 3.04102C7.70898 3.11523 7.59766 3.18555 7.5 3.25195C7.01172 3.11523 6.51172 3.04688 6 3.04688C5.48828 3.04688 4.98828 3.11523 4.5 3.25195C4.40234 3.18555 4.29102 3.11523 4.16602 3.04102C4.04102 2.9668 3.91016 2.90039 3.77344 2.8418C3.64062 2.7793 3.50391 2.72852 3.36328 2.68945C3.22656 2.64648 3.09766 2.625 2.97656 2.625C2.95703 2.625 2.93555 2.625 2.91211 2.625C2.88867 2.625 2.86719 2.62891 2.84766 2.63672C2.79297 2.78125 2.74805 2.92969 2.71289 3.08203C2.68164 3.23047 2.66602 3.38086 2.66602 3.5332C2.66602 3.65039 2.67578 3.76758 2.69531 3.88477C2.71484 4.00195 2.74609 4.11523 2.78906 4.22461C2.58203 4.45117 2.42773 4.70117 2.32617 4.97461C2.22461 5.24414 2.17383 5.53125 2.17383 5.83594C2.17383 6.3125 2.23047 6.72461 2.34375 7.07227C2.46094 7.41992 2.63281 7.71484 2.85938 7.95703C3.08984 8.19531 3.375 8.38281 3.71484 8.51953C4.05469 8.65625 4.45117 8.75 4.9043 8.80078C4.79102 8.90234 4.70312 9.02539 4.64062 9.16992C4.58203 9.31055 4.54297 9.45508 4.52344 9.60352C4.41797 9.6543 4.30664 9.69336 4.18945 9.7207C4.07227 9.74805 3.95508 9.76172 3.83789 9.76172C3.58789 9.76172 3.38086 9.70312 3.2168 9.58594C3.05273 9.46875 2.90625 9.30859 2.77734 9.10547C2.73047 9.03125 2.67383 8.95703 2.60742 8.88281C2.54102 8.80859 2.46875 8.74219 2.39062 8.68359C2.3125 8.625 2.22852 8.57812 2.13867 8.54297C2.04883 8.50391 1.95508 8.48438 1.85742 8.48438C1.8418 8.48438 1.81836 8.48633 1.78711 8.49023C1.75586 8.49023 1.72461 8.49414 1.69336 8.50195C1.66602 8.50977 1.64062 8.52148 1.61719 8.53711C1.59375 8.55273 1.58203 8.57227 1.58203 8.5957C1.58203 8.64258 1.60938 8.68945 1.66406 8.73633C1.71875 8.7793 1.76367 8.8125 1.79883 8.83594L1.81641 8.84766C1.90234 8.91406 1.97656 8.97852 2.03906 9.04102C2.10547 9.09961 2.16406 9.16406 2.21484 9.23438C2.26562 9.30078 2.31055 9.375 2.34961 9.45703C2.39258 9.53516 2.4375 9.625 2.48438 9.72656C2.61719 10.0312 2.80273 10.2539 3.04102 10.3945C3.2832 10.5312 3.57031 10.5996 3.90234 10.5996C4.00391 10.5996 4.10547 10.5938 4.20703 10.582C4.30859 10.5664 4.41016 10.5488 4.51172 10.5293V11.5488C4.51172 11.6426 4.48242 11.7168 4.42383 11.7715C4.36914 11.8262 4.29492 11.8535 4.20117 11.8535C4.18945 11.8535 4.17188 11.8535 4.14844 11.8535C4.12891 11.8496 4.11328 11.8457 4.10156 11.8418C3.48828 11.6426 2.92969 11.3555 2.42578 10.9805C1.92188 10.6016 1.49023 10.1621 1.13086 9.66211C0.771484 9.1582 0.492188 8.60742 0.292969 8.00977C0.0976563 7.41211 0 6.79102 0 6.14648C0 5.5957 0.0703125 5.06445 0.210938 4.55273C0.355469 4.04102 0.558594 3.56445 0.820312 3.12305C1.08203 2.67773 1.39453 2.27344 1.75781 1.91016C2.125 1.54297 2.5293 1.22852 2.9707 0.966797C3.41602 0.705078 3.89453 0.503906 4.40625 0.363281C4.91797 0.21875 5.44922 0.146484 6 0.146484Z',
															fill: '#30C2FF'
														}
													})
												]
											)
										]),
										n('div', { staticClass: 'link-text' }, [t._v('View on Github')])
									]),
									n('a', { staticClass: 'link', attrs: { href: t.plugin.github + '/issues/new', target: '_blank' } }, [
										n('div', { staticClass: 'icon' }, [
											n(
												'svg',
												{
													attrs: {
														width: '14',
														height: '14',
														viewBox: '0 0 14 14',
														fill: 'none',
														xmlns: 'http://www.w3.org/2000/svg'
													}
												},
												[
													n('path', {
														attrs: {
															d:
																'M7.4375 14C6.83138 14 6.25033 13.9225 5.69434 13.7676C5.13379 13.6126 4.6097 13.3916 4.12207 13.1045C3.63444 12.8219 3.19238 12.4801 2.7959 12.0791C2.39486 11.6826 2.05306 11.2406 1.77051 10.7529C1.4834 10.2653 1.26237 9.74121 1.10742 9.18066C0.952474 8.62467 0.875 8.04362 0.875 7.4375C0.875 6.83138 0.952474 6.24805 1.10742 5.6875C1.26237 5.13151 1.4834 4.6097 1.77051 4.12207C2.05306 3.63444 2.39486 3.1901 2.7959 2.78906C3.19238 2.39258 3.63444 2.05078 4.12207 1.76367C4.6097 1.48112 5.13379 1.26237 5.69434 1.10742C6.25033 0.952474 6.83138 0.875 7.4375 0.875C8.04362 0.875 8.62695 0.952474 9.1875 1.10742C9.74349 1.26237 10.2653 1.48112 10.7529 1.76367C11.2406 2.05078 11.6849 2.39258 12.0859 2.78906C12.4824 3.1901 12.8242 3.63444 13.1113 4.12207C13.3939 4.6097 13.6126 5.13151 13.7676 5.6875C13.9225 6.24805 14 6.83138 14 7.4375C14 8.04362 13.9225 8.62467 13.7676 9.18066C13.6126 9.74121 13.3939 10.2653 13.1113 10.7529C12.8242 11.2406 12.4824 11.6826 12.0859 12.0791C11.6849 12.4801 11.2406 12.8219 10.7529 13.1045C10.2653 13.3916 9.74349 13.6126 9.1875 13.7676C8.62695 13.9225 8.04362 14 7.4375 14ZM7.4375 1.75C6.91797 1.75 6.41667 1.81836 5.93359 1.95508C5.44596 2.0918 4.99251 2.2832 4.57324 2.5293C4.14941 2.77539 3.76432 3.07161 3.41797 3.41797C3.07161 3.76432 2.77539 4.14714 2.5293 4.56641C2.2832 4.99023 2.0918 5.44368 1.95508 5.92676C1.81836 6.40983 1.75 6.91341 1.75 7.4375C1.75 7.95703 1.81836 8.45833 1.95508 8.94141C2.0918 9.42904 2.2832 9.88249 2.5293 10.3018C2.77539 10.7256 3.07161 11.1107 3.41797 11.457C3.76432 11.8034 4.14941 12.0996 4.57324 12.3457C4.99251 12.5918 5.44596 12.7832 5.93359 12.9199C6.41667 13.0566 6.91797 13.125 7.4375 13.125C7.96159 13.125 8.46517 13.0566 8.94824 12.9199C9.43132 12.7832 9.88477 12.5918 10.3086 12.3457C10.7279 12.0996 11.1107 11.8034 11.457 11.457C11.8034 11.1107 12.0996 10.7256 12.3457 10.3018C12.5918 9.88249 12.7832 9.42904 12.9199 8.94141C13.0566 8.45833 13.125 7.95703 13.125 7.4375C13.125 6.91797 13.0566 6.41439 12.9199 5.92676C12.7832 5.44368 12.5918 4.99023 12.3457 4.56641C12.0996 4.14714 11.8034 3.76432 11.457 3.41797C11.1107 3.07161 10.7279 2.77539 10.3086 2.5293C9.88477 2.2832 9.43132 2.0918 8.94824 1.95508C8.46517 1.81836 7.96159 1.75 7.4375 1.75ZM7.875 10.5H7L7 6.125H7.875L7.875 10.5ZM7.875 5.25H7V4.375H7.875V5.25Z',
															fill: '#30C2FF'
														}
													})
												]
											)
										]),
										n('div', { staticClass: 'link-text' }, [t._v('Report a bug')])
									])
							  ])
							: t._e()
					])
				]);
			},
			ht = [],
			mt = n('7913'),
			vt = n('c50f'),
			bt = n('7d1a'),
			Ct = n.n(bt);
		vt['a'].addLocale(Ct.a);
		var wt = {
				props: ['plugin', 'installed', 'pluginStats'],
				data: function() {
					return { timeAgo: new vt['a']('en-US'), showAllVersions: !1 };
				},
				components: { carousel: mt['Carousel'], 'carousel-item': mt['CarouselItem'] },
				methods: {
					backToList: function() {
						this.$emit('backToList'), (this.showAllVersions = !1);
					},
					install: function() {
						this.$emit('install', this.plugin);
					},
					uninstall: function() {
						this.$emit('uninstall', this.plugin);
					}
				},
				computed: {
					installs: function() {
						var t = this;
						return this.pluginStats.find(function(e) {
							return e.id === t.plugin.id;
						})
							? this.pluginStats.find(function(e) {
									return e.id === t.plugin.id;
							  }).installs
							: 0;
					},
					uninstalls: function() {
						var t = this;
						return this.pluginStats.find(function(e) {
							return e.id === t.plugin.id;
						})
							? this.pluginStats.find(function(e) {
									return e.id === t.plugin.id;
							  }).uninstalls
							: 0;
					},
					requiredTeams: function() {
						return (
							!!this.plugin.requiredTeamIds &&
							this.plugin.requiredTeamIds.map(function(t) {
								return figmaPlus.getTeams()[t];
							})
						);
					},
					orgImage: function() {
						if (this.plugin.requiredOrgId) {
							var t = figmaPlus.getOrgs()[this.plugin.requiredOrgId];
							return t.img_url ? t.img_url : t.name[0];
						}
						return !1;
					},
					orgName: function() {
						return !!this.plugin.requiredOrgId && figmaPlus.getOrgs()[this.plugin.requiredOrgId].name;
					},
					latestUpdate: function() {
						return this.plugin.updates.sort(function(t, e) {
							return (t = new Date(t.date)), (e = new Date(e.date)), t > e ? -1 : t < e ? 1 : 0;
						})[0];
					},
					sortedUpdates: function() {
						var t = this.plugin.updates.sort(function(t, e) {
							return (t = new Date(t.date)), (e = new Date(e.date)), t > e ? -1 : t < e ? 1 : 0;
						});
						return this.showAllVersions ? t : [t[0]];
					}
				}
			},
			_t = wt,
			St = (n('18f3'), Object(H['a'])(_t, ft, ht, !1, null, null, null)),
			yt = St.exports,
			Et = function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n(
					'div',
					{
						staticClass: 'developer-screen',
						on: {
							click: function(e) {
								t.editing = '';
							}
						}
					},
					[
						n('div', { staticClass: 'header' }, [
							n('h1', [t._v('Script Runner')]),
							n('button', { on: { click: t.openScriptRunner } }, [t._v('Open')])
						]),
						n('div', { staticClass: 'header no-divider' }, [
							n('h1', [t._v('Development Server')]),
							n(
								'button',
								{
									directives: [{ name: 'show', rawName: 'v-show', value: !t.connected, expression: '!connected' }],
									staticClass: 'primary',
									on: {
										click: function(e) {
											return e.stopPropagation(), t.connect(e);
										}
									}
								},
								[t._v('Connect')]
							),
							n(
								'button',
								{
									directives: [{ name: 'show', rawName: 'v-show', value: t.connected, expression: 'connected' }],
									on: {
										click: function(e) {
											return e.stopPropagation(), t.disconnect(e);
										}
									}
								},
								[t._v('Disconnect')]
							)
						]),
						n('div', { staticClass: 'dev-server-content' }, [
							n('div', { staticClass: 'section' }, [
								n('h2', [t._v('Port')]),
								n('div', { staticClass: 'description' }, [
									t._v(
										'Set up a local http server at where your plugin files are located, then enter the port number of your server below.'
									)
								]),
								n('input', {
									directives: [{ name: 'model', rawName: 'v-model', value: t.port, expression: 'port' }],
									staticClass: 'port',
									attrs: { type: 'text' },
									domProps: { value: t.port },
									on: {
										change: t.changePort,
										input: function(e) {
											e.target.composing || (t.port = e.target.value);
										}
									}
								})
							]),
							n(
								'div',
								{ staticClass: 'section' },
								[
									n('h2', [t._v('Javascript files')]),
									n('a', [
										n('div', { staticClass: 'figma-icon add' }),
										n(
											'span',
											{
												on: {
													click: function(e) {
														return t.addPath('js');
													}
												}
											},
											[t._v('Add a path to Javascript file')]
										)
									]),
									t._l(t.jsFiles, function(e, i) {
										return n('div', { staticClass: 'js-list' }, [
											n('div', { staticClass: 'url' }, [
												n('div', { staticClass: 'file-icon js' }, [t._v('JS')]),
												n('div', { staticClass: 'prefix' }, [t._v('http://localhost:' + t._s(t.port) + '/')]),
												t.editing !== 'js' + i
													? n(
															'div',
															{
																staticClass: 'path',
																on: {
																	click: function(e) {
																		e.stopPropagation(), (t.editing = 'js' + i);
																	}
																}
															},
															[t._v(t._s(e))]
													  )
													: t._e(),
												t.editing === 'js' + i
													? n('input', {
															ref: 'jsEdit',
															refInFor: !0,
															staticClass: 'path-edit',
															attrs: { type: 'text', spellcheck: 'false', placeholder: 'File path, e.g. js/app.js' },
															domProps: { value: e },
															on: {
																keyup: function(e) {
																	if (!e.type.indexOf('key') && t._k(e.keyCode, 'enter', 13, e.key, 'Enter'))
																		return null;
																	t.editing = '';
																},
																blur: function(e) {
																	return t.changePath(e, 'js', i);
																},
																click: function(t) {
																	t.stopPropagation();
																},
																change: function(e) {
																	return t.changePath(e, 'js', i);
																}
															}
													  })
													: t._e()
											]),
											n(
												'a',
												{
													on: {
														click: function(e) {
															return t.jsFiles.splice(i, 1);
														}
													}
												},
												[t._v('Remove')]
											)
										]);
									})
								],
								2
							),
							n(
								'div',
								{ staticClass: 'section' },
								[
									n('h2', [t._v('CSS files')]),
									n('a', [
										n('div', { staticClass: 'figma-icon add' }),
										n(
											'span',
											{
												on: {
													click: function(e) {
														return t.addPath('css');
													}
												}
											},
											[t._v('Add a path to CSS file')]
										)
									]),
									t._l(t.cssFiles, function(e, i) {
										return n('div', { staticClass: 'js-list' }, [
											n('div', { staticClass: 'url' }, [
												n('div', { staticClass: 'file-icon css' }, [t._v('CSS')]),
												n('div', { staticClass: 'prefix' }, [t._v('http://localhost:' + t._s(t.port) + '/')]),
												t.editing !== 'css' + i
													? n(
															'div',
															{
																staticClass: 'path',
																on: {
																	click: function(e) {
																		e.stopPropagation(), (t.editing = 'css' + i);
																	}
																}
															},
															[t._v(t._s(e))]
													  )
													: t._e(),
												t.editing === 'css' + i
													? n('input', {
															ref: 'cssEdit',
															refInFor: !0,
															staticClass: 'path-edit',
															attrs: { type: 'text', spellcheck: 'false', placeholder: 'File path, e.g. css/app.css' },
															domProps: { value: e },
															on: {
																keyup: function(e) {
																	if (!e.type.indexOf('key') && t._k(e.keyCode, 'enter', 13, e.key, 'Enter'))
																		return null;
																	t.editing = '';
																},
																blur: function(e) {
																	return t.changePath(e, 'css', i);
																},
																click: function(t) {
																	t.stopPropagation();
																},
																change: function(e) {
																	return t.changePath(e, 'css', i);
																}
															}
													  })
													: t._e()
											]),
											n(
												'a',
												{
													on: {
														click: function(e) {
															return t.cssFiles.splice(i, 1);
														}
													}
												},
												[t._v('Remove')]
											)
										]);
									})
								],
								2
							)
						])
					]
				);
			},
			Pt = [],
			Tt = function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n('div', { staticClass: 'scriptRunner' }, [
					n('textarea', { ref: 'code', staticClass: 'code-editor', attrs: { type: 'textarea', spellcheck: 'false' } }),
					n('div', { staticClass: 'buttons' }, [
						n('a', { on: { click: t.disableCode } }, [t._v('Remove and disable code')]),
						n('button', { staticClass: 'primary', on: { click: t.runCode } }, [t._v('Refresh and Run')])
					])
				]);
			},
			It = [],
			xt = {
				mounted: function() {
					null === localStorage.getItem('figmaPlus-scriptRunnerCode')
						? (this.$refs.code.value =
								"figmaPlus.createPluginsMenuItem(\n    'Hello world!',\n    () => figmaPlus.showToast('Hello world!')\n);")
						: (this.$refs.code.value = localStorage.getItem('figmaPlus-scriptRunnerCode'));
				},
				methods: {
					runCode: function() {
						localStorage.setItem('figmaPlus-scriptRunnerCode', this.$refs.code.value), location.reload();
					},
					disableCode: function() {
						localStorage.removeItem('figmaPlus-scriptRunnerCode'), (this.$refs.code.value = '');
					}
				}
			},
			Ot = xt,
			kt = (n('416c'), Object(H['a'])(Ot, Tt, It, !1, null, null, null)),
			Rt = kt.exports,
			At = {
				data: function() {
					return { connected: !1, port: '8080', jsFiles: [], cssFiles: [], editing: '' };
				},
				mounted: function() {
					if (null !== JSON.parse(localStorage.getItem('figmaPlus-localServer'))) {
						var t = JSON.parse(localStorage.getItem('figmaPlus-localServer'));
						(this.connected = t.connected),
							(this.port = t.port),
							(this.jsFiles = t.jsFiles),
							(this.cssFiles = t.cssFiles);
					} else {
						var e = {};
						(e.connected = this.connected),
							(e.port = this.port),
							(e.jsFiles = this.jsFiles),
							(e.cssFiles = this.cssFiles),
							localStorage.setItem('figmaPlus-localServer', at()(e));
					}
				},
				watch: {
					connected: {
						handler: function(t, e) {
							this.updateLocalStorage();
						}
					},
					port: {
						handler: function(t, e) {
							this.updateLocalStorage();
						}
					},
					jsFiles: {
						handler: function(t, e) {
							this.updateLocalStorage();
						}
					},
					cssFiles: {
						handler: function(t, e) {
							this.updateLocalStorage();
						}
					},
					editing: {
						handler: function(t, e) {
							this.updateLocalStorage();
						}
					}
				},
				methods: {
					openScriptRunner: function() {
						figmaPlus.togglePluginManager(),
							figmaPlus.showUI(
								'Run Script',
								function(t) {
									new figmaPlus.Vue({
										el: t,
										render: function(t) {
											return t(Rt);
										}
									});
								},
								600
							);
					},
					updateLocalStorage: function() {
						var t = {};
						(t.connected = this.connected),
							(t.port = this.port),
							(t.jsFiles = this.jsFiles),
							(t.cssFiles = this.cssFiles),
							localStorage.setItem('figmaPlus-localServer', at()(t));
					},
					showToast: function(t) {
						figmaPlus.showToast(t + ' Refresh this tab to see changes.', 10, 'Refresh', function() {
							return location.reload();
						});
					},
					connect: function() {
						(this.connected = !0), this.showToast('Connected to development server.');
					},
					disconnect: function() {
						(this.connected = !1), this.showToast('Development server disconnected.');
					},
					addPath: function(t) {
						var e = this,
							n = 'js' === t ? this.jsFiles : this.cssFiles;
						console.log(n),
							n.push(''),
							setTimeout(function() {
								e.editing = t + (n.length - 1);
							}, 10),
							setTimeout(function() {
								'js' === t ? e.$refs.jsEdit[0].focus() : e.$refs.cssEdit[0].focus();
							}, 20),
							this.connected && this.showToast('Server settings updated.');
					},
					changePort: function() {
						this.connected && showToast('Server settings updated.');
					},
					changePath: function(t, e, n) {
						var i = t.target.value;
						'js' === e && ((i = '' === i ? 'app.js' : i), (this.jsFiles[n] = i)),
							'css' === e && ((i = '' === i ? 'app.css' : i), (this.cssFiles[n] = i)),
							(this.editing = ''),
							this.connected && this.showToast('Server settings updated.');
					}
				}
			},
			Ft = At,
			Mt = (n('5c69'), Object(H['a'])(Ft, Et, Pt, !1, null, null, null)),
			Nt = Mt.exports,
			Lt = function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n(
					'div',
					{
						ref: 'menuItem',
						staticClass: 'plugin-dropdown-option padded',
						on: {
							click: function(t) {
								return t.target !== t.currentTarget
									? null
									: (function(t) {
											return t.stopPropagation();
									  })(t);
							},
							mouseenter: t.showSubmenu
						}
					},
					[
						n('div', { staticClass: 'plugin-dropdown-option-text' }, [t._v('Figma Plus')]),
						n('div', { staticClass: 'plugin-dropdown-option-chevron' }),
						n(
							'div',
							{
								directives: [{ name: 'show', rawName: 'v-show', value: t.menuShown, expression: 'menuShown' }],
								ref: 'submenu',
								staticClass: 'plugin-dropdown-submenu'
							},
							[
								n('div', { attrs: { id: 'pluginOptions' } }),
								n('div', { staticClass: 'plugin-dropdown-option', on: { click: t.openManager } }, [
									n('div', { staticClass: 'plugin-dropdown-option-text' }, [t._v('Get Plugins')]),
									n('div', { staticClass: 'plugin-dropdown-option-shortcut' }, [t._v(t._s(t.shortcut))])
								]),
								t._m(0)
							]
						)
					]
				);
			},
			Dt = [
				function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n(
						'a',
						{
							staticClass: 'plugin-dropdown-option',
							attrs: { target: '_blank', href: 'https://github.com/figma-plus/figma-plus/issues/new' }
						},
						[n('div', { staticClass: 'plugin-dropdown-option-text' }, [t._v('Report Issues')])]
					);
				}
			],
			Bt = {
				data: function() {
					return { shortcut: navigator.platform.includes('Win') ? 'Ctrl+Shift+P' : '⇧⌘P', menuShown: !1 };
				},
				mounted: function() {
					var t = this;
					Object(a['a'])(document.querySelectorAll('div[class*="multilevel_dropdown__REFRESH--option"]')).forEach(
						function(e) {
							return e.addEventListener('mouseover', function() {
								return (t.menuShown = !1);
							});
						}
					);
				},
				methods: {
					openManager: function() {
						window.figmaPlus.togglePluginManager();
					},
					showSubmenu: function() {
						var t = document.querySelector('div[class*="multilevel_dropdown__REFRESH--optionActive"]');
						if (t) {
							var e = Object(a['a'])(t.classList).find(function(t) {
								return t.includes('optionActive');
							});
							t.classList.remove(e);
							var n = document.querySelector('div[class*="multilevel_dropdown__REFRESH--submenu"]');
							n && (n.style.display = 'none'),
								(t.onmouseenter = function() {
									t.classList.add(e), n && (n.style.display = '');
								});
						}
						var i = this.$refs.menuItem,
							s = this.$refs.submenu;
						(this.menuShown = !0),
							(s.style.bottom = ''),
							(s.style.top = ''.concat(i.getBoundingClientRect().top - 8, 'px')),
							window.innerHeight - s.getBoundingClientRect().bottom < 0 &&
								((s.style.top = ''), (s.style.bottom = '8px')),
							window.innerWidth - i.getBoundingClientRect().right > 200
								? (s.style.left = ''.concat(i.getBoundingClientRect().right, 'px'))
								: (s.style.left = ''.concat(i.getBoundingClientRect().left - 200, 'px'));
					}
				}
			},
			jt = Bt,
			$t = Object(H['a'])(jt, Lt, Dt, !1, null, null, null),
			Ht = $t.exports,
			Ut = n('6eed'),
			Vt = n.n(Ut),
			qt = n('8aa5'),
			Wt = n.n(qt);
		Wt.a.initializeApp({
			apiKey: 'AIzaSyBIE7Uc1zQaJn__j1PYraJc90bVCCkaux4',
			authDomain: 'figma-plus.firebaseapp.com',
			databaseURL: 'https://figma-plus.firebaseio.com',
			projectId: 'figma-plus',
			storageBucket: 'figma-plus.appspot.com',
			messagingSenderId: '610349397276'
		});
		var Kt = Wt.a.firestore(),
			zt = {
				components: { VModal: O.a, PluginItem: gt, DetailScreen: yt, DeveloperScreen: Nt, PluginsMenu: Ht },
				data: function() {
					return {
						isLocalChromeExtension: window.localExtension,
						myOrgId: null,
						myTeams: null,
						modalOpened: !1,
						searchText: '',
						selectedPlugin: {},
						detailScreenOn: !1,
						currentTab: 'Plugins',
						plugins: [],
						installedPlugins: [],
						devMode: window.pluginDevMode,
						pluginStats: [],
						users_installed_plugins: [],
						users_count_limits: [],
						user: null,
						userHash: ''
					};
				},
				firestore: {
					pluginStats: Kt.collection('plugins_stats'),
					users_installed_plugins: Kt.collection('users_installed_plugins'),
					users_count_limits: Kt.collection('users_count_limits')
				},
				created: function() {
					var t = this;
					(this.userHash = Vt()()
						.update(App._state.user.id)
						.digest('hex')),
						Wt.a.auth().onAuthStateChanged(function(e) {
							e
								? (console.log('signed in', e.uid),
								  (t.user = e),
								  Kt.collection('users_installed_plugins')
										.doc(e.uid)
										.get()
										.then(function(t) {})
										.catch(function(t) {
											return console.log;
										}))
								: (console.log('not signed in, signing in'),
								  Wt.a
										.auth()
										.signInWithEmailAndPassword(t.userHash + '@figmaplus.com', t.userHash)
										.catch(function(e) {
											'auth/user-not-found' === e.code &&
												(console.log('not user, signing up'),
												Wt.a.auth().createUserWithEmailAndPassword(t.userHash + '@figmaplus.com', t.userHash));
										}));
						}),
						this.$bind('plugins_stats', Kt.collection('plugins_stats')).then(function(e) {
							t.pluginStats;
						}),
						this.$bind('users_installed_plugins', Kt.collection('users_installed_plugins')).then(function(e) {
							t.users_installed_plugins;
						}),
						this.$bind('users_count_limits', Kt.collection('users_count_limits')).then(function(e) {
							t.users_count_limits;
						});
				},
				watch: {
					installedPlugins: function(t) {
						localStorage.setItem('figmaPlus-installedPlugins', at()(t));
					}
				},
				beforeMount: function() {
					var t = this;
					figmaPlus.onFileBrowserLoaded(function() {
						t.modalOpened && t.hide(), document.getElementById('pluginManagerButton') || t.injectpluginManagerButton();
					}),
						figmaPlus.onFileBrowserChanged(function() {
							document.getElementById('pluginManagerButton') || t.injectpluginManagerButton();
						}),
						figmaPlus.onFileBrowserUnloaded(this.hide),
						figmaPlus.registerKeyboardShortcut(
							{ mac: { shift: !0, command: !0, key: 'P' }, windows: { shift: !0, control: !0, key: 'P' } },
							this.show
						),
						document.querySelector('[data-tooltip-text="Show notifications"]') &&
							!document.getElementById('pluginManagerButton') &&
							this.injectpluginManagerButton(),
						(window.figmaPlus.togglePluginManager = this.toggleModal),
						figmaPlus.onMenuOpened(function(t) {
							if ('fullscreen-menu-dropdown' === t) {
								var e = Object(a['a'])(
										document.querySelectorAll('div[class*="multilevel_dropdown__REFRESH--name"]')
									).find(function(t) {
										return 'Integrations' === t.innerText;
									}).parentNode,
									n = document.createElement('div');
								e.parentNode.insertBefore(n, e),
									new figmaPlus.Vue({
										el: n,
										render: function(t) {
											return t(Ht);
										}
									});
							}
						}),
						localStorage.getItem('figmaPlus-installedPlugins') &&
							(this.installedPlugins = JSON.parse(localStorage.getItem('figmaPlus-installedPlugins')));
					var e = JSON.parse(localStorage.getItem('figmaPlus-masterList'));
					if (this.isLocalChromeExtension) {
						var i = n('212c');
						localStorage.getItem('figmaPlus-plugins') && e && at()(e) === at()(i)
							? ((this.plugins = JSON.parse(localStorage.getItem('figmaPlus-plugins'))), this.checkForUpdates())
							: (e && i.length > e.length && localStorage.setItem('figmaPlus-hasNewPlugins', 'true'),
							  this.loadPlugins(i));
					} else
						fetch('https://figma-plus.github.io/plugin-directory/plugins.json', { cache: 'no-cache' })
							.then(function(t) {
								return t.json();
							})
							.then(function(n) {
								localStorage.getItem('figmaPlus-plugins') && e && at()(e) === at()(n)
									? ((t.plugins = JSON.parse(localStorage.getItem('figmaPlus-plugins'))), t.checkForUpdates())
									: (e && n.length > e.length && localStorage.setItem('figmaPlus-hasNewPlugins', 'true'),
									  t.loadPlugins(n));
							});
				},
				computed: {
					searchedPlugins: function() {
						var t = this,
							e = this.myOrgId
								? this.plugins.filter(function(e) {
										return !e.requiredOrgId || '' === e.requiredOrgId || e.requiredOrgId === t.myOrgId;
								  })
								: this.plugins.filter(function(t) {
										return !t.requiredOrgId || '' === t.requiredOrgId;
								  });
						if (
							((e =
								this.myTeams && this.myTeams.length > 0
									? e.filter(function(e) {
											return (
												!e.requiredTeamIds ||
												0 === e.requiredTeamIds.length ||
												e.requiredTeamIds.some(function(e) {
													return t.myTeams.find(function(t) {
														return t === e;
													});
												})
											);
									  })
									: e.filter(function(t) {
											return !t.requiredTeamIds || 0 === t.requiredTeamIds.length;
									  })),
							(e = e.filter(function(t) {
								return figmaPlus.isDesktop() ? !t.webOnly : !t.desktopOnly;
							})),
							'Plugins' === this.currentTab)
						)
							return e
								.filter(function(e) {
									return e.name.toLowerCase().match(t.searchText.toLowerCase());
								})
								.sort(function(t, e) {
									return new Date(e.publishDate) - new Date(t.publishDate);
								});
						var n = e.filter(function(e) {
							return t.installedPlugins.find(function(t) {
								return t.id === e.id;
							});
						});
						return n
							.filter(function(e) {
								return e.name.toLowerCase().match(t.searchText.toLowerCase());
							})
							.sort(function(t, e) {
								return new Date(e.publishDate) - new Date(t.publishDate);
							});
					},
					numberOfUpdates: function() {
						var t = this,
							e = this.installedPlugins.filter(function(e) {
								return t.plugins.find(function(t) {
									return t.id === e.id && t.version !== e.version;
								});
							}).length;
						return (
							document.querySelector('#pluginManagerButton') &&
								(e > 0
									? document.querySelector('#pluginManagerButton').classList.add('has-badge')
									: document.querySelector('#pluginManagerButton').classList.remove('has-badge')),
							e
						);
					}
				},
				methods: {
					injectpluginManagerButton: function() {
						var t = document.querySelector('[data-tooltip-text="Show notifications"]');
						t.parentElement.style.display = 'flex';
						var e = document.createElement('div');
						(e.id = 'pluginManagerButton'),
							(e.className = this.numberOfUpdates > 0 ? 'top-bar-button has-badge' : 'top-bar-button'),
							(e.innerHTML =
								'<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M8 5H9V8H12V9H9V12H8V9H5V8H8V5Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M17 0V9H16.9855C16.7267 13.4617 13.0266 17 8.5 17C3.80558 17 0 13.1944 0 8.5C0 3.97343 3.53831 0.273272 8 0.0144615V0H17ZM16 8.72172L15.9872 8.94209C15.7589 12.878 12.4937 16 8.5 16C4.35786 16 1 12.6421 1 8.5C1 4.50631 4.12203 1.24109 8.05791 1.01278L8.27829 1H16V8.72172Z" fill="white"/>\n</svg>'),
							t.parentNode.insertBefore(e, t),
							(e.onclick = this.toggleModal),
							figmaPlus.addTooltip(e, 'Figma Plus', !0);
					},
					loadPlugins: function(t) {
						var e = this,
							n = (function() {
								var t = Object(o['a'])(
									regeneratorRuntime.mark(function t(n) {
										var i, s, o, a;
										return regeneratorRuntime.wrap(function(t) {
											while (1)
												switch ((t.prev = t.next)) {
													case 0:
														return (
															(i = n.github.replace('https://github.com/', '')),
															(i = '/' === i[i.length - 1] ? i.slice(0, -1) : i),
															(s = 'https://cdn.jsdelivr.net/gh/'.concat(i, '@').concat(n.approvedCommit, '/')),
															(t.next = 5),
															fetch(s + 'manifest.json').then(function(t) {
																return t.json();
															})
														);
													case 5:
														return (
															(o = t.sent),
															(t.next = 8),
															fetch('https://api.github.com/repos/'.concat(i, '/releases')).then(function(t) {
																return t.json();
															})
														);
													case 8:
														return (
															(a = t.sent),
															(o.publishDate = a[a.length - 1].published_at),
															(o.updates = a.map(function(t) {
																return { version: t.tag_name, date: t.published_at, notes: t.body };
															})),
															(o.version = n.approvedVersion),
															(o.commit = n.approvedCommit),
															(o.github = n.github),
															(o.userRepo = i),
															o.images &&
																(o.images = o.images.map(function(t) {
																	return t.startsWith('https://') || t.startsWith('http://')
																		? t
																		: ((t = '/' === t[0] ? t.substring(1) : t),
																		  'https://cdn.jsdelivr.net/gh/'
																				.concat(i, '@')
																				.concat(n.approvedCommit, '/')
																				.concat(t));
																})),
															e.plugins.push(o),
															t.abrupt('return', o)
														);
													case 18:
													case 'end':
														return t.stop();
												}
										}, t);
									})
								);
								return function(e) {
									return t.apply(this, arguments);
								};
							})(),
							i = t.map(function(t) {
								return n(t);
							});
						d.a.all(i).then(function() {
							localStorage.setItem('figmaPlus-plugins', at()(e.plugins)),
								e.checkForUpdates(),
								localStorage.setItem('figmaPlus-masterList', at()(t)),
								JSON.parse(localStorage.getItem('figmaPlus-hasNewPlugins')) &&
									figmaPlus.onAppLoaded(function() {
										console.log('app loaded'), figmaPlus.showToast('A new plugin is available!', 10, 'View', e.show);
									}),
								e.migrate();
						});
					},
					checkForUpdates: function() {
						var t = this;
						this.installedPlugins.forEach(function(e) {
							var n = t.plugins.find(function(t) {
								return t.id === e.id;
							});
							e.version !== n.version &&
								figmaPlus.onAppLoaded(function() {
									figmaPlus.showToast(''.concat(e.name, ' plugin has been updated!'), 10, "What's new", t.show);
								});
						});
					},
					migrate: function() {
						var t = this;
						if (localStorage.getItem('installedPlugins')) {
							var e = JSON.parse(localStorage.getItem('installedPlugins'));
							e.forEach(function(e) {
								t.install(
									t.plugins.find(function(t) {
										return t.id === e.id;
									})
								);
							}),
								localStorage.removeItem('installedPlugins'),
								figmaPlus.showToast('Plugins updated, please restart Figma.', 10, 'Refresh', function() {
									return location.reload();
								});
						}
					},
					show: function() {
						var t = figmaPlus.getMyOrgId();
						this.myOrgId = t;
						var e = figmaPlus.getMyTeams().map(function(t) {
							return t.id;
						});
						(this.myTeams = e),
							this.numberOfUpdates > 0 && (this.currentTab = 'Installed'),
							this.$modal.show('pluginManagerModal');
					},
					hide: function() {
						this.$modal.hide('pluginManagerModal');
					},
					openModal: function() {
						(this.modalOpened = !0),
							document.getElementById('pluginManagerButton') &&
								document.getElementById('pluginManagerButton').classList.add('active'),
							localStorage.setItem('figmaPlus-hasNewPlugins', 'false');
					},
					modalClosed: function() {
						var t = this;
						if ('Installed' === this.currentTab && this.numberOfUpdates > 0) {
							var e = this.installedPlugins.map(function(e) {
								return t.plugins.find(function(t) {
									return t.id === e.id;
								});
							});
							this.installedPlugins = e;
						}
						(this.currentTab = 'Plugins'),
							(this.modalOpened = !1),
							(this.detailScreenOn = !1),
							document.getElementById('pluginManagerButton') &&
								document.querySelector('#pluginManagerButton').classList.remove('active');
					},
					toggleModal: function() {
						this.modalOpened ? this.hide() : this.show();
					},
					goToDetail: function(t) {
						(this.selectedPlugin = t),
							(document.querySelector('.detail-screen .content').scrollTop = 0),
							(this.detailScreenOn = !0);
					},
					install: function(t) {
						var e = this;
						this.installedPlugins.push(t),
							figmaPlus.showToast(
								figmaPlus.isDesktop()
									? 'Plugin installed. Refresh opened tabs to see changes.'
									: 'Plugin installed. Refresh this page to see changes.',
								10,
								figmaPlus.isDesktop() ? 'Refresh this tab' : 'Refresh',
								function() {
									return location.reload();
								}
							);
						var n = this.users_installed_plugins.find(function(t) {
							return t.id === e.userHash;
						});
						if (n)
							Kt.collection('users_installed_plugins')
								.doc(this.user.uid)
								.set({ plugins: [t.id] });
						else {
							Kt.collection('users_installed_plugins')
								.doc(this.user.uid)
								.update({ plugins: Wt.a.firestore.FieldValue.arrayUnion(t.id) });
							var i = this.pluginStats.find(function(e) {
								return e.id === t.id;
							});
							i
								? Kt.collection('plugins_stats')
										.doc(t.id)
										.update({ installs: i.installs + 1 })
								: Kt.collection('plugins_stats')
										.doc(t.id)
										.set({ installs: 1, uninstalls: 0 });
						}
					},
					uninstall: function(t) {
						var e = this;
						(this.installedPlugins = this.installedPlugins.filter(function(e) {
							return e.id !== t.id;
						})),
							(this.detailScreenOn = !1),
							figmaPlus.showToast(
								figmaPlus.isDesktop()
									? 'Plugin uninstalled. Refresh opened tabs to see changes.'
									: 'Plugin uninstalled. Refresh this page to see changes.',
								10,
								figmaPlus.isDesktop() ? 'Refresh this tab' : 'Refresh',
								function() {
									return location.reload();
								}
							);
						var n = this.users_installed_plugins.find(function(t) {
							return t.id === e.userHash;
						});
						if (n)
							Kt.collection('users_installed_plugins')
								.doc(this.user.uid)
								.set({ plugins: [] });
						else {
							Kt.collection('users_installed_plugins')
								.doc(this.user.uid)
								.update({ plugins: Wt.a.firestore.FieldValue.arrayRemove(t.id) });
							var i = this.pluginStats.find(function(e) {
								return e.id === t.id;
							});
							i
								? Kt.collection('plugins_stats')
										.doc(t.id)
										.update({ uninstalls: i.uninstalls + 1 })
								: Kt.collection('plugins_stats')
										.doc(t.id)
										.set({ installs: 0, uninstalls: 0 });
						}
					}
				}
			},
			Gt = zt,
			Jt = (n('cd6a'), Object(H['a'])(Gt, it, st, !1, null, null, null)),
			Yt = Jt.exports,
			Xt = function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n('div', { staticClass: 'onboarding-modal' }, [
					n('img', {
						attrs: { src: 'https://docs.figmaplus.com/images/pluginManagerInFileBrowser.png', width: '376px' }
					}),
					n('div', { staticClass: 'padded-content' }, [
						n('div', { staticClass: 'onboarding-text' }, [
							t._v(
								'You can browse and install plugins by clicking on the Figma Plus icon next to Notifications in the top right corner of your File Browser.'
							)
						]),
						n(
							'a',
							{
								staticClass: 'link',
								attrs: { target: '_blank', href: 'https://docs.figmaplus.com/#/userGuide/manager' }
							},
							[t._v('Learn more...')]
						),
						n('div', { staticClass: 'buttons' }, [
							n('button', { staticClass: 'primary', on: { click: t.closeModal } }, [t._v('Done')])
						])
					])
				]);
			},
			Zt = [],
			Qt = {
				mounted: function() {
					localStorage.setItem('figmaPlus-onboarded', 'true');
				},
				methods: {
					closeModal: function() {
						figmaPlus.hideUI('Welcome to Figma Plus');
					}
				}
			},
			te = Qt,
			ee = (n('e49e'), Object(H['a'])(te, Xt, Zt, !1, null, '9a2946e6', null)),
			ne = ee.exports,
			ie = n('0ff2');
		nt.Vue.use(ie['a']), (window.figmaPlus = nt);
		var se = document.createElement('div');
		(se.id = 'pluginManagerApp'),
			document.body.appendChild(se),
			new nt.Vue({
				el: '#pluginManagerApp',
				render: function(t) {
					return t(Yt);
				}
			});
		var oe = JSON.parse(localStorage.getItem('figmaPlus-installedPlugins'));
		if (oe) {
			var ae = (function() {
				var t = Object(o['a'])(
					regeneratorRuntime.mark(function t() {
						var e, n, i, o, a, r, l;
						return regeneratorRuntime.wrap(
							function(t) {
								while (1)
									switch ((t.prev = t.next)) {
										case 0:
											(e = JSON.parse(localStorage.getItem('figmaPlus-masterList'))),
												(n = !0),
												(i = !1),
												(o = void 0),
												(t.prev = 4),
												(a = regeneratorRuntime.mark(function t() {
													var n, i, s, o, a;
													return regeneratorRuntime.wrap(function(t) {
														while (1)
															switch ((t.prev = t.next)) {
																case 0:
																	if (
																		((n = l.value),
																		(i = e.find(function(t) {
																			return t.id === n.id;
																		})),
																		(s = i.approvedVersion),
																		(o = i.approvedCommit),
																		n.version !== s)
																	) {
																		t.next = 8;
																		break;
																	}
																	(t.t0 = n), (t.next = 11);
																	break;
																case 8:
																	return (
																		(t.next = 10),
																		fetch(
																			'https://cdn.jsdelivr.net/gh/'.concat(n.userRepo, '@').concat(o, '/manifest.json')
																		).then(function(t) {
																			return t.json();
																		})
																	);
																case 10:
																	t.t0 = t.sent;
																case 11:
																	(a = t.t0),
																		a.css &&
																			a.css.forEach(function(t) {
																				var e = document.createElement('link');
																				(e.rel = 'stylesheet'),
																					(e.type = 'text/css'),
																					(e.href = 'https://cdn.jsdelivr.net/gh/'
																						.concat(n.userRepo, '@')
																						.concat(o, '/')
																						.concat(t)),
																					document.head.appendChild(e);
																			}),
																		a.js &&
																			a.js.forEach(function(t) {
																				fetch(
																					'https://cdn.jsdelivr.net/gh/'
																						.concat(n.userRepo, '@')
																						.concat(o, '/')
																						.concat(t)
																				)
																					.then(function(t) {
																						return t.text();
																					})
																					.then(function(t) {
																						var e = document.createElement('script'),
																							n = document.createTextNode('(function () {'.concat(t, '}())'));
																						e.appendChild(n), document.head.appendChild(e);
																					});
																			});
																case 14:
																case 'end':
																	return t.stop();
															}
													}, t);
												})),
												(r = s()(oe));
										case 7:
											if ((n = (l = r.next()).done)) {
												t.next = 12;
												break;
											}
											return t.delegateYield(a(), 't0', 9);
										case 9:
											(n = !0), (t.next = 7);
											break;
										case 12:
											t.next = 18;
											break;
										case 14:
											(t.prev = 14), (t.t1 = t['catch'](4)), (i = !0), (o = t.t1);
										case 18:
											(t.prev = 18), (t.prev = 19), n || null == r.return || r.return();
										case 21:
											if (((t.prev = 21), !i)) {
												t.next = 24;
												break;
											}
											throw o;
										case 24:
											return t.finish(21);
										case 25:
											return t.finish(18);
										case 26:
										case 'end':
											return t.stop();
									}
							},
							t,
							null,
							[[4, 14, 18, 26], [19, , 21, 25]]
						);
					})
				);
				return function() {
					return t.apply(this, arguments);
				};
			})();
			ae();
		}
		var re = JSON.parse(localStorage.getItem('figmaPlus-localServer'));
		re &&
			window.pluginDevMode &&
			re.connected &&
			(re.cssFiles.forEach(function(t) {
				var e = document.createElement('link');
				(e.rel = 'stylesheet'),
					(e.type = 'text/css'),
					(e.href = 'http://localhost:' + re.port + '/' + t + '?_=' + new Date().getTime()),
					document.head.appendChild(e);
			}),
			re.jsFiles.forEach(function(t) {
				fetch('http://localhost:' + re.port + '/' + t, { cache: 'no-cache' })
					.then(function(t) {
						return t.text();
					})
					.then(function(t) {
						var e = document.createElement('script'),
							n = document.createTextNode('(function () {'.concat(t, '}())'));
						e.appendChild(n), document.head.appendChild(e);
					});
			}));
		var le = localStorage.getItem('figmaPlus-scriptRunnerCode');
		if (le && window.pluginDevMode) {
			var ue = document.createElement('script');
			(ue.innerText = '(function () {'.concat(le, '}())')), document.head.appendChild(ue);
		}
		localStorage.getItem('figmaPlus-onboarded') ||
			nt.showUI(
				'Welcome to Figma Plus',
				function(t) {
					new nt.Vue({
						el: t,
						render: function(t) {
							return t(ne);
						}
					});
				},
				400,
				425,
				null,
				null,
				!0,
				!1
			),
			r();
	},
	'5c69': function(t, e, n) {
		'use strict';
		var i = n('12ca'),
			s = n.n(i);
		s.a;
	},
	'6b25': function(t, e, n) {},
	cd6a: function(t, e, n) {
		'use strict';
		var i = n('f666'),
			s = n.n(i);
		s.a;
	},
	d073: function(t, e, n) {},
	e49e: function(t, e, n) {
		'use strict';
		var i = n('42ee'),
			s = n.n(i);
		s.a;
	},
	f666: function(t, e, n) {}
});

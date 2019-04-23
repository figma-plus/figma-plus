export const getNode = node => {
	const sceneNode = App._state.mirror.sceneGraph.get(node);
	const newNode = { id: sceneNode.guid, type: sceneNode.type };
	if (sceneNode.parent) {
		Object.defineProperty(newNode, 'parent', {
			get() {
				return getNode(sceneNode.parent);
			}
		});
	}
	Object.defineProperties(newNode, {
		name: {
			get() {
				return sceneNode.name;
			},
			set(val) {
				App.sendMessage('setNodeProperty', {
					nodeId: sceneNode.guid,
					property: 'name',
					value: val
				});
			}
		},
		visible: {
			get() {
				return sceneNode.visible;
			},
			set(val) {
				App.sendMessage('setNodeProperty', {
					nodeId: sceneNode.guid,
					property: 'visible',
					value: val
				});
			}
		},
		locked: {
			get() {
				return sceneNode.locked;
			},
			set(val) {
				App.sendMessage('setNodeProperty', {
					nodeId: sceneNode.guid,
					property: 'locked',
					value: val
				});
			}
		}
	});
	if (sceneNode.reversedChildren.length !== 0) {
		Object.defineProperty(newNode, 'children', {
			value: sceneNode.reversedChildren.map(child => {
				return getNode(child);
			})
		});
	}
	if (!(sceneNode.type === 'DOCUMENT' || sceneNode.type === 'CANVAS')) {
		const moreInfo = App.sendMessage('inspectNodeForInteractionTests', { nodeId: sceneNode.guid }).args;
		newNode.absoluteBounds = moreInfo.absoluteBounds;
		const relativeTransform = moreInfo.relativeTransform;
		newNode.relativeTransform = [
			[relativeTransform.m00, relativeTransform.m01, relativeTransform.m02],
			[relativeTransform.m10, relativeTransform.m11, relativeTransform.m12]
		];
		if (sceneNode.type === 'TEXT') {
			Object.defineProperty(newNode, 'characters', {
				get() {
					return moreInfo.extractedText;
				},
				set(val) {
					const selectedNodes = Object.keys(App._state.mirror.sceneGraphSelection);
					App.sendMessage('clearSelection');
					App.sendMessage('addToSelection', { nodeIds: [newNode.id] });
					App.triggerAction('request-edit-mode');
					var inputNode = document.querySelector('.focus-target');
					inputNode.focus();
					inputNode.value = val;
					inputNode.dispatchEvent(new InputEvent('input'));
					App.triggerAction('leave-edit-mode');
					App.sendMessage('clearSelection');
					if (selectedNodes.length > 0) App.sendMessage('addToSelection', { nodeIds: selectedNodes });
				}
			});
		}
		newNode.getProperties = async () => {
			if (!(newNode.type === 'DOCUMENT' || newNode.type === 'CANVAS')) {
				const selectedNodes = Object.keys(App._state.mirror.sceneGraphSelection);
				if (selectedNodes.length !== 1 || (selectedNodes.length === 1 && newNode.id !== selectedNodes[0])) {
					App.sendMessage('clearSelection');
					await until(() => window.App._state.mirror.selectionProperties.visible === null);
					App.sendMessage('addToSelection', { nodeIds: [newNode.id] });
					await until(() => window.App._state.mirror.selectionProperties.visible !== null);
				}
				const result = App._state.mirror.selectionProperties;
				Object.defineProperties(newNode, {
					size: {
						get() {
							return moreInfo.size;
						},
						set(val) {
							updateProperties(this.id, { width: val.x, height: val.y });
						}
					},
					opacity: {
						get() {
							return result.opacity;
						},
						set(val) {
							updateProperties(this.id, { opacity: val });
						}
					},
					blendMode: {
						get() {
							return result.blendMode;
						},
						set(val) {
							updateProperties(this.id, { blendMode: val });
						}
					},
					isMask: {
						get() {
							return result.mask;
						},
						set(val) {
							updateProperties(this.id, { mask: val });
						}
					},
					effects: {
						get() {
							return result.effects;
						},
						set(val) {
							updateProperties(this.id, { effects: val });
						}
					},
					constraints: {
						get() {
							return { horizontal: result.horizontalConstraint, vertical: result.verticalConstraint };
						},
						set(val) {
							updateProperties(this.id, {
								horizontalConstraint: val.horizontal,
								verticalConstraint: val.vertical
							});
						}
					},
					x: {
						get() {
							return result.x;
						},
						set(val) {
							updateProperties(this.id, { x: val });
						}
					},
					y: {
						get() {
							return result.y;
						},
						set(val) {
							updateProperties(this.id, { y: val });
						}
					},
					width: {
						get() {
							return result.width;
						},
						set(val) {
							updateProperties(this.id, { width: val });
						}
					},
					height: {
						get() {
							return result.height;
						},
						set(val) {
							updateProperties(this.id, { height: val });
						}
					},
					exportSettings: {
						get() {
							return result.exportSettings;
						},
						set(val) {
							updateProperties(this.id, { exportSettings: val });
						}
					}
				});
				if (
					result.inheritFillStyleID &&
					Object.keys(result.inheritFillStyleID)[0] !== '__mixed__' &&
					result.inheritFillStyleID.sessionID !== 4294967295
				) {
					Object.defineProperty(newNode, 'fillStyleId', {
						get() {
							return result.inheritFillStyleKey;
						},
						set(val) {
							const styles = Object.values(App._state.library.published.styles)
								.map(org => Object.values(org))
								.flat()
								.map(team => Object.values(team))
								.flat()
								.concat(Object.values(App._state.library.local.styles));
							const style = styles.find(style => style.key === val);
							if (style.canvas_url) {
								var xhr = new XMLHttpRequest();
								xhr.open('GET', style.canvas_url);
								xhr.responseType = 'arraybuffer';
								xhr.onload = () => {
									const localGUID = App.sendMessage(
										'getOrCreateSubscribedStyleNodeId',
										{
											styleKey: style.key,
											fileKey: style.file_key,
											editingFileKey: App._state.editingFileKey,
											versionHash: style.content_hash
										},
										new Uint8Array(xhr.response)
									).args.localGUID.split(':');
									updateProperties(this.id, { inheritFillStyleID: { sessionID: localGUID[0], localID: localGUID[1] } });
								};
								xhr.send();
							} else {
								const localGUID = style.node_id.split(':');
								updateProperties(this.id, { inheritFillStyleID: { sessionID: localGUID[0], localID: localGUID[1] } });
							}
						}
					});
				}
				if (
					result.inheritFillStyleIDForStroke &&
					Object.keys(result.inheritFillStyleIDForStroke)[0] !== '__mixed__' &&
					result.inheritFillStyleIDForStroke.sessionID !== 4294967295
				) {
					Object.defineProperty(newNode, 'strokeStyleId', {
						get() {
							return result.inheritFillStyleKeyForStroke;
						},
						set(val) {
							const styles = Object.values(App._state.library.published.styles)
								.map(org => Object.values(org))
								.flat()
								.map(team => Object.values(team))
								.flat()
								.concat(Object.values(App._state.library.local.styles));
							const style = styles.find(style => style.key === val);
							if (style.canvas_url) {
								var xhr = new XMLHttpRequest();
								xhr.open('GET', style.canvas_url);
								xhr.responseType = 'arraybuffer';
								xhr.onload = () => {
									const localGUID = App.sendMessage(
										'getOrCreateSubscribedStyleNodeId',
										{
											styleKey: style.key,
											fileKey: style.file_key,
											editingFileKey: App._state.editingFileKey,
											versionHash: style.content_hash
										},
										new Uint8Array(xhr.response)
									).args.localGUID.split(':');
									updateProperties(this.id, {
										inheritFillStyleIDForStroke: { sessionID: localGUID[0], localID: localGUID[1] }
									});
								};
								xhr.send();
							} else {
								const localGUID = style.node_id.split(':');
								updateProperties(this.id, {
									inheritFillStyleIDForStroke: { sessionID: localGUID[0], localID: localGUID[1] }
								});
							}
						}
					});
				}
				if (
					result.inheritFillStyleIDForBackground &&
					Object.keys(result.inheritFillStyleIDForBackground)[0] !== '__mixed__' &&
					result.inheritFillStyleIDForBackground.sessionID !== 4294967295
				) {
					Object.defineProperty(newNode, 'backgroundStyleId', {
						get() {
							return result.inheritFillStyleKeyForBackground;
						},
						set(val) {
							const styles = Object.values(App._state.library.published.styles)
								.map(org => Object.values(org))
								.flat()
								.map(team => Object.values(team))
								.flat()
								.concat(Object.values(App._state.library.local.styles));
							const style = styles.find(style => style.key === val);
							if (style.canvas_url) {
								var xhr = new XMLHttpRequest();
								xhr.open('GET', style.canvas_url);
								xhr.responseType = 'arraybuffer';
								xhr.onload = () => {
									const localGUID = App.sendMessage(
										'getOrCreateSubscribedStyleNodeId',
										{
											styleKey: style.key,
											fileKey: style.file_key,
											editingFileKey: App._state.editingFileKey,
											versionHash: style.content_hash
										},
										new Uint8Array(xhr.response)
									).args.localGUID.split(':');
									updateProperties(this.id, {
										inheritFillStyleIDForBackground: { sessionID: localGUID[0], localID: localGUID[1] }
									});
								};
								xhr.send();
							} else {
								const localGUID = style.node_id.split(':');
								updateProperties(this.id, {
									inheritFillStyleIDForBackground: { sessionID: localGUID[0], localID: localGUID[1] }
								});
							}
						}
					});
				}
				if (
					result.inheritEffectStyleID &&
					Object.keys(result.inheritEffectStyleID)[0] !== '__mixed__' &&
					result.inheritEffectStyleID.sessionID !== 4294967295
				) {
					Object.defineProperty(newNode, 'effectStyleId', {
						get() {
							return result.inheritEffectStyleKey;
						},
						set(val) {
							const styles = Object.values(App._state.library.published.styles)
								.map(org => Object.values(org))
								.flat()
								.map(team => Object.values(team))
								.flat()
								.concat(Object.values(App._state.library.local.styles));
							const style = styles.find(style => style.key === val);
							if (style.canvas_url) {
								var xhr = new XMLHttpRequest();
								xhr.open('GET', style.canvas_url);
								xhr.responseType = 'arraybuffer';
								xhr.onload = () => {
									const localGUID = App.sendMessage(
										'getOrCreateSubscribedStyleNodeId',
										{
											styleKey: style.key,
											fileKey: style.file_key,
											editingFileKey: App._state.editingFileKey,
											versionHash: style.content_hash
										},
										new Uint8Array(xhr.response)
									).args.localGUID.split(':');
									updateProperties(this.id, {
										inheritEffectStyleID: { sessionID: localGUID[0], localID: localGUID[1] }
									});
								};
								xhr.send();
							} else {
								const localGUID = style.node_id.split(':');
								updateProperties(this.id, { inheritEffectStyleID: { sessionID: localGUID[0], localID: localGUID[1] } });
							}
						}
					});
				}
				if (
					result.inheritGridStyleID &&
					Object.keys(result.inheritGridStyleID)[0] !== '__mixed__' &&
					result.inheritGridStyleID.sessionID !== 4294967295
				) {
					Object.defineProperty(newNode, 'effectStyleId', {
						get() {
							return result.inheritGridStyleKey;
						},
						set(val) {
							const styles = Object.values(App._state.library.published.styles)
								.map(org => Object.values(org))
								.flat()
								.map(team => Object.values(team))
								.flat()
								.concat(Object.values(App._state.library.local.styles));
							const style = styles.find(style => style.key === val);
							if (style.canvas_url) {
								var xhr = new XMLHttpRequest();
								xhr.open('GET', style.canvas_url);
								xhr.responseType = 'arraybuffer';
								xhr.onload = () => {
									const localGUID = App.sendMessage(
										'getOrCreateSubscribedStyleNodeId',
										{
											styleKey: style.key,
											fileKey: style.file_key,
											editingFileKey: App._state.editingFileKey,
											versionHash: style.content_hash
										},
										new Uint8Array(xhr.response)
									).args.localGUID.split(':');
									updateProperties(this.id, {
										inheritGridStyleID: { sessionID: localGUID[0], localID: localGUID[1] }
									});
								};
								xhr.send();
							} else {
								const localGUID = style.node_id.split(':');
								updateProperties(this.id, { inheritGridStyleID: { sessionID: localGUID[0], localID: localGUID[1] } });
							}
						}
					});
				}
				if (newNode.type !== 'FRAME' || newNode.type !== 'INSTANCE') {
					Object.defineProperties(newNode, {
						fills: {
							get() {
								return result.fillPaints;
							},
							set(val) {
								updateProperties(this.id, { fillPaints: val });
							}
						},
						strokes: {
							get() {
								return result.fillPaints;
							},
							set(val) {
								updateProperties(this.id, { fillPaints: val });
							}
						},
						strokeWeight: {
							get() {
								return result.strokeWeight;
							},
							set(val) {
								updateProperties(this.id, { strokeWeight: val });
							}
						},
						strokeAlign: {
							get() {
								return result.strokeAlign;
							},
							set(val) {
								updateProperties(this.id, { strokeAlign: val });
							}
						},
						strokeCap: {
							get() {
								return result.strokeCap;
							},
							set(val) {
								updateProperties(this.id, { strokeCap: val });
							}
						},
						strokeJoin: {
							get() {
								return result.strokeJoin;
							},
							set(val) {
								updateProperties(this.id, { strokeJoin: val });
							}
						},
						dashPattern: {
							get() {
								return result.dashPattern;
							},
							set(val) {
								updateProperties(this.id, { dashPattern: val });
							}
						}
					});
				}
				if (newNode.type === 'FRAME' || newNode.type === 'INSTANCE' || newNode.type === 'SYMBOL') {
					Object.defineProperties(newNode, {
						backgrounds: {
							get() {
								return result.backgroundPaints;
							},
							set(val) {
								updateProperties(this.id, { backgroundPaints: val });
							}
						},
						layoutGrids: {
							get() {
								return result.layoutGrids;
							},
							set(val) {
								updateProperties(this.id, { layoutGrids: val });
							}
						},
						clipsContent: {
							get() {
								return !result.frameMaskDisabled;
							},
							set(val) {
								updateProperties(this.id, { frameMaskDisabled: !val });
							}
						}
					});
				}
				if (
					newNode.type === 'BOOLEAN_OPERATION' ||
					newNode.type === 'VECTOR' ||
					newNode.type === 'STAR' ||
					newNode.type === 'REGULAR_POLYGON' ||
					newNode.type === 'RECTANGLE'
				) {
					Object.defineProperties(newNode, {
						cornerRadius: {
							get() {
								return result.cornerRadius;
							},
							set(val) {
								updateProperties(this.id, { cornerRadius: val });
							}
						},
						cornerSmoothing: {
							get() {
								return result.cornerSmoothing;
							},
							set(val) {
								updateProperties(this.id, { cornerSmoothing: val });
							}
						}
					});
				}
				switch (newNode.type) {
					case 'STAR':
						Object.defineProperties(newNode, {
							pointCount: {
								get() {
									return result.count;
								},
								set(val) {
									updateProperties(this.id, { count: val });
								}
							},
							starInnerRadius: {
								get() {
									return result.starInnerScale;
								},
								set(val) {
									updateProperties(this.id, { starInnerScale: val });
								}
							}
						});
						break;
					case 'ELLIPSE':
						Object.defineProperty(newNode, 'arcData', {
							get() {
								return {
									startingAngle: result.arcStart,
									endingAngle: result.arcSweep,
									innerRadius: result.arcRadius
								};
							},
							set(val) {
								updateProperties(this.id, {
									arcStart: val.startingAngle,
									arcSweep: val.endingAngle,
									arcRadius: val.innerRadius
								});
							}
						});
						break;
					case 'REGULAR_POLYGON':
						Object.defineProperty(newNode, 'pointCount', {
							get() {
								return result.count;
							},
							set(val) {
								updateProperties(this.id, { count: val });
							}
						});
						break;
					case 'RECTANGLE':
						Object.defineProperties(newNode, {
							rectangleBottomLeftCornerRadius: {
								get() {
									return result.rectangleBottomLeftCornerRadius;
								},
								set(val) {
									updateProperties(this.id, { rectangleBottomLeftCornerRadius: val });
								}
							},
							rectangleBottomRightCornerRadius: {
								get() {
									return result.rectangleBottomRightCornerRadius;
								},
								set(val) {
									updateProperties(this.id, { rectangleBottomRightCornerRadius: val });
								}
							},
							rectangleTopLeftCornerRadius: {
								get() {
									return result.rectangleTopLeftCornerRadius;
								},
								set(val) {
									updateProperties(this.id, { rectangleTopLeftCornerRadius: val });
								}
							},
							rectangleTopRightCornerRadius: {
								get() {
									return result.rectangleTopRightCornerRadius;
								},
								set(val) {
									updateProperties(this.id, { rectangleTopRightCornerRadius: val });
								}
							},
							rectangleCornerRadiiIndependent: {
								get() {
									return result.rectangleCornerRadiiIndependent;
								},
								set(val) {
									updateProperties(this.id, { rectangleCornerRadiiIndependent: val });
								}
							}
						});
						break;
					case 'TEXT':
						Object.defineProperties(newNode, {
							fontSize: {
								get() {
									return result.fontSize;
								},
								set(val) {
									updateProperties(this.id, { fontSize: val });
								}
							},
							textAlignHorizontal: {
								get() {
									return result.textAlignHorizontal;
								},
								set(val) {
									updateProperties(this.id, { textAlignHorizontal: val });
								}
							},
							textAlignVertical: {
								get() {
									return result.textAlignVertical;
								},
								set(val) {
									updateProperties(this.id, { textAlignVertical: val });
								}
							},
							textDecoration: {
								get() {
									return result.textDecoration;
								},
								set(val) {
									updateProperties(this.id, { textDecoration: val });
								}
							},
							textAutoResize: {
								get() {
									return result.textAutoResize;
								},
								set(val) {
									updateProperties(this.id, { textAutoResize: val });
								}
							},
							fontName: {
								get() {
									return result.fontName;
								},
								set(val) {
									updateProperties(this.id, { fontName: val });
								}
							},
							letterSpacing: {
								get() {
									return result.letterSpacing;
								},
								set(val) {
									updateProperties(this.id, { letterSpacing: val });
								}
							},
							lineHeight: {
								get() {
									return result.lineHeight;
								},
								set(val) {
									updateProperties(this.id, { lineHeight: val });
								}
							},
							paragraphIndent: {
								get() {
									return result.paragraphIndent;
								},
								set(val) {
									updateProperties(this.id, { paragraphIndent: val });
								}
							},
							paragraphSpacing: {
								get() {
									return result.paragraphSpacing;
								},
								set(val) {
									updateProperties(this.id, { paragraphSpacing: val });
								}
							},
							textCase: {
								get() {
									return result.textCase;
								},
								set(val) {
									updateProperties(this.id, { textCase: val });
								}
							}
						});
						if (
							result.inheritTextStyleID &&
							Object.keys(result.inheritTextStyleID)[0] !== '__mixed__' &&
							result.inheritTextStyleID.sessionID !== 4294967295
						) {
							Object.defineProperty(newNode, 'textStyleId', {
								get() {
									return result.inheritTextStyleKey;
								},
								set(val) {
									const styles = Object.values(App._state.library.published.styles)
										.map(org => Object.values(org))
										.flat()
										.map(team => Object.values(team))
										.flat()
										.concat(Object.values(App._state.library.local.styles));
									const style = styles.find(style => style.key === val);
									if (style.canvas_url) {
										var xhr = new XMLHttpRequest();
										xhr.open('GET', style.canvas_url);
										xhr.responseType = 'arraybuffer';
										xhr.onload = () => {
											const localGUID = App.sendMessage(
												'getOrCreateSubscribedStyleNodeId',
												{
													styleKey: style.key,
													fileKey: style.file_key,
													editingFileKey: App._state.editingFileKey,
													versionHash: style.content_hash
												},
												new Uint8Array(xhr.response)
											).args.localGUID.split(':');
											updateProperties(this.id, {
												inheritTextStyleID: { sessionID: localGUID[0], localID: localGUID[1] }
											});
										};
										xhr.send();
									} else {
										const localGUID = style.node_id.split(':');
										updateProperties(this.id, {
											inheritTextStyleID: { sessionID: localGUID[0], localID: localGUID[1] }
										});
									}
								}
							});
						}
				}
				return newNode;
			}
		};
	}
	if (sceneNode.type === 'BOOLEAN_OPERATION') {
		newNode.booleanOperation = sceneNode.booleanOperation;
	}
	if (newNode.children) {
		newNode.getAllDescendents = () => getAllDescendents(newNode);
	}
	if (newNode.type !== 'Canvas')
		newNode.resize = (width, height) => {
			updateProperties(newNode.id, { width: width, height: height });
		};
	newNode.export = async settings => {
		const selectedNodes = Object.keys(App._state.mirror.sceneGraphSelection);
		if (selectedNodes.length !== 1 || (selectedNodes.length === 1 && newNode.id !== selectedNodes[0])) {
			App.sendMessage('clearSelection');
			await until(() => window.App._state.mirror.selectionProperties.visible === null);
			App.sendMessage('addToSelection', { nodeIds: [newNode.id] });
			await until(() => window.App._state.mirror.selectionProperties.visible !== null);
		}
		const nodeWithProperties = await newNode.getProperties();
		const originalExportSettings = nodeWithProperties.exportSettings;
		const newExportSettings = settings
			? [settings]
			: [
					{
						contentsOnly: true,
						imageType: 'PNG'
					}
			  ];
		if (originalExportSettings[0] !== newExportSettings) nodeWithProperties.exportSettings = newExportSettings;
		const buffer = await getBufferForSelectedNode();
		nodeWithProperties.exportSettings = originalExportSettings;
		return buffer;
	};
	return newNode;
};

const getAllDescendents = node => {
	let descendents = [];
	const addToDescendents = node => {
		if (node.children) {
			for (let i = 0; i < node.children.length; i++) {
				const thisNode = node.children[i];
				descendents.push(thisNode);
				addToDescendents(thisNode);
			}
		}
	};
	addToDescendents(node);
	return descendents;
};

const until = conditionFunction => {
	const poll = resolve => {
		if (conditionFunction()) resolve();
		else setTimeout(() => poll(resolve), 10);
	};

	return new Promise(poll);
};

const updateProperties = async (id, properties) => {
	const selectedNodes = Object.keys(App._state.mirror.sceneGraphSelection);
	if (selectedNodes.length !== 1 || (selectedNodes.length === 1 && id !== selectedNodes[0])) {
		App.sendMessage('clearSelection');
		await until(() => window.App._state.mirror.selectionProperties.visible === null);
		App.sendMessage('addToSelection', { nodeIds: [id] });
		await until(() => window.App._state.mirror.selectionProperties.visible !== null);
	}
	App.updateSelectionProperties(properties);
};

const getBufferForSelectedNode = () => {
	return new Promise(resolve => {
		const oldCreateElementFn = document.createElement;
		const dummyElement = document.createElement('a');
		document.createElement = () => {
			const result = dummyElement;
			result.click = () => {
				document.createElement = oldCreateElementFn;
			};
			return result;
		};

		const oldCreateObjectURLFn = URL.createObjectURL;
		URL.createObjectURL = (...args) => {
			const blob = args[0];
			const reader = new FileReader();
			reader.onload = () => {
				resolve({
					blob: blob,
					buffer: reader.result,
					url: oldCreateObjectURLFn(blob)
				});
				URL.createObjectURL = oldCreateObjectURLFn;
			};
			reader.readAsArrayBuffer(args[0]);
		};

		App.triggerAction('export-selected-exportables-direct');
	});
};

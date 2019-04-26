import Vue from 'vue';
import VModal from 'vue-js-modal';
import VueTabs from '../components/vue-tabs/dist/vue-tabs.common';
Vue.config.productionTip = false;
Vue.use(VModal, { dynamic: true, injectModalsContainer: true });
Vue.use(VueTabs);
window.vueModal = new Vue();

export const showUI = (
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
) => {
	title = title ? title : 'My Plugin';
	width = width ? width : 300;
	height = height ? height : 'auto';
	if (height !== 'auto') height = height >= window.innerHeight - 40 ? window.innerHeight : height + 40;
	positionX = positionX ? positionX : 0.5;
	positionY = positionY ? positionY : 0.5;
	vueModal.$modal.hide(title);
	vueModal.$modal.show(
		{
			props: ['tabs'],
			template: tabs
				? `
					<div class='modal js-fullscreen-prevent-event-capture'>
						<div class='modal-header'>
							${title}
							<div class='modal-close-button' @click="$emit('close')"></div>
						</div>
						<vue-tabs>
							<v-tab v-for='tab in tabs' :key='tab' :title="tab">
							</v-tab>
						</vue-tabs>
					</div>
			`
				: `
					<div class='modal js-fullscreen-prevent-event-capture'>
						<div class='modal-header'>
							${title}
							<div class='modal-close-button' @click="$emit('close')"></div>
						</div>
						<div class='modal-content'>
							<div></div>
						</div>
					</div>
			`
		},
		{
			tabs: tabs ? tabs.map((tab, index) => (tab.title ? tab.title : `Tab ${index + 1}`)) : []
		},
		{
			name: title,
			draggable: overlay ? false : '.modal-header',
			width: width >= window.innerWidth ? window.innerWidth : width,
			height: height,
			pivotX: positionX,
			pivotY: positionY,
			maxWidth: window.innerWidth,
			maxHeight: window.innerHeight - 36
		},
		{
			opened: e => {
				if (overlay) {
					const overlay = document.getElementsByClassName('v--modal-overlay')[0];
					overlay.style.setProperty('width', '100%', 'important');
					overlay.style.setProperty('height', '100%', 'important');
				}
				if (tabs) {
					if (padding === false)
						[...document.getElementsByClassName('tab-content')].forEach(element => element.classList.add('no-padding'));
					const tabContents = tabs.map(tab => {
						const index = tabs.indexOf(tab);
						return e.ref.firstChild.children[1].children[1].children[index].firstChild;
					});
					for (const [index, tab] of tabs.entries()) {
						const tabContent = tabContents[index];
						const parentNode = tabContent.parentNode;
						if (tab.html) {
							const UI = document.createElement('div');
							UI.innerHTML = tab.html;
							tabContent.parentNode.replaceChild(UI, tabContent);
						} else if (!tab.reactComponent && !tab.vueComponent) {
							const UI = document.createElement('div');
							UI.innerHTML = `<div></div>`;
							tabContent.parentNode.replaceChild(UI, tabContent);
						}
						if (tab.reactComponent) {
							figmaPlus.ReactDOM.render(figmaPlus.React.createElement(tab.reactComponent), tabContent);
						}
						if (tab.vueComponent) {
							new figmaPlus.Vue({
								el: tabContent,
								render: h => h(tab.vueComponent)
							});
						}
						if (useFigmaStyles === false) parentNode.classList.remove('tab-content');
						if (tab.onMount) tab.onMount(parentNode.firstChild);
					}
				} else {
					if (padding === false)
						[...document.getElementsByClassName('modal-content')].forEach(element =>
							element.classList.add('no-padding')
						);
					const modalContent = e.ref.firstChild.children[1].firstChild;
					const parentNode = modalContent.parentNode;
					if (html) {
						const UI = document.createElement('div');
						UI.innerHTML = html;
						modalContent.parentNode.replaceChild(UI, modalContent);
					} else if (!reactComponent && !vueComponent) {
						const UI = document.createElement('div');
						UI.innerHTML = `<div></div>`;
						modalContent.parentNode.replaceChild(UI, modalContent);
					}
					if (reactComponent) {
						figmaPlus.ReactDOM.render(figmaPlus.React.createElement(reactComponent), modalContent);
					}
					if (vueComponent) {
						new figmaPlus.Vue({
							el: modalContent,
							render: h => h(vueComponent)
						});
					}
					if (useFigmaStyles === false) parentNode.classList.remove('modal-content');
					if (onMount) onMount(parentNode.firstChild);
				}
			}
		}
	);
	if (document.querySelector('div[class*="nav-"]') === null) {
		figmaPlus.onFileUnloaded(() => {
			vueModal.$modal.hide(title);
		});
	} else {
		figmaPlus.onFileBrowserUnloaded(() => {
			vueModal.$modal.hide(title);
		});
	}
};

export const hideUI = title => {
	vueModal.$modal.hide(title);
};

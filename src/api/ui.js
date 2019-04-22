import Vue from 'vue';
import VModal from 'vue-js-modal';
import VueTabs from '../components/vue-tabs/dist/vue-tabs.common';
Vue.config.productionTip = false;
Vue.use(VModal, { dynamic: true, injectModalsContainer: true });
Vue.use(VueTabs);
window.vueModal = new Vue();

export const showUI = (title, callback, width, height, positionX, positionY, overlay, paddings, tabs) => {
	width = width ? width : 300;
	height = height ? height : 'auto';
	if (height !== 'auto') height = height >= window.innerHeight - 40 ? window.innerHeight : height + 40;
	positionX = positionX ? positionX : 0.5;
	positionY = positionY ? positionY : 0.5;
	vueModal.$modal.hide(title);
	vueModal.$modal.show(
		{
			props: tabs ? ['tabs'] : [],
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
			tabs: tabs
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
				if (paddings === false)
					[...document.getElementsByClassName('modal-content')].forEach(element => element.classList.add('no-padding'));
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

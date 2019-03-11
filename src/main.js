import { startMutationObserver } from './mutationObserver';
import { figmaPlus } from './FigmaPlusAPI';
import ManagerModal from './components/ManagerModal.vue';
import PluginsMenu from './components/PluginsMenu.vue';
import shajs from 'sha.js';
import axios from 'axios';

let masterList = JSON.parse(localStorage.getItem('masterList'));

window.figmaPlus = figmaPlus;
const app = document.createElement('div');
app.id = 'pluginManagerApp';
document.body.appendChild(app);
const vue = new figmaPlus.Vue({
	el: '#pluginManagerApp',
	render: h => h(ManagerModal)
});

window.figmaPlus.togglePluginManager = figmaPlus.togglePluginManager = vue.$children[0].toggleModal;

const injectpluginManagerButton = () => {
	const notificationButton = document.querySelector('[data-tooltip-text="Show notifications"]');
	notificationButton.parentElement.style.display = 'flex';
	const pluginManagerButton = document.createElement('div');
	pluginManagerButton.id = 'pluginManagerButton';
	pluginManagerButton.className = vue.$children[0].numberOfUpdates > 0 ? 'top-bar-button has-badge' : 'top-bar-button';
	pluginManagerButton.innerHTML =
		'<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12V10H6V8H8V6H10V8H12V10H10V12H8Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9 18C13.9706 18 18 13.9706 18 9V0H9C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1H17V9Z" fill="white"/></svg>';
	notificationButton.parentNode.insertBefore(pluginManagerButton, notificationButton);
	pluginManagerButton.onclick = figmaPlus.togglePluginManager;
	figmaPlus.addTooltip(pluginManagerButton, 'Plugins', true);
};

figmaPlus.onFileBrowserLoaded(() => {
	vue.$children[0].hide();
	if (!document.getElementById('pluginManagerButton')) injectpluginManagerButton();
});

figmaPlus.onFileBrowserChanged(() => {
	vue.$children[0].hide();
	if (!document.getElementById('pluginManagerButton')) injectpluginManagerButton();
});

figmaPlus.onFileBrowserUnloaded(() => {
	vue.$children[0].hide();
});

figmaPlus.createKeyboardShortcut(
	{ mac: { shift: true, command: true, key: 'P' }, windows: { shift: true, control: true, key: 'P' } },
	figmaPlus.togglePluginManager
);

if (
	document.querySelector('[data-tooltip-text="Show notifications"]') &&
	!document.getElementById('pluginManagerButton')
)
	injectpluginManagerButton();

figmaPlus.onMenuOpened(type => {
	if (type === 'fullscreen-menu-dropdown') {
		const preferences = [...document.querySelectorAll('div[class*="multilevel_dropdown--option"]')].find(
			node => node.children[0].innerText === 'Preferences'
		);
		const pluginsMenuItem = document.createElement('div');
		preferences.parentNode.insertBefore(pluginsMenuItem, preferences);
		new figmaPlus.Vue({
			el: pluginsMenuItem,
			render: h => h(PluginsMenu)
		});
	}
});

const currentTime = new Date().getTime();
const installedPlugins = JSON.parse(localStorage.getItem('installedPlugins'));
if (installedPlugins) {
	installedPlugins.forEach(plugin => {
		if (plugin.css) {
			plugin.css.forEach(css => {
				const styles = document.createElement('link');
				styles.rel = 'stylesheet';
				styles.type = 'text/css';
				styles.href = css + '?_=' + currentTime;
				document.head.appendChild(styles);
			});
		}
		if (plugin.js) {
			const promises = plugin.js.map(js => axios.get(js + '?_=' + currentTime));
			axios.all(promises).then(
				axios.spread((...args) => {
					const scripts = args.map(response => response.data.replace(new RegExp(/\r\n/, 'g'), '\n'));
					const loadedHash = shajs('sha256')
						.update(scripts.join())
						.digest('hex');
					if (loadedHash === masterList.find(pluginEntry => pluginEntry.id === plugin.id).hash) {
						plugin.js.forEach(js => {
							const script = document.createElement('script');
							script.src = js + '?_=' + currentTime;
							document.head.appendChild(script);
						});
					} else {
						console.log(`${plugin.name} did not load because it has an invalid hash`);
						console.log(`masterListHash: ${masterList.find(pluginEntry => pluginEntry.id === plugin.id).hash}`);
						console.log(`loadedHash: ${loadedHash}`);
						window.addEventListener('appLoaded', () => {
							figmaPlus.showToast(`This version of "${plugin.name}" has not been approved and will not run.`, 3);
						});
					}
				})
			);
		}
	});
}

const localServer = JSON.parse(localStorage.getItem('localServer'));
if (localServer) {
	if (localServer.connected) {
		localServer.cssFiles.forEach(css => {
			const styles = document.createElement('link');
			styles.rel = 'stylesheet';
			styles.type = 'text/css';
			styles.href = 'http://localhost:' + localServer.port + '/' + css + '?_=' + currentTime;
			document.head.appendChild(styles);
		});
		const promises = localServer.jsFiles.map(js =>
			axios.get(`http://localhost:${localServer.port}/${js}?_=${currentTime}`)
		);
		axios.all(promises).then(
			axios.spread((...args) => {
				const scripts = args.map(response => response.data.replace(new RegExp(/\r\n/, 'g'), '\n'));
				const loadedHash = shajs('sha256')
					.update(scripts.join())
					.digest('hex');
				localServer.hash = loadedHash;
				localStorage.setItem('localServer', JSON.stringify(localServer));
				localServer.jsFiles.forEach(js => {
					const script = document.createElement('script');
					script.src = 'http://localhost:' + localServer.port + '/' + js + '?_=' + currentTime;
					document.head.appendChild(script);
				});
			})
		);
	}
}

const pluginCodeTesterCode = localStorage.getItem('pluginCodeTesterCode');
if (pluginCodeTesterCode !== null) {
	const script = document.createElement('script');
	script.innerHTML = pluginCodeTesterCode;
	document.head.appendChild(script);
}

startMutationObserver();

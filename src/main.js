import { startMutationObserver } from './mutationObserver';
import { figmaPlus } from './api/figmaPlus';
import Vue from 'vue';
import ManagerModal from './components/ManagerModal.vue';
import OnboardingModal from './components/OnboardingModal.vue';
import { firestorePlugin } from 'vuefire';

Vue.use(firestorePlugin);

window.figmaPlus = figmaPlus;
const app = document.createElement('div');
app.id = 'pluginManagerApp';
document.body.appendChild(app);
new Vue({
	el: '#pluginManagerApp',
	render: h => h(ManagerModal)
});

(async () => {
	const masterList = await fetch('https://figma-plus.github.io/plugin-directory/plugins.json', {
		cache: 'no-cache'
	}).then(response => response.json());
	let installedPlugins = JSON.parse(localStorage.getItem('figmaPlus-installedPlugins'));
	let updatedPlugins = JSON.parse(localStorage.getItem('figmaPlus-updatedPlugins')) || [];
	if (installedPlugins) {
		(async () => {
			for (let [index, installedPlugin] of installedPlugins.entries()) {
				const plugin = masterList.find(entry => entry.id === installedPlugin.id);
				const latestVersion = plugin.approvedVersion;
				const latestCommit = plugin.approvedCommit;
				let userRepo = plugin.github.replace('https://github.com/', '');
				userRepo = userRepo[userRepo.length - 1] === '/' ? userRepo.slice(0, -1) : userRepo;
				let manifest =
					installedPlugin.version === latestVersion
						? installedPlugin
						: await fetch(`https://cdn.jsdelivr.net/gh/${installedPlugin.userRepo}@${latestCommit}/manifest.json`).then(
								response => response.json()
						  );
				if (manifest.css) {
					for (const css of manifest.css) {
						const styles = document.createElement('link');
						styles.className = installedPlugin.id;
						styles.rel = 'stylesheet';
						styles.type = 'text/css';
						styles.href = `https://cdn.jsdelivr.net/gh/${installedPlugin.userRepo}@${latestCommit}/${css}`;
						document.head.appendChild(styles);
					}
				}
				if (manifest.js) {
					for (const js of manifest.js) {
						const response = await fetch(
							`https://cdn.jsdelivr.net/gh/${installedPlugin.userRepo}@${latestCommit}/${js}`
						);
						const code = await response.text();
						const script = document.createElement('script');
						script.className = installedPlugin.id;
						const inlineScript = document.createTextNode(`(function () {${code}}())`);
						script.appendChild(inlineScript);
						document.head.appendChild(script);
					}
				}
				if (installedPlugin.version !== latestVersion) {
					window.figmaPlus.onAppLoaded(() => {
						figmaPlus.showToast({
							message: `${installedPlugin.name} plugin has been updated!`,
							timeoutInSeconds: 10,
							buttonText: "What's new",
							buttonAction: window.figmaPlus.togglePluginManager
						});
					});
					manifest.version = latestVersion;
					manifest.commit = latestCommit;
					manifest.userRepo = userRepo;
					installedPlugins[index] = manifest;
					localStorage.setItem('figmaPlus-installedPlugins', JSON.stringify(installedPlugins));
					if (!updatedPlugins.find(plugin => plugin.id === manifest.id)) {
						updatedPlugins.push(manifest);
						localStorage.setItem('figmaPlus-updatedPlugins', JSON.stringify(updatedPlugins));
					}
				}
			}
		})();
	} else localStorage.setItem('figmaPlus-installedPlugins', '[]');

	const oldMasterList = JSON.parse(localStorage.getItem('figmaPlus-masterList'));
	let plugins = JSON.parse(localStorage.getItem('figmaPlus-plugins'));
	if (!plugins || !oldMasterList || JSON.stringify(oldMasterList) !== JSON.stringify(masterList)) {
		plugins = [];
		const getManifest = async pluginEntry => {
			let userRepo = pluginEntry.github.replace('https://github.com/', '');
			userRepo = userRepo[userRepo.length - 1] === '/' ? userRepo.slice(0, -1) : userRepo;
			const cdnLink = `https://cdn.jsdelivr.net/gh/${userRepo}@${pluginEntry.approvedCommit}/`;
			const manifest = await fetch(cdnLink + 'manifest.json').then(response => response.json());
			const releases = await fetch(`https://api.github.com/repos/${userRepo}/releases`).then(response =>
				response.json()
			);
			manifest.publishDate = releases[releases.length - 1].published_at;
			manifest.updates = releases.map(release => {
				return {
					version: release.tag_name,
					date: release.published_at,
					notes: release.body
				};
			});
			manifest.version = pluginEntry.approvedVersion;
			manifest.commit = pluginEntry.approvedCommit;
			manifest.github = pluginEntry.github;
			manifest.userRepo = userRepo;
			if (manifest.images)
				manifest.images = manifest.images.map(image => {
					if (image.startsWith('https://') || image.startsWith('http://')) return image;
					image = image[0] === '/' ? image.substring(1) : image;
					return `https://cdn.jsdelivr.net/gh/${userRepo}@${pluginEntry.approvedCommit}/${image}`;
				});
			plugins.push(manifest);
			return manifest;
		};
		const manifests = masterList.map(pluginEntry => getManifest(pluginEntry));
		Promise.all(manifests).then(() => {
			if (oldMasterList && masterList.length > oldMasterList.length) {
				const newPlugins = masterList.filter(entry => !oldMasterList.find(oldEntry => oldEntry.id === entry.id));
				localStorage.setItem('figmaPlus-newPlugins', JSON.stringify(newPlugins));
				window.figmaPlus.onAppLoaded(() => {
					window.figmaPlus.showToast({
						message: 'A new plugin is available!',
						timeoutInSeconds: 10,
						buttonText: 'View',
						buttonAction: window.figmaPlus.togglePluginManager
					});
				});
			}
			localStorage.setItem('figmaPlus-plugins', JSON.stringify(plugins));

			localStorage.setItem('figmaPlus-masterList', JSON.stringify(masterList));
		});
	}
})();

const localServer = JSON.parse(localStorage.getItem('figmaPlus-localServer'));
if (localServer && window.pluginDevMode) {
	if (localServer.connected) {
		for (const css of localServer.cssFiles) {
			const styles = document.createElement('link');
			styles.className = 'localPlugin';
			styles.rel = 'stylesheet';
			styles.type = 'text/css';
			styles.href = 'http://localhost:' + localServer.port + '/' + css + '?_=' + new Date().getTime();
			document.head.appendChild(styles);
		}
		for (const js of localServer.jsFiles) {
			fetch(
				figmaPlus.isDesktop
					? 'http://localhost:' + localServer.port + '/' + js + '?_=' + new Date().getTime()
					: 'http://localhost:' + localServer.port + '/' + js,
				{ cache: 'no-cache' }
			)
				.then(response => response.text())
				.then(code => {
					const script = document.createElement('script');
					script.className = 'localPlugin';
					const inlineScript = document.createTextNode(`(function () {${code}}())`);
					script.appendChild(inlineScript);
					document.head.appendChild(script);
				})
				.catch(error => {
					console.log(error);
				});
		}
	}
}

if (!localStorage.getItem('figmaPlus-onboarded')) {
	figmaPlus.onFileBrowserLoaded(() => {
		figmaPlus.showUI({
			title: 'Welcome to Figma Plus',
			vueComponent: OnboardingModal,
			width: 400,
			height: 425,
			overlay: true,
			padding: false
		});
	});
}

startMutationObserver();

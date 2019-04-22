import { startMutationObserver } from './mutationObserver';
import { figmaPlus } from './api/figmaPlus';
import ManagerModal from './components/ManagerModal.vue';
import OnboardingModal from './components/OnboardingModal.vue';
import { firestorePlugin } from 'vuefire';

figmaPlus.Vue.use(firestorePlugin);

window.figmaPlus = figmaPlus;
const app = document.createElement('div');
app.id = 'pluginManagerApp';
document.body.appendChild(app);
new figmaPlus.Vue({
	el: '#pluginManagerApp',
	render: h => h(ManagerModal)
});

const installedPlugins = JSON.parse(localStorage.getItem('figmaPlus-installedPlugins'));
if (installedPlugins) {
	const runInstalledPlugins = async () => {
		const masterList = JSON.parse(localStorage.getItem('figmaPlus-masterList'));
		for (let installedPlugin of installedPlugins) {
			const plugin = masterList.find(entry => entry.id === installedPlugin.id);
			const latestVersion = plugin.approvedVersion;
			const latestCommit = plugin.approvedCommit;
			let manifest =
				installedPlugin.version === latestVersion
					? installedPlugin
					: await fetch(`https://cdn.jsdelivr.net/gh/${installedPlugin.userRepo}@${latestCommit}/manifest.json`).then(
							response => response.json()
					  );
			if (manifest.css) {
				manifest.css.forEach(css => {
					const styles = document.createElement('link');
					styles.rel = 'stylesheet';
					styles.type = 'text/css';
					styles.href = `https://cdn.jsdelivr.net/gh/${installedPlugin.userRepo}@${latestCommit}/${css}`;
					document.head.appendChild(styles);
				});
			}
			if (manifest.js) {
				manifest.js.forEach(js => {
					fetch(`https://cdn.jsdelivr.net/gh/${installedPlugin.userRepo}@${latestCommit}/${js}`)
						.then(response => response.text())
						.then(code => {
							const script = document.createElement('script');
							const inlineScript = document.createTextNode(`(function () {${code}}())`);
							script.appendChild(inlineScript);
							document.head.appendChild(script);
						});
				});
			}
		}
	};
	runInstalledPlugins();
}

const localServer = JSON.parse(localStorage.getItem('figmaPlus-localServer'));
if (localServer && window.pluginDevMode) {
	if (localServer.connected) {
		localServer.cssFiles.forEach(css => {
			const styles = document.createElement('link');
			styles.className = 'localPlugin';
			styles.rel = 'stylesheet';
			styles.type = 'text/css';
			styles.href = 'http://localhost:' + localServer.port + '/' + css + '?_=' + new Date().getTime();
			document.head.appendChild(styles);
		});
		localServer.jsFiles.forEach(js => {
			fetch('http://localhost:' + localServer.port + '/' + js, { cache: 'no-cache' })
				.then(response => response.text())
				.then(code => {
					const script = document.createElement('script');
					script.className = 'localPlugin';
					const inlineScript = document.createTextNode(`(function () {${code}}())`);
					script.appendChild(inlineScript);
					document.head.appendChild(script);
				});
		});
	}
}

const scriptRunnerCode = localStorage.getItem('figmaPlus-scriptRunnerCode');
if (scriptRunnerCode && window.pluginDevMode) {
	const script = document.createElement('script');
	script.innerText = `(function () {${scriptRunnerCode}}())`;
	document.head.appendChild(script);
}

if (!localStorage.getItem('figmaPlus-onboarded'))
	figmaPlus.showUI({
		title: 'Welcome to Figma Plus',
		callback: modalElement => {
			new figmaPlus.Vue({
				el: modalElement,
				render: h => h(OnboardingModal)
			});
		},
		width: 400,
		height: 425,
		overlay: true,
		paddings: false
	});

startMutationObserver();

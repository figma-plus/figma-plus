export function startMutationObserver() {
	let appLoaded = false;
	let fileBrowserLoaded = false;
	let fileLoaded = false;
	let modalOpened = false;
	let menuOpened = false;
	let pluginOptionsFound = false;
	let focusTargetFound = false;
	let numberOfSubmenus = 0;
	new MutationObserver(mutations => {
		window.dispatchEvent(new CustomEvent('domChanged', { detail: mutations }));

		if (window.App._state !== undefined && !appLoaded) {
			appLoaded = true;
			window.App.sendMessage = window.App.DEPRECATED_sendMessage;
			window.dispatchEvent(new CustomEvent('appLoaded'));
		}

		if (document.querySelector('div[class*="sidebar--navDefault-"]') && !fileBrowserLoaded) {
			fileBrowserLoaded = true;
			window.dispatchEvent(new CustomEvent('fileBrowserLoaded'));
		}

		if (
			!document.getElementById('pluginManagerButton') &&
			document.querySelector('div[class*="sidebar--navDefault-"]') &&
			fileBrowserLoaded
		) {
			window.dispatchEvent(new CustomEvent('fileBrowserChanged'));
		}

		if (!document.querySelector('div[class*="sidebar--navDefault-"]') && fileBrowserLoaded) {
			fileBrowserLoaded = false;
			window.dispatchEvent(new CustomEvent('fileBrowserUnloaded'));
		}

		if (window.App._fullscreenIsReady && window.App._state.selectedView.fullscreen && !fileLoaded) {
			fileLoaded = true;
			window.dispatchEvent(new CustomEvent('fileLoaded'));
		}

		if (window.App._fullscreenIsReady && window.App._state.selectedView.fullscreen === undefined && fileLoaded) {
			fileLoaded = false;
			window.dispatchEvent(new CustomEvent('fileUnloaded'));
		}

		if (document.querySelector('div[class*="modal--header--"]') && !modalOpened) {
			modalOpened = true;
			window.dispatchEvent(
				new CustomEvent('modalOpened', {
					detail: document.querySelector('div[class*="modal--header"]').innerText.trim()
				})
			);
		}

		if (!document.querySelector('div[class*="modal--header--"]') && modalOpened) {
			modalOpened = false;
			window.dispatchEvent(new CustomEvent('modalClosed'));
		}

		if (window.App._state.dropdownShown && !menuOpened) {
			menuOpened = true;
			window.dispatchEvent(
				new CustomEvent('menuOpened', {
					detail: {
						type: window.App._state.dropdownShown.type,
						hasMoreOptions:
							[...document.querySelectorAll('div[class*="multilevel_dropdown--name"]')].find(
								node => node.innerText === 'More'
							) !== undefined
					}
				})
			);
		}

		if (
			window.App._state.dropdownShown &&
			menuOpened &&
			document.querySelector('div[class*="multilevel_dropdown--menu"]') &&
			document.querySelectorAll('div[class*="multilevel_dropdown--menu"]').length > numberOfSubmenus
		) {
			window.dispatchEvent(
				new CustomEvent('submenuOpened', {
					detail: {
						type: window.App._state.dropdownShown.type,
						highlightedOption: document.querySelectorAll('div[class*="multilevel_dropdown--optionActive"]')[
							document.querySelectorAll('div[class*="multilevel_dropdown--menu"]').length - 1
						].textContent
					}
				})
			);
		}
		numberOfSubmenus = document.querySelectorAll('div[class*="multilevel_dropdown--menu"]').length;

		if (!window.App._state.dropdownShown && menuOpened) {
			menuOpened = false;
			pluginOptionsFound = false;
			[...document.getElementsByClassName('plugin-dropdown-submenu')].forEach(submenu => {
				submenu.parentNode.removeChild(submenu);
			});
			window.dispatchEvent(new CustomEvent('menuClosed'));
		}

		if (document.getElementsByClassName('focus-target').length > 0 && !focusTargetFound) {
			focusTargetFound = true;
			window.dispatchEvent(
				new CustomEvent('focusTargetFound', { detail: document.getElementsByClassName('focus-target')[0] })
			);
		}

		if (document.getElementById('pluginOptions') && !pluginOptionsFound) {
			pluginOptionsFound = true;
			window.dispatchEvent(new CustomEvent('pluginOptionsFound'));
		}
	}).observe(document.getElementById('react-page'), { childList: true, subtree: true });
}

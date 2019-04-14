export const createKeyboardShortcut = (shortcut, triggerFunction, condition) => {
	if (document.getElementsByClassName('focus-target').length > 0) {
		const focusTarget = document.getElementsByClassName('focus-target')[0];
		addKeyboardShortcutInFile(focusTarget, shortcut, triggerFunction, condition);
	} else {
		window.addEventListener('focusTargetFound', event => {
			const focusTarget = event.detail;
			addKeyboardShortcutInFile(focusTarget, shortcut, triggerFunction, condition);
		});
	}
};

const addKeyboardShortcutInFile = (focusTarget, shortcut, triggerFunction, condition) => {
	if (shortcut.mac && shortcut.windows) {
		focusTarget.addEventListener('keydown', e => {
			if (navigator.platform === 'MacIntel') {
				if (
					e.metaKey !== !shortcut.mac.command &&
					e.shiftKey !== !shortcut.mac.shift &&
					e.ctrlKey !== !shortcut.mac.control &&
					e.altKey !== !shortcut.mac.option &&
					e.key.toLowerCase() === shortcut.mac.key.toLowerCase() &&
					((typeof condition === 'function' && condition()) || typeof condition !== 'function')
				) {
					e.preventDefault();
					triggerFunction();
				}
			}
			if (navigator.platform === 'Win32' || navigator.platform === 'Win64') {
				if (
					e.shiftKey !== !shortcut.windows.shift &&
					e.ctrlKey !== !shortcut.windows.control &&
					e.altKey !== !shortcut.windows.alt &&
					e.key.toLowerCase() === shortcut.windows.key.toLowerCase() &&
					((typeof condition === 'function' && condition()) || typeof condition !== 'function')
				) {
					e.preventDefault();
					triggerFunction();
				}
			}
		});
	}
};

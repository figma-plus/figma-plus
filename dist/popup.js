document.getElementById('devMode').onchange = e => {
	chrome.storage.local.set(
		{
			devMode: e.target.checked
		},
		() => {
			console.log(e.target.checked);
		}
	);
};

chrome.storage.local.get(['devMode'], function(result) {
	if (result.devMode) {
		document.getElementById('devMode').checked = result.devMode;
	}
});

var restClientURL = "chrome-extension://" + location.host + "/templates/index.html";
function selectOrOpenRestClient() {

	chrome.tabs.getAllInWindow(undefined, function(tabs) {
		for ( var i = 0, tab; tab = tabs[i]; i++) {
			if (tab.url && tab.url == restClientURL) {
				chrome.tabs.update(tab.id, {
					selected : true
				});
				return;
			}
		}
		chrome.tabs.create({
			url : restClientURL
		});
	});
}
chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.create({
		url : restClientURL
	});
	// selectOrOpenRestClient();
});

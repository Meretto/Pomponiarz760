window.pasty = new Array(0);

chrome.runtime.onStartup.addListener(function() {
  const url = chrome.runtime.getURL("data/messages.json");

  fetch(url)
    .then(response => response.json())
    .then(json => window.pasty = json.messages);
});

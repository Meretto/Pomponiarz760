chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(
    tab.id, 
    {code: 'var chatInput = document.querySelector("div.chat-input__textarea > textarea"); console.log(chatInput); var chatSend = document.querySelector("button[data-a-target=chat-send-button]"); console.log(chatSend); chatInput.value = "niQ waiting room ResidentSleeper niQ waiting room ResidentSleeper niQ waiting room ResidentSleeper niQ waiting room ResidentSleeper niQ waiting room ResidentSleeper niQ waiting room ResidentSleeper niQ waiting room ResidentSleeper niQ waiting room ResidentSleeper niQ waiting room ResidentSleeper"; chatInput.dispatchEvent(new Event("input", { bubbles: true })); chatSend.click();'});
});
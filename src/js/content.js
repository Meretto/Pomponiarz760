chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    sendMessage(request.message)
})

function sendMessage(message) {
    var chatInput = document.querySelector("div.chat-input__textarea > textarea");
    var chatSend = document.querySelector(
      "button[data-a-target=chat-send-button]"
    );
  
    chatInput.value = message;
    chatInput.dispatchEvent(new Event("input", { bubbles: true }));
    chatSend.click();
  }
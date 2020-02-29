document.addEventListener(
  "DOMContentLoaded",
  function() {
    const bg = chrome.extension.getBackgroundPage()
    document.querySelector("button").addEventListener("click", onclick, false);

    function onclick() {  
        const randomPasta = bg.pasty[Math.floor(Math.random() * bg.pasty.length)];
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {message: randomPasta});  
        });
    }
  },
  false
);

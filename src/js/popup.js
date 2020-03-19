document.addEventListener(
  "DOMContentLoaded",
  function() {
    const bg = chrome.extension.getBackgroundPage()
    document.querySelector("button").addEventListener("click", onclick, false);

    function onclick() {
        const randomPasta = bg.pasty[getRandomInt(0, bg.pasty.length - 1)];
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {message: randomPasta});
        });
    }
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  },
  false
);

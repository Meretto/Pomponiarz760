window.pasty = new Array(0)

chrome.runtime.onInstalled.addListener(function() { 
    window.pasty.unshift("Bla bla")
    window.pasty.unshift("XD")
    window.pasty.unshift("WTF")
    window.pasty.unshift("KEKW")
});
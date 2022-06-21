//read the current tab
chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url.includes("youtube.com/watch")) {
        const queryPrameters = tab.url.split("?")[1];
        // above line will help to grab {v=0n809nd4Zu4} from {https://www.youtube.com/watch?v=0n809nd4Zu4}
        const urlParameters = new URLSearchParams(queryParameters);
        console.log(urlParameters);
        //
        //sending message to content script that new video loaded and this is the new video id
        chrome.tabs.sendMessage(tabId, {
            type: "NEW",
            videoId: urlParameters.get("v"), // it will give after v=
        });
    }

})
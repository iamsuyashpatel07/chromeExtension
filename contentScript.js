(() => {
    let youtubeLeftControls, youtubePlayer;
    let currentVideo = "";
    //accessing Youtube player,accessing control
    chrome.runtime.onMessage.addListner((obj, sender, response) => {
        //destructuring the value
        const { type, value, viseoId } = obj;
        if (type === " NEW") {
            currentVideo = viseoId;
            newVideoLoaded();

        }

    })
})();
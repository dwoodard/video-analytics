

class VideoAnalytics {

    videos = null;
    constructor(selector) {
        this.videos = document.querySelectorAll(selector);
        console.log('videos', this.videos);

        let events = [
            "emptied",
            "loadstart",
            "loadedmetadata",
            "loadeddata",
            "canplay",
            "canplaythrough",
            "playing",
            "ended",
            "waiting",
            "ended",
            "durationchange",
            "timeupdate",
            "play",
            "pause",
            "ratechange",
            "volumechange"
        ];


        this.eventHandlers = {
            "emptied": () => { },
            "loadstart": () => { },
            "loadedmetadata": () => { },
            "loadeddata": () => { },
            "canplay": () => { },
            "canplaythrough": () => { },
            "playing": () => { },
            "ended": () => { },
            "waiting": () => { },
            "ended": () => { },
            "durationchange": () => { },
            "timeupdate": () => { },
            "play": () => { },
            "pause": () => { },
            "ratechange": () => { },
            "volumechange": () => { }
        };

        // add event listeners to all videos
        this.videos.forEach(video => {
            events.forEach(event => {
                console.log("event", event);
                video.addEventListener(event, this.eventHandlers[event]);
            });
        }
        );






    }


    myMethod = () => {
        console.log("Library method fired");
    };
    videos = () => {
        return this.videos;
    }
}

export default VideoAnalytics;

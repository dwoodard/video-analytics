import VideoAnalytics from "../lib";



console.log();


//add a video to the body to test the library
document.querySelector("body").innerHTML += `<video id="video" controls src="${__dirname}/video.mp4"></video>`;
window.videoAnalyticsInstance = new VideoAnalytics('video');

console.log("videoAnalyticsInstance", videoAnalyticsInstance);

videoAnalyticsInstance.myMethod();
document.addEventListener("DOMContentLoaded", function() {
  const videos = [
    "./assets/backgrounds/background1.mp4",
    "./assets/backgrounds/background2.mp4",
    "./assets/backgrounds/background3.mp4",
    "./assets/backgrounds/background4.mp4"
  ];

  let shuffledVideos = shuffleArray(videos);
  let currentVideoIndex = 0;

  const videoElement = document.querySelector(".background-video");

  function playNextVideo() {
    if (currentVideoIndex >= videos.length) {
      shuffledVideos = shuffleArray(videos);
      currentVideoIndex = 0;
    }
    
    const nextVideo = shuffledVideos[currentVideoIndex];
    videoElement.src = nextVideo;
    videoElement.play();
    currentVideoIndex++;
  }

  videoElement.addEventListener("ended", playNextVideo);

  playNextVideo();
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
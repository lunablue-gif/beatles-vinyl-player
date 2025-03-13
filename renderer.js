const audio = document.getElementById("audio");
const cover = document.getElementById("cover");

const songs = [
    { src: "songs/song1.mp3", cover: "images/song1.png" },
    { src: "songs/song2.mp3", cover: "images/song2.png" },
    { src: "songs/song3.mp3", cover: "images/song3.jpg" },
    { src: "songs/song4.mp3", cover: "images/song4.png" },
    { src: "songs/song5.mp3", cover: "images/song5.png" }
]; // Ensure file paths are correct
document.addEventListener("DOMContentLoaded", () => {
    const cover = document.getElementById("cover");
    const background = document.createElement("img");
    
    background.src = "images/background.png";
    background.alt = "Vinyl Background";
    background.classList.add("background");

    const vinylContainer = document.querySelector(".vinyl-container");
    vinylContainer.insertBefore(background, cover);
});

let currentSongIndex = 0;

// Function to Play/Pause Music
function togglePlay() {
    if (audio.paused) {
        audio.play();
        cover.classList.add("spinning");
    } else {
        audio.pause();
        cover.classList.remove("spinning");
    }
}

// Function to Play Previous Song
function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    changeSong();
}

// Function to Play Next Song
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    changeSong();
}

// Function to Change Song and Cover
function changeSong() {
    audio.src = songs[currentSongIndex].src;
    cover.src = songs[currentSongIndex].cover;
    audio.play();
    cover.classList.add("spinning");
}

// Stop spinning when song is paused or ends
audio.addEventListener("pause", () => cover.classList.remove("spinning"));
audio.addEventListener("ended", () => cover.classList.remove("spinning"));

// Load the first song and cover on startup
audio.src = songs[currentSongIndex].src;
cover.src = songs[currentSongIndex].cover;

// Initialize the YouTube player
let player;
let playlistId = 'PLyI11B7FYus0A4mRJAuL52v9oGdOg-Zsb';  // Your Playlist ID

// This function is automatically called when the YouTube iframe API is ready
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '450',
        width: '800',
        videoId: '', // Start with an empty video
        playerVars: {
            'playlist': playlistId, // Your playlist ID here
            'autoplay': 1, // Automatically play the first video
            'loop': 1, // Loop the playlist
            'rel': 0, // Don't show related videos at the end
            'showinfo': 0 // Hide video info
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// This function will be called when the player is ready to use
function onPlayerReady(event) {
    event.target.playVideo(); // Play the video when ready
}

// This function listens for changes in the player's state
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        console.log("Video is playing...");
    }
}

// Handle video thumbnail click to load the specific video
const videos = document.querySelectorAll('.video');
videos.forEach(video => {
    video.addEventListener('click', () => {
        const videoId = video.getAttribute('data-video-id');
        player.loadVideoById(videoId); // Load the video by ID when clicked
    });
});

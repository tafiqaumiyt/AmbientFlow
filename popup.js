document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById("playButton");
    const stopButton = document.getElementById("stopButton");

    // Check if buttons exist
    if (playButton && stopButton) {
        let audio = null;

        playButton.addEventListener("click", () => {
            if (!audio) {
                audio = new Audio(chrome.runtime.getURL("assets/focus_beats.mp3")); // Default track
                audio.play().catch(error => {
                    console.error("Error playing audio:", error);
                });
            } else {
                audio.play().catch(error => {
                    console.error("Error playing audio:", error);
                });
            }
        });

        stopButton.addEventListener("click", () => {
            if (audio) {
                audio.pause();
                audio.currentTime = 0; // Reset playback
                audio = null;
            }
        });
    } else {
        console.error("Play or Stop button not found!");
    }
});

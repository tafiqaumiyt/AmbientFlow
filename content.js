async function getPageText() {
    return document.body.innerText.slice(0, 2000); // Limit text to 2000 characters for analysis
}

async function detectPageTheme() {
    const text = await getPageText();

    // Simple logic for detecting webpage theme based on keywords.
    if (text.includes("code") || text.includes("programming")) {
        return "lo_fi_beats.mp3";
    } else if (text.includes("nature") || text.includes("forest")) {
        return "nature_sounds.mp3";
    } else if (text.includes("buy") || text.includes("shopping")) {
        return "shopping_ambient.mp3";
    } else if (text.includes("read") || text.includes("article")) {
        return "calm_piano.mp3";
    } else {
        return "focus_beats.mp3"; // Default track
    }
}

// When content is detected, send a message to the background to play the correct track
detectPageTheme().then(track => {
    chrome.runtime.sendMessage({ action: "play_sound", track });
});

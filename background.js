chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "play_sound") {
        // Check if a tab is active and content script is ready
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length > 0) {
                const tab = tabs[0];
                chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    func: playAudio,
                    args: [message.track]
                });
            } else {
                console.error('No active tab found!');
            }
        });
    }
});

function playAudio(track) {
    const audio = new Audio(chrome.runtime.getURL(`assets/${track}`));
    audio.play().catch(error => {
        console.error('Failed to play audio:', error);
    });
}

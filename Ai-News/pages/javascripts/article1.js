// article1.js

var isReading = false; // Variable to track if speech synthesis is in progress

function readArticle() {
    var articleContent = document.querySelector('article').innerText;

    if (!isReading) {
        // If not currently reading, start speech synthesis
        var speech = new SpeechSynthesisUtterance();
        speech.text = articleContent;

        speechSynthesis.speak(speech);

        isReading = true; // Update reading status
        document.querySelector('button').textContent = 'Pause'; // Change button text to 'Pause'
    } else {
        // If currently reading, pause speech synthesis
        speechSynthesis.pause();
        isReading = false; // Update reading status
        document.querySelector('button').textContent = 'Play'; // Change button text to 'Play'
    };
};

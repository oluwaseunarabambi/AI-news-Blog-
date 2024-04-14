// readArticle.js

function readArticle() {
    // Fetching the article content
    var articleContent = document.querySelector('article').innerText;
    
    // Creating a new SpeechSynthesisUtterance instance
    var speech = new SpeechSynthesisUtterance();
    speech.text = articleContent;
    
    // Using the default voice for speech synthesis
    speechSynthesis.speak(speech);
}

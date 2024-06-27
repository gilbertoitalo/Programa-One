

const diagnostic = document.querySelector("body");
const bg = document.querySelector("html");
const hints = document.querySelector(".hints");

let colorHTML = "";

diagnostic.onclick = () => {
    recognition.start();
    console.log("Ready to receive a color command.");
  };



recognition.onstart = function() {
    console.log('Voice recognition started. Try speaking into the microphone.');
};

recognition.onresult = function(event) {
    console.log('Voice recognition result received', event.results);
    let transcript = event.results[0][0].transcript;
    input1.value = transcript;
    console.log('Transcribed text: ' , transcript);
};

const recognition = new SpeechRecognition();
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList =
  window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;
  recognition.continuous = false;
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SpeechRecognition = ({ speechCommand }) => {
  const navigate = useNavigate();

  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);

  const handleButtonClick = () => {
    if (!isListening) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.lang = "en-US";

      recognition.onresult = (event) => {
        const currentTranscript = event.results[0][0].transcript.toLowerCase();
        setTranscript(currentTranscript);
        handleSpeechCommand(currentTranscript); // Invoke the function to handle speech commands
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
      setIsListening(true);
    } else {
      window.webkitSpeechRecognition.stop();
      setIsListening(false);
    }
  };

  const handleSpeechCommand = (spokenText) => {
    speechCommand(spokenText);
  };

  return (
    <div>
      <h1>Speech Recognition</h1>
      <button onClick={handleButtonClick}>
        {isListening ? "Stop" : "Start"} Listening
      </button>
      <p>{transcript}</p>
    </div>
  );
};

export default SpeechRecognition;

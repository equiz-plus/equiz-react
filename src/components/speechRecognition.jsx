/* eslint-disable react/prop-types */
import { useState } from "react";

const SpeechRecognition = ({ speechCommand, answerHandlerSpeech }) => {
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
      recognition.stop();
      setIsListening(false);
    }
  };

  const handleSpeechCommand = (spokenText) => {
    speechCommand(spokenText);
    answerHandlerSpeech(spokenText);
  };

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h6>Speech-to-Text</h6>{" "}
        <button className="mx-2 btn btn-success" onClick={handleButtonClick}>
          {isListening ? "Listening" : "Start Listening"}
        </button>
      </div>
      {/* <div style={{ fontSize: "15px" }}>
        Press the speaker icon or key &quot;T&quot; on your keyboard to enable
        Text-to-Speech
      </div> */}
      <div>Result: {transcript}</div>
    </div>
  );
};

export default SpeechRecognition;

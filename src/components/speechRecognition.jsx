import React, { useState, useEffect } from "react";

const SpeechRecognition = () => {
  const [transcript, setTranscript] = useState("");

  useEffect(() => {
    const recognition = new window.webkitSpeechRecognition(); // Create a speech recognition object
    recognition.lang = "en-US"; // Set the language for speech recognition

    recognition.onresult = (event) => {
      const currentTranscript = event.results[0][0].transcript;
      setTranscript(currentTranscript); // Update the transcript state with the recognized speech
    };

    recognition.start(); // Start speech recognition

    return () => {
      recognition.stop(); // Clean up by stopping speech recognition when the component unmounts
    };
  }, []);

  return (
    <div>
      <h1>Speech Recognition</h1>
      <p>{transcript}</p>
    </div>
  );
};

export default SpeechRecognition;

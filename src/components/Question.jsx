import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
export default function Question({ question, answerHandler, answers }) {
  const [isPaused, setIsPaused] = useState(false);
  const [utteranceQuestion, setUtteranceQuestion] = useState(null);
  const [utteranceAnswers, setUtteranceAnswers] = useState(null);
  const [text, setText] = useState(null);
  const [textAnswers, setTextAnswers] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Get a specific voice by its name or language code
  const getVoice = (voiceName) => {
    const voices = window.speechSynthesis.getVoices();
    return voices.find((voice) => voice.name === voiceName);
  };

  useEffect(() => {
    setText(question?.Question.question);
    setTextAnswers(question?.Question.Answers.map((el) => el.answer));
  }, [question]);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);
    const v = textAnswers?.map((answer) => {
      const utterance = new SpeechSynthesisUtterance(answer);
      // Modify voice and speed for each answer utterance
      const answerVoice = getVoice("Microsoft Zira - English (United States)");
      utterance.voice = answerVoice;
      utterance.rate = 0.8; // default is 1.0
      return utterance;
    });

    // Modify voice and speed for the question utterance
    const questionVoice = getVoice("Microsoft Zira - English (United States)");
    u.voice = questionVoice;
    u.rate = 0.8; // default is 1.0

    setUtteranceQuestion(u);
    setUtteranceAnswers(v);

    return () => {
      if (isPlaying) {
        synth.cancel();
        setIsPlaying(false);
      }
    };
  }, [text, textAnswers, isPlaying]);

  const handlePlay = () => {
    setIsPlaying(true);
    const synth = window.speechSynthesis;

    if (utteranceQuestion) {
      if (isPaused) {
        synth.resume();
      }

      synth.speak(utteranceQuestion);

      utteranceQuestion.onend = () => {
        speakAnswers();
      };

      setIsPaused(false);
    }
  };

  const speakAnswers = () => {
    const synth = window.speechSynthesis;

    if (utteranceAnswers) {
      for (const utterAnswer of utteranceAnswers) {
        synth.speak(utterAnswer);
      }
    }
  };

  // const handlePause = () => {
  //   const synth = window.speechSynthesis;

  //   synth.pause();

  //   setIsPaused(true);
  // };

  // const handleStop = () => {
  //   const synth = window.speechSynthesis;

  //   synth.cancel();

  //   setIsPaused(false);
  // };

  // TEXT TO SPEECH HOTKEY
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key.toLowerCase() === "t") {
        handlePlay();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [question, handlePlay]);

  return (
    <div>
      <div className="card-body">
        <div>
          <div className="d-flex align-items-center mb-3">
            <div>{question?.Question.question}</div>
            <i
              className="fa fa-volume-up mx-2"
              style={{ cursor: "pointer" }}
              onClick={handlePlay}
            ></i>
          </div>

          <form action="">
            <div className="form-check">
              {question?.Question.Answers.map((answer, index) => (
                <div key={index}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="answer"
                    id={answer.id}
                    value={answer.id}
                    onChange={() =>
                      answerHandler(
                        question?.questionNumber,
                        question?.Question.id,
                        answer.id
                      )
                    }
                    checked={answers?.includes(answer.id)}
                  />
                  <label className="form-check-label" htmlFor={answer.id}>
                    {answer.answer}
                  </label>
                </div>
              ))}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

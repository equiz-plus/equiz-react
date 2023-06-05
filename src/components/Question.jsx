import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
export default function Question({ question, answerHandler, answers }) {
  const [isPaused, setIsPaused] = useState(false);
  // const [utterance, setUtterance] = useState(null);
  const [utteranceU, setUtteranceU] = useState(null);
  const [utteranceV, setUtteranceV] = useState(null);
  const [text, setText] = useState(null);

  useEffect(() => {
    setText(question?.Question.question);
  }, [question]);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);
    const v = new SpeechSynthesisUtterance("you win some you lose some");

    setUtteranceU(u);
    // setUtteranceV(v);

    return () => {
      synth.cancel();
    };
  }, [text]);

  const handlePlay = () => {
    const synth = window.speechSynthesis;

    if (isPaused) {
      synth.resume();
    }

    synth.speak(utteranceU);

    // utteranceU.onend = () => {
    //   synth.speak(utteranceV);
    // };

    setIsPaused(false);
  };

  const handlePause = () => {
    const synth = window.speechSynthesis;

    synth.pause();

    setIsPaused(true);
  };

  const handleStop = () => {
    const synth = window.speechSynthesis;

    synth.cancel();

    setIsPaused(false);
  };

  return (
    <div>
      <button onClick={handlePlay}>{isPaused ? "Resume" : "Play"}</button>

      <div className="card-body">
        <div>
          <div>
            <p>{question?.Question.question}</p>
          </div>

          <form action="">
            <div className="form-check">
              {question?.Question.Answers.map((answer) => (
                <div key={answer.id}>
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

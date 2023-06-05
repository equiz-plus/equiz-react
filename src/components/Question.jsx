import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
export default function Question({ question, answerHandler, answers }) {
  const [isPaused, setIsPaused] = useState(false);
  const [utteranceQuestion, setUtteranceQuestion] = useState(null);
  const [utteranceAnswers, setUtteranceAnswers] = useState(null);
  const [text, setText] = useState(null);
  const [textAnswers, setTextAnswers] = useState(null);

  useEffect(() => {
    setText(question?.Question.question);
    setTextAnswers(question?.Question.Answers.map((el) => el.answer));
  }, [question]);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);
    const v = textAnswers?.map(
      (answer) => new SpeechSynthesisUtterance(answer)
    );

    setUtteranceQuestion(u);
    setUtteranceAnswers(v);

    return () => {
      synth.cancel();
    };
  }, [text, textAnswers]);

  const handlePlay = () => {
    const synth = window.speechSynthesis;

    if (isPaused) {
      synth.resume();
    }

    synth.speak(utteranceQuestion);

    utteranceQuestion.onend = () => {
      speakAnswers();
    };

    setIsPaused(false);
  };

  const speakAnswers = () => {
    const synth = window.speechSynthesis;

    for (const utterAnswer of utteranceAnswers) {
      synth.speak(utterAnswer);
    }
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

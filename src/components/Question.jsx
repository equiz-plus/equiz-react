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
    setUtteranceV(v);

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

    utteranceU.onend = () => {
      synth.speak(utteranceV);
    };

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
      <div className="card-header">
        <div className="d-flex justify-content-between">
          <div>
            <h5 className="mb-0">
              Soal No. <strong className="fw-bold">2</strong>
            </h5>
          </div>
          <div>
            <div>
              <span className="badge bg-info p-2">
                {" "}
                <i className="fa fa-clock"></i> 0 jam, 20 menit, 30 detik.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div>
          <div>
            <p> {question?.Question.question}</p>
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

          {/* <table>
            <tbody>
              <tr>
                <td width="50" style={{ padding: "10px" }}>
                  <button className="btn btn-info btn-sm w-100 shdaow">
                    A
                  </button>
                </td>
                <td style={{ padding: "10px" }}>
                  <p>Pilihahhannnanya</p>
                </td>
              </tr>
              <tr>
                <td width="50" style={{ padding: "10px" }}>
                  <button className="btn btn-info btn-sm w-100 shdaow">
                    B
                  </button>
                </td>
                <td style={{ padding: "10px" }}>
                  <p>Pilihahhannnanya</p>
                </td>
              </tr>
              <tr>
                <td width="50" style={{ padding: "10px" }}>
                  <button className="btn btn-info btn-sm w-100 shdaow">
                    C
                  </button>
                </td>
                <td style={{ padding: "10px" }}>
                  <p>Pilihahhannnanya</p>
                </td>
              </tr>
              <tr>
                <td width="50" style={{ padding: "10px" }}>
                  <button className="btn btn-info btn-sm w-100 shdaow">
                    D
                  </button>
                </td>
                <td style={{ padding: "10px" }}>
                  <p>Pilihahhannnanya</p>
                </td>
              </tr>
            </tbody>
          </table> */}
        </div>

        <div>
          <div className="alert alert-danger border-0 shadow">
            <i className="fa fa-exclamation-triangle"></i> Soal Tidak
            Ditemukan!.
          </div>
        </div>
      </div>
    </div>
  );
}

import Countdown from "react-countdown";

const Completionist = () => (
  <span className="badge bg-info p-2">
    {" "}
    <i className="fa fa-clock me-2"></i>
    EXAM ENDED
  </span>
);

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    // Format the time values to have leading zeros if necessary
    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");

    return (
      <span className="badge bg-info p-2">
        {" "}
        <i className="fa fa-clock me-2"></i>
        {formattedHours}:{formattedMinutes}:{formattedSeconds}
      </span>
    );
  }
};

const CountdownComponent = ({ timeStop, forceEndExam }) => {
  if (!timeStop) {
    return (
      <span className="badge bg-info p-2">
        {" "}
        <i className="fa fa-clock me-2"></i>
        LOADING
      </span>
    ); // Placeholder for when timeStop is not ready
  }

  const stopTime = new Date(timeStop).getTime();
  const currentTime = Date.now();
  const timeRemaining = stopTime - currentTime;

  const handleComplete = () => {
    forceEndExam();
  };

  return (
    <Countdown
      date={currentTime + timeRemaining}
      renderer={renderer}
      onComplete={handleComplete}
    />
  );
};

export default CountdownComponent;

import { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";

function Timer() {
  const { dispatch, secondsRemaining } = useQuiz();

  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);                       // Creates a delay of 1000ms then dispatch occurs. And when dispatch changes, this triggers again 

      return () => clearInterval(id);     // This is a cleanup function. clearInterval will stop the timer from proceeding
    },
    [dispatch] 
  );

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;

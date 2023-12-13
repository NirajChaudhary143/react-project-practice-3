import { useEffect, useState } from "react";
import "../../App.css";
import Game from "../Game/Game";
import NumberButton from "../NumberButton/NumberButton";
export default function NextPage() {
  const [randomNumber, setRandomNumber] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState();
  const [error, setError] = useState("");
  const [score, setScore] = useState(0);
  const randomNumberGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const randomNumberHandler = () => {
    if (!selectedNumber) {
      setError("You have not selected any number.");
      return;
    }
    setError("");
    const randomNum = randomNumberGenerator(1, 6);
    setRandomNumber(randomNum);
    if (randomNum) {
      if (randomNum === selectedNumber) {
        setScore((prev) => prev + randomNum);
      } else {
        setScore((prev) => prev - 2);
      }
    }
    setSelectedNumber(undefined);
  };
  // NextPage

  useEffect(() => {
    console.log(randomNumber);
  }, [randomNumber]);
  return (
    <>
      <div className="container" style={{ marginTop: "45px" }}>
        <div className="error_msg">
          <span>{error}</span>
        </div>
        <div className="upper_container">
          <div className="score_container">
            <h1>{score}</h1>
            <p>Total Score</p>
          </div>
          <div className="choose_number-container">
            <div>
              <NumberButton
                setError={setError}
                selectedNumber={selectedNumber}
                setSelectedNumber={setSelectedNumber}
              ></NumberButton>
            </div>
            <div className="select_number">
              <p>Select Number</p>
            </div>
          </div>
        </div>
        <div className="game_container">
          <Game
            onClick={randomNumberHandler}
            randomNumber={randomNumber}
          ></Game>
        </div>
      </div>
    </>
  );
}

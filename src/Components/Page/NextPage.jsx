import "../../App.css";
import Game from "../Game/Game";
import NumberButton from "../NumberButton/NumberButton";
export default function NextPage() {
  return (
    <>
      <div className="container" style={{ marginTop: "45px" }}>
        <div className="error_msg">
          <span>You have not selected any number.</span>
        </div>
        <div className="upper_container">
          <div className="score_container">
            <h1>0</h1>
            <p>Total Score</p>
          </div>
          <div className="choose_number-container">
            <div>
              <NumberButton></NumberButton>
            </div>
            <div className="select_number">
              <p>Select Number</p>
            </div>
          </div>
        </div>
        <div className="game_container">
          <Game></Game>
        </div>
      </div>
    </>
  );
}

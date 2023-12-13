import Button from "../Button/Button";
import styled from "styled-components";

const Game = ({ onClick, randomNumber, setScore }) => {
  const resetScore = () => {
    setScore(0);
  };
  return (
    <>
      <div className="game_image_container" onClick={onClick}>
        <img src={`/images/dice_${randomNumber}.png`} alt="" />
      </div>
      <div>
        <p>Click on Dice to roll</p>
      </div>
      <div className="">
        <Buttons>
          <Button
            onClick={resetScore}
            borderLess={"true"}
            text={"Reset Score"}
          ></Button>
        </Buttons>
        <Buttons>
          <Button text={"Show Rules"}></Button>
        </Buttons>
      </div>
    </>
  );
};

export default Game;

const Buttons = styled.div`
  margin: 10px 0;
`;

import Button from "../Button/Button";
import styled from "styled-components";
import Rules from "../Rules/Rules";
import { useState } from "react";

const Game = ({ onClick, randomNumber, setScore }) => {
  const resetScore = () => {
    setScore(0);
  };
  const [rules, setRules] = useState(false);
  const rulesVisible = () => {
    setRules((prev) => !prev);
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
          <Button
            onClick={rulesVisible}
            text={rules ? "Hide Rules" : "Show Rules"}
          ></Button>
        </Buttons>
      </div>
      {rules && <Rules />}
    </>
  );
};

export default Game;

const Buttons = styled.div`
  margin: 10px 0;
`;

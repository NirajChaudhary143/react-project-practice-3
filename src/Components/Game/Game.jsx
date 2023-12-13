import Button from "../Button/Button";
import styled from "styled-components";
const Game = () => {
  return (
    <>
      <div className="game_image_container">
        <img src="/images/dice_1.png" alt="" />
      </div>
      <div>
        <p>Click on Dice to roll</p>
      </div>
      <div className="">
        <Buttons>
          <Button borderLess={"true"} text={"Reset Score"}></Button>
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

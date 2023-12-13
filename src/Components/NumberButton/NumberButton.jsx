import { useState } from "react";
import styled from "styled-components";
import "../../App.css";

export default function NumberButton() {
  const arrNum = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState();
  console.log(selectedNumber);
  return (
    <>
      {arrNum.map((value, index) => (
        <Buttons
          isSelected={selectedNumber === value}
          key={index}
          onClick={() => setSelectedNumber(value)}
        >
          {value}
        </Buttons>
      ))}
    </>
  );
}
const Buttons = styled.button`
  margin: 0 10px;
  border: 1px solid black;
  /* background-color: transparent; */
  height: 45px;
  width: 45px;
  cursor: pointer;
  font-weight: 600;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;

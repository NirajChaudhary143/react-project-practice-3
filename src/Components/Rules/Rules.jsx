import styled from "styled-components";
const Rules = () => {
  return (
    <>
      <Container>
        <h1>How to play Dice Game</h1>
        <div>
          <ul>
            <li>Select any number.</li>
            <li>Click on dice.</li>
            <li>
              After click an dice if selected number is equal to dice number you
              will get same point as dice.
            </li>
            <li>If you get wrong guess then 2 points will be deducted.</li>
          </ul>
        </div>
      </Container>
    </>
  );
};

export default Rules;

const Container = styled.div`
  margin-top: 10px;
  background-color: #fbf1f1;
  padding: 10px;
  h1 {
    font-size: 16px;
    margin: 0;
  }
  ul {
    margin: 5px;
  }
  ul li {
    font-size: 13px;
  }
`;

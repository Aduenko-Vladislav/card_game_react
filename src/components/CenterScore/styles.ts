import styled from "styled-components";

const StyledCenterScore = styled.div`
  display: flex;
  flex-direction: column;
  border: 5px solid #fcea8b;
  border-radius: 37px;
  margin-bottom: 60px;
`;

const ScoreBlock = styled.div`
  padding-top: 21px;

  color: #fcea8b;
  font: italic normal 900 22px/28px Merriweather;
  letter-spacing: 0px;
  color: #fcea8b;
  text-align: center;
`;

const NumbersBlock = styled.div`
  display: flex;
  gap: 10px;
  padding: 0 47px 35px;
`;

const ScorePoint = styled.div`
  color: #fcea8b;
  font: italic normal 900 52px/65px Merriweather;
  letter-spacing: 0px;
  color: #fcea8b;
  text-align: center;
`;

export { ScoreBlock, ScorePoint, NumbersBlock, StyledCenterScore };

import { NumbersBlock, ScoreBlock, ScorePoint, StyledCenterScore } from "./styles";

const CenterScore = () => {
  return (
    <StyledCenterScore>
      <ScoreBlock>Score:</ScoreBlock>
      <NumbersBlock>
        <ScorePoint>17</ScorePoint>
        <ScorePoint>:</ScorePoint>
        <ScorePoint>40</ScorePoint>
      </NumbersBlock>
    </StyledCenterScore>
  );
};

export default CenterScore;

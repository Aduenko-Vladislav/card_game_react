import {
  NumbersBlock,
  ScoreBlock,
  ScorePoint,
  StyledCenterScore,
} from "./styles";

interface userValueProps {
  uservalue: number;
  compvalue: number;
}

const CenterScore = ({ uservalue, compvalue }: userValueProps) => {
  return (
    <StyledCenterScore>
      <ScoreBlock>Score:</ScoreBlock>
      <NumbersBlock>
        <ScorePoint>{uservalue}</ScorePoint>
        <ScorePoint>:</ScorePoint>
        <ScorePoint>{compvalue}</ScorePoint>
      </NumbersBlock>
    </StyledCenterScore>
  );
};

export default CenterScore;

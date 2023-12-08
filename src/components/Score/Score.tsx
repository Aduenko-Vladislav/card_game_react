import { Title } from "./styles";

interface HighScoreProps {
  highScore: string;
}

const Score = ({ highScore }: HighScoreProps) => {
  return <Title> HighScore: {highScore}</Title>;
};

export default Score;

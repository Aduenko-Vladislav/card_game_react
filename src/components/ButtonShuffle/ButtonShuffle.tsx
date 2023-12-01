import { Button } from "./styles";

interface ButtonShuffleProps {
  userName: string;
}

const ButtonShuffle = ({ userName }:ButtonShuffleProps) => {
  return (
      <Button disabled={!userName}>Let's shuffle it!</Button>
  );
};

export default ButtonShuffle;

import { Button } from "./styles";
interface ButtonShuffleProps {
  isActive: string | boolean;
  onClick: ()=>void;
}

const ButtonShuffle = ({ isActive, onClick }:ButtonShuffleProps) => {
  
  return (
      <Button disabled={!isActive} onClick={onClick} >Let's shuffle it!</Button>
  );
};

export default ButtonShuffle;

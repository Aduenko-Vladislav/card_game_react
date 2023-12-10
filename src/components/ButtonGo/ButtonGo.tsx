import { useSelector } from "react-redux";
import "./buttongo.css";
import { RootState } from "../../Store/store";

interface ButtonGoProps {
  isActive: string | boolean;
  onClick: ()=>void;
}

const ButtonGo = ({ isActive, onClick }: ButtonGoProps) => {
  const isGameFinished = useSelector((state: RootState) => state.gameData.isGameActive)
  return (
    <>
      <button className="start" disabled={!isActive} onClick={onClick}>
      {isGameFinished === "finish" ? `Let's shuffle it again!` : `Let's shuffle it!` }
      </button>
    </>
  );
};

export default ButtonGo;

import Logo from "../Logo/Logo";
import Score from "../Score/Score";
import User from "../User/User";
import Player from "../../assets/img/users/icon.png";
import Player2 from "../../assets/img/users/computerIcon.png";
import { WrapperHeader, WrapperUser } from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const GameActive = () => {
  const userName = useSelector((state: RootState) => state.gameData.userName)
  return (
    <>
      <WrapperHeader>
        <Score />
        <Logo isHome={false} />
        <Score />
      </WrapperHeader>
      <WrapperUser>
        <User userLogo={Player} userName ={userName}/>
        <User userLogo={Player2} userName ={""}/>
      </WrapperUser>
      
    </>
  );
};

export default GameActive;

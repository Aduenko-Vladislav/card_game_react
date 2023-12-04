import Logo from "../Logo/Logo";
import Score from "../Score/Score";
import User from "../User/User";
import Player from "../../assets/img/users/icon.png";
import Player2 from "../../assets/img/users/computerIcon.png";
import { WrapperCard, WrapperHeader, WrapperUser } from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Card from "../Card/Card";
import CenterScore from "../CenterScore/CenterScore";

const GameActive = () => {
  const userName = useSelector((state: RootState) => state.gameData.userName);
  return (
    <>
      <WrapperHeader>
        <Score />
        <Logo isHome={false} />
        <Score />
      </WrapperHeader>
      <WrapperUser>
        <WrapperCard>
          <User userLogo={Player} userName={userName} />
          <Card />
        </WrapperCard>
        <CenterScore />
        <WrapperCard>
          <User userLogo={Player2} userName={""} />
          <Card />
        </WrapperCard>
      </WrapperUser>
    </>
  );
};

export default GameActive;

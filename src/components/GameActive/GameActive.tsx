import Logo from "../Logo/Logo";
import Score from "../Score/Score";
import User from "../User/User";
import Player from "../../assets/img/users/icon.png";
import Player2 from "../../assets/img/users/computerIcon.png";
import {
  Container,
  Wrapper,
  WrapperCard,
  WrapperHeader,
  WrapperUser,
} from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Card from "../Card/Card";
import CenterScore from "../CenterScore/CenterScore";

import BtnGo from "../BtnGo/BtnGo";
import { ComputerCards, userCards } from "../cardsShuffle";
import { useState } from "react";

const GameActive = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(-1);
  const [userScore, setUserScore] = useState(0);
  const [compScore, setcompScore] = useState(0);

  const handleBtnGoClick = () => {
    if (currentCardIndex < userCards.length - 2) {
      setCurrentCardIndex(currentCardIndex + 1);
      const currentPlayerCard = userCards[currentCardIndex + 1];
      const currentComputerCard = ComputerCards[currentCardIndex + 1];
      calcScore(currentPlayerCard.value, currentComputerCard.value);
    }
  };
  const calcScore = (userValue: number, compValue: number) => {
    if (userValue > compValue) {
      setUserScore(userScore + userValue + compValue);
    } else if (userValue < compValue) {
      setcompScore(compScore + userValue + compValue);
    } else {
      setUserScore(userScore + userValue + compValue);
      setcompScore(compScore + userValue + compValue);
    }
  };

  const userName = useSelector((state: RootState) => state.gameData.userName);
  return (
    <Container>
      <Wrapper>
        <WrapperHeader>
          <Score />
          <Logo isHome={false} />
          <Score />
        </WrapperHeader>
        <WrapperUser>
          <WrapperCard>
            <User userLogo={Player} userName={userName} />
            <Card Card={userCards[currentCardIndex]} />
          </WrapperCard>
          <WrapperCard>
            <CenterScore uservalue={userScore} compvalue={compScore} />
            <BtnGo onClick={handleBtnGoClick} />
          </WrapperCard>
          <WrapperCard>
            <User userLogo={Player2} userName={""} />
            <Card Card={ComputerCards[currentCardIndex]} />
          </WrapperCard>
        </WrapperUser>
      </Wrapper>
    </Container>
  );
};

export default GameActive;

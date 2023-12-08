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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Card from "../Card/Card";
import CenterScore from "../CenterScore/CenterScore";
import BtnGo from "../BtnGo/BtnGo";
// import { ComputerCards, userCards } from "../cardsShuffle";
import { useEffect, useState } from "react";
import { changeGameStatus } from "../../store/slices/gameData";
import { cardGameWin, cardGameLost, CardModel } from "../cardsData";
import ButtonShuffle from "../ButtonShuffle/ButtonShuffle";
import { getShuffleCards } from "../cardsShuffle";

const GameActive = () => {
  const dispatch = useDispatch();
  const [userCards, setUserCards] = useState<CardModel[]>([]);
  const [computerCards, setComputerCards] = useState<CardModel[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(-1);
  const [userScore, setUserScore] = useState<number>(0);
  const [compScore, setcompScore] = useState<number>(0);
  const [bet, setbet] = useState<number>(0);

  const [userHightScore, setUserHighScore] = useState<string>(() => {
    const storedUserHightScore = localStorage.getItem("userHighScore");
    return storedUserHightScore || "";
  });
  const [compHightScore, setCompHighScore] = useState<string>(() => {
    const storedCompHightScore = localStorage.getItem("compHighScore");
    return storedCompHightScore || "";
  });

  useEffect(() => {
    const cards = getShuffleCards();
    setUserCards(cards.userCards);
    setComputerCards(cards.ComputerCards);
  }, []);

  const handleBtnGoClick = () => {
    if (currentCardIndex < userCards.length - 2) {
      setCurrentCardIndex(currentCardIndex + 1);
      const currentPlayerCard = userCards[currentCardIndex + 1];
      const currentComputerCard = computerCards[currentCardIndex + 1];
      calcScore(currentPlayerCard.value, currentComputerCard.value);
    } else if (currentCardIndex === userCards.length - 2) {
      dispatch(changeGameStatus("finished"));
      calcHighScore();
    }
  };

  const calcScore = (userValue: number, compValue: number) => {
    const currentBet = bet + userValue + compValue;
    setbet(currentBet);

    if (userValue > compValue) {
      setUserScore(userScore + currentBet);
      setbet(0);
    } else if (userValue < compValue) {
      setcompScore(compScore + currentBet);
      setbet(0);
    }
  };

  const userName = useSelector((state: RootState) => state.gameData.userName);
  const isGameStatus = useSelector(
    (state: RootState) => state.gameData.isGameActive
  );

  const calcHighScore = () => {
    if (userScore > compScore && userScore > +userHightScore) {
      setUserHighScore(userScore.toString());
    } else if (userScore < compScore && compScore > +compHightScore) {
      setCompHighScore(compScore.toString());
    }
  };

  const onClickButtonShuffle = () => {
    dispatch(changeGameStatus("home"));
    localStorage.setItem("userHighScore", userHightScore.toString());
    localStorage.setItem("compHighScore", compHightScore.toString());
  };

  return (
    <Container>
      <Wrapper>
        <WrapperHeader>
          <Score highScore={userHightScore} />
          <Logo isHome={false} />
          <Score highScore={compHightScore} />
        </WrapperHeader>
        <WrapperUser>
          <WrapperCard>
            <User userLogo={Player} userName={userName} />
            <Card
              Card={
                isGameStatus === "active"
                  ? userCards[currentCardIndex]
                  : userScore >= compScore
                  ? cardGameWin
                  : cardGameLost
              }
            />
          </WrapperCard>
          <WrapperCard>
            <CenterScore uservalue={userScore} compvalue={compScore} />
            {isGameStatus === "active" ? (
              <>
                <BtnGo onClick={handleBtnGoClick} />
              </>
            ) : (
              <>
                <ButtonShuffle
                  isActive={userName}
                  onClick={onClickButtonShuffle}
                />
              </>
            )}
          </WrapperCard>
          <WrapperCard>
            <User userLogo={Player2} userName={""} />
            <Card
              Card={
                isGameStatus === "active"
                  ? computerCards[currentCardIndex]
                  : userScore >= compScore
                  ? cardGameLost
                  : cardGameWin
              }
            />
          </WrapperCard>
        </WrapperUser>
      </Wrapper>
    </Container>
  );
};

export default GameActive;

import styled from "styled-components";
import Logo from "./components/Logo/Logo";
import Name from "./components/Name/Name";
import Score from "./components/StartPage/Score";
import Username from "./components/StartPage/Username";
import Computername from "./components/StartPage/Computername";
import CardLogo from "./components/StartPage/Card";
import CenterScore from "./components/StartPage/MainScore";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./Store/store";
import FinishCardLose from "./components/FinishPage/FinishCardLose";
import FinishCardWin from "./components/FinishPage/FinishCardWin";
import ButtonRound from "./components/FinishPage/ButtonRound";
import ButtonGo from "./components/ButtonGo/ButtonGo";
import { useEffect, useState } from "react";
import { CardModel } from "./components/Card/cardData";
import { changeGameStatus } from "./Store/Slice/gameData";
import { getShuffleCards } from "./components/Card/cardShuffle";

const Container = styled.div`
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const CenterScoreStyle = styled.div`
  border: 5px solid #fcea8b;
  border-radius: 37px;
  width: 250px;
  height: 155px;
  display: flex;
  justify-content: center;
  align-self: center;
  flex-direction: column;
`;

const CenterWrapperStyle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const Block = styled.div`
  display: flex;
  justify-content: space-around;
`;

const UpBlock = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  max-height: 77px;
  margin: 77px 0 56px;

  background: rgba(255, 255, 255, 0.71) 0% 0% no-repeat padding-box;
  border-radius: 39px;
`;

const App = () => {
  const dispatch = useDispatch();

  const [currentCardIndex, setcurrentCardIndex] = useState<number>(-1);
  const [userCards, setUserCards] = useState<CardModel[]>([]);
  const [computerCards, setComputerCards] = useState<CardModel[]>([]);
  const [userScore, setUserScore] = useState<number>(0);
  const [compScore, setcompScore] = useState<number>(0);
  const [bet, setbet] = useState<number>(0);
  const [userHighScore, setUserHighScore] = useState<string>(() => {
    const usericHighScore = localStorage.getItem("usericHighScore");
    return usericHighScore || "";
  });
  const [compHighScore, setCompHighScore] = useState<string>(() => {
    const compicHighScore = localStorage.getItem("compicHighScore");
    return compicHighScore || "";
  });

  useEffect(() => {
    const cards = getShuffleCards();
    setUserCards(cards.userCards);
    setComputerCards(cards.ComputerCards);
  },[] );

  const isGameActive = useSelector(
    (state: RootState) => state.gameData.isGameActive
  );
  const username = useSelector((state: RootState) => state.gameData.userName);

  const buttonShuffle = () => {
    if (currentCardIndex < userCards.length - 2) {
      setcurrentCardIndex(currentCardIndex + 1);
      const currentPlayerCard = userCards[currentCardIndex + 1];
      const currentComputerCard = computerCards[currentCardIndex + 1];
      calcScore(currentPlayerCard.value, currentComputerCard.value);
    } else if (currentCardIndex === userCards.length - 2) {
      dispatch(changeGameStatus("finish"));
      highCalcScore();
    }
  };

  const buttonAgain = () => {
    dispatch(changeGameStatus("home"));
    localStorage.setItem("usericHighScore", userHighScore);
    localStorage.setItem("compicHighScore", compHighScore);
  };

  const highCalcScore = () => {
    if (userScore > +userHighScore && userScore > compScore) {
      setUserHighScore(userScore.toString());
    } else if (compScore > +compHighScore && userScore < compScore) {
      setCompHighScore(compScore.toString());
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
  return (
    <>
      {isGameActive === "active" ? (
        <>
          <UpBlock>
            <Score score={userHighScore} />
            <Logo />
            <Score score={compHighScore} />
          </UpBlock>

          <Block>
            <CenterWrapperStyle>
              <Username username={username} />
              <CardLogo Card={userCards[currentCardIndex]} />
            </CenterWrapperStyle>
            <CenterWrapperStyle>
              <CenterScoreStyle>
                <CenterScore userScore={userScore} compScore={compScore} />
              </CenterScoreStyle>
              <ButtonRound onClick={buttonShuffle} />
            </CenterWrapperStyle>
            <CenterWrapperStyle>
              <Computername />
              <CardLogo Card={computerCards[currentCardIndex]} />
            </CenterWrapperStyle>
          </Block>
        </>
      ) : isGameActive === "finish" ? (
        <>
          <>
            <UpBlock>
              <Score score={userHighScore} />
              <Logo />
              <Score score={compHighScore} />
            </UpBlock>

            <Block>
              <CenterWrapperStyle>
                <Username username={username} />
                <FinishCardWin />
              </CenterWrapperStyle>
              <CenterWrapperStyle>
                <CenterScoreStyle>
                  <CenterScore userScore={userScore} compScore={compScore} />
                </CenterScoreStyle>
                <ButtonGo isActive={username} onClick={buttonAgain} />
              </CenterWrapperStyle>
              <CenterWrapperStyle>
                <Computername />
                <FinishCardLose />
              </CenterWrapperStyle>
            </Block>
          </>
        </>
      ) : (
        <Container>
          <Wrapper>
            <Logo />
            <Name />
          </Wrapper>
        </Container>
      )}
    </>
  );
};

export default App;

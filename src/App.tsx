import styled from "styled-components";
import Logo from "./components/Logo/Logo";
import Name from "./components/Name/Name";
import Score from "./components/StartPage/Score";
import Username from "./components/StartPage/Username";
import Computername from "./components/StartPage/Computername";
import CardLogo from "./components/StartPage/Card";
import CenterScore from "./components/StartPage/MainScore";
import { useSelector } from "react-redux";
import { RootState } from "./Store/store";

const Container = styled.div`
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
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

  const isGameActive = useSelector((state: RootState) => state.gameData.isGameActive)
  return (
    
<>
      {isGameActive === "active" ? (
        <>
          <UpBlock>
          <Score />
          <Logo />
          <Score />
        </UpBlock>

      <Block>
        <CenterWrapperStyle>
          <Username />
          <CardLogo />
        </CenterWrapperStyle>
        <CenterScoreStyle>
          <CenterScore />
        </CenterScoreStyle>
        <CenterWrapperStyle>
          <Computername />
          <CardLogo />
        </CenterWrapperStyle>
      </Block> 
        </>
      ) : isGameActive === "finish" ? (
        <>
           <Container/>
        </>
      ) : (
      
            <Name />
  
      )}
    </>
  );
};


export default App;


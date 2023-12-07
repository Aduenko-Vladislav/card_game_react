import styled from "styled-components";
import Logo from "./components/Logo/Logo";
import Name from "./components/Name/Name";
import { RootState } from "./store/store";
import { useSelector } from "react-redux";
import GameActive from "./components/GameActive/GameActive";

const Container = styled.div`
  max-width: 1170px;
  width: 100%;
  height: 100vh;

  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 15px;
`;

const App = () => {
  const isGameActive = useSelector(
    (state: RootState) => state.gameData.isGameActive
  );
  return (
    <>
      {isGameActive === "active" ? (
        <>
          <GameActive />
        </>
      ) : isGameActive === "finished" ? (
        <>
           <GameActive />
        </>
      ) : (
        <Container>
          <Wrapper>
            <Logo isHome={true} />
            <Name />
          </Wrapper>
        </Container>
      )}
    </>
  );
};

export default App;

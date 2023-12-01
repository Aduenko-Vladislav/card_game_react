import styled from "styled-components";
import Logo from "./components/Logo/Logo";
import Name from "./components/Name/Name";
import ButtonShuffle from "./components/ButtonShuffle/ButtonShuffle";

const Container = styled.div`
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 15px;
`;

const App = () => {
  return (
    <Container>
      <Wrapper>
        <Logo />
        <Name />
      </Wrapper>
    </Container>
  );
};

export default App;

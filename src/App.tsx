import styled from "styled-components";

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
        <h1>Card game</h1>
      </Wrapper>
    </Container>
  );
};

export default App;

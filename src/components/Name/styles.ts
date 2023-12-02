import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 0 15px;
`;

const Input = styled.input`
  max-width: 200px;

  margin-bottom: 38px;
  padding: 8px 37px;

  font: italic normal normal 18px/23px Merriweather;
  text-align: center;
  letter-spacing: 0px;

  opacity: 1;
  background-color: #ffffff;
  border-radius: 37px;

  cursor: pointer;

  &::placeholder {
    color: #000000;
  }
`;

export { Wrapper, Input };

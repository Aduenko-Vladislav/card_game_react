import styled from "styled-components";

const Button = styled.button`
  padding: 23px 48px;
  margin-bottom: 50px;

  border-radius: 37px;
  text-align: center;

  background: transparent linear-gradient(180deg, #e11e22 0%, #810d0f 100%) 0%
    0% no-repeat padding-box;
  border: 5px solid #fcea8b;
  font: italic normal 900 22px/28px Merriweather;
  letter-spacing: 0px;
  color: #fcea8b;

  cursor: pointer;

  &:disabled {
    color: #2d7232;
    background: #378b44 0% 0% no-repeat padding-box;
    border: 5px solid #2d7232;
  }
  &:active {
    box-shadow: 4px 4px 30px #fcea8b;
  }
`;

export { Button };

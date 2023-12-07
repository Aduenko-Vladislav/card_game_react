import styled from "styled-components";

export const StyledBtnGo = styled.button`
  padding: 23px 48px;

  border-radius: 37px;
  text-align: center;

  background: transparent linear-gradient(180deg, #e11e22 0%, #810d0f 100%) 0%
    0% no-repeat padding-box;
  border: 5px solid #fcea8b;
  font: italic normal 900 22px/28px Merriweather;
  letter-spacing: 0px;
  color: #fcea8b;

  cursor: pointer;
  &:active {
    box-shadow: 4px 4px 30px #fcea8b;
  }
`;

interface ButtonGoProps {
  onClick: () => void;
}

const BtnGo = ({ onClick }: ButtonGoProps) => {
  return <StyledBtnGo onClick={onClick}>Next round</StyledBtnGo>;
};

export default BtnGo;

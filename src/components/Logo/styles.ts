import styled from "styled-components";

interface StyledLogoProps {
  isHome: boolean;
}

const StyledLogo = styled.div`
  padding: 100px 0 92px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LogoIcon = styled.img<StyledLogoProps>`
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 1;
  width: ${({ isHome }) => (isHome ? "" : "323px")};
`;

export { StyledLogo, LogoIcon };

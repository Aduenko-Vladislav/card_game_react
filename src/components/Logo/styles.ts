import styled from "styled-components";

interface StyledLogoProps {
  isHome: boolean;
}

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LogoIcon = styled.img<StyledLogoProps>`
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 1;
  width: ${({ isHome }) => (isHome ? "" : "323px")};
  margin-bottom: ${({ isHome }) => (isHome ? "100px;" : "0")};
`;

export { StyledLogo, LogoIcon };

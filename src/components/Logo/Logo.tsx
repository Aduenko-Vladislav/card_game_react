import { StyledLogo, LogoIcon } from "./styles";
import Logomark from "../../assets/img/Logo.png";
interface StyledLogoProps {
  isHome: boolean;
}

const Logo = ({ isHome }: StyledLogoProps) => {
  return (
    <StyledLogo>
      <LogoIcon src={Logomark} alt="logo" isHome={isHome} />
    </StyledLogo>
  );
};

export default Logo;

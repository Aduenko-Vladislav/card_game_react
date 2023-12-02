import {StyledLogo, LogoIcon, } from "./styles";
import Logomark from "../../assets/img/Logo.png";

const Logo: React.FC = () => {
  return (
    <StyledLogo>
        <LogoIcon src={Logomark} alt="logo"/>
    </StyledLogo>
  )
}

export default Logo
import {StyledFinishCardLogo, FinishCardIcon, } from "./FinishCardStyles";
import WinCardmark from "../../assets/img/cardwin.png";


const FinishCardWin = () => {
 
  return (
    <StyledFinishCardLogo>
        <FinishCardIcon src={WinCardmark} alt="logo"/>
    </StyledFinishCardLogo>
  )
}


export default FinishCardWin;
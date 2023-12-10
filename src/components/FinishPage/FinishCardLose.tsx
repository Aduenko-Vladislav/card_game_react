import {StyledFinishCardLogo, FinishCardIcon, } from "./FinishCardStyles";
import LoseCardmark from "../../assets/img/cardlose.png";


const FinishCardLose = () => {
 
  return (
    <StyledFinishCardLogo>
        <FinishCardIcon src={LoseCardmark} alt="logo"/>
    </StyledFinishCardLogo>
  )
}

export default FinishCardLose;
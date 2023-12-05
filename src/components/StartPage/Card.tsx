import {StyledCardLogo, CardIcon, } from "./CardStyle";
import Cardmark from "../../assets/img/card.jpg";


const CardLogo = () => {
 
  return (
    <StyledCardLogo>
        <CardIcon src={Cardmark} alt="logo"/>
    </StyledCardLogo>
  )
}



export default CardLogo
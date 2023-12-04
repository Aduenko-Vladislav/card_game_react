import { CardPic, StyledCard } from "./styles"
import BackCard from "../../assets/img/card-back.jpg"
const Card = () => {
  return (
    <StyledCard>
        <CardPic src={BackCard}/>
    </StyledCard>
  )
}

export default Card
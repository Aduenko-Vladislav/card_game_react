import { StyledCardLogo, CardIcon } from "./CardStyle";
import Cardmark from "../../assets/img/card.jpg";
import { CardModel } from "../Card/cardData";

interface CardProps {
  Card: CardModel;
}

const CardLogo = ({ Card }: CardProps) => {
  return (
    <StyledCardLogo>
      <CardIcon
        src={Card ? require(`../../assets/cards/${Card.name}.png`) : Cardmark}
      />
    </StyledCardLogo>
  );
};

export default CardLogo;

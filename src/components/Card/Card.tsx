import { CardPic, StyledCard } from "./styles";
import BackCard from "../../assets/img/card-back.jpg";
import { CardModel } from "../cardsData";

interface CardProps {
  Card: CardModel;
}

const Card = ({ Card }: CardProps) => {
  return (
    <StyledCard>
      <CardPic
        src={
          Card ? require(`../../assets/img/cards/${Card.name}.png`) : BackCard
        }
      />
    </StyledCard>
  );
};

export default Card;

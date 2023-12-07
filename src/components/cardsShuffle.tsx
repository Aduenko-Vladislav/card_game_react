import { cardsData, CardModel } from "./cardsData";

function shuffleArray(array: CardModel[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

const shuffledCards = [...cardsData];
shuffleArray(shuffledCards);

const halfLength = Math.ceil(shuffledCards.length / 2);
export const userCards = shuffledCards.slice(0, halfLength);
export const ComputerCards = shuffledCards.slice(halfLength);

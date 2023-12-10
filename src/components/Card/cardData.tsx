export class CardModel {
    id: number;
    value: number;
    name: string;
  
    constructor(id: number, value: number, name: string) {
      this.id = id;
      this.value = value;
      this.name = name;
    }
  }
  
  // { id: (\d*), value: (\d*), name: (.*) \},
  // new CardModel($1, $2, $3),
  
  export const cardsData: CardModel[] = [
    new CardModel(1, 1, "A-C-B"),
    new CardModel(2, 1, "A-D-R"),
    new CardModel(3, 1, "A-H-R"),
    new CardModel(4, 1, "A-S-B"),
    new CardModel(5, 2, "2-C-B"),
    new CardModel(6, 2, "2-D-R"),
    new CardModel(7, 2, "2-H-R"),
    new CardModel(8, 2, "2-S-B"),
    new CardModel(9, 3, "3-C-B"),
    new CardModel(10, 3, "3-D-R"),
    new CardModel(11, 3, "3-H-R"),
    new CardModel(12, 3, "3-S-B"),
    new CardModel(13, 4, "4-C-B"),
    new CardModel(14, 4, "4-D-R"),
    new CardModel(15, 4, "4-H-R"),
    new CardModel(16, 4, "4-S-B"),
    new CardModel(17, 5, "5-C-B"),
    new CardModel(18, 5, "5-D-R"),
    new CardModel(19, 5, "5-H-R"),
    new CardModel(20, 5, "5-S-B"),
    new CardModel(21, 6, "6-C-B"),
    new CardModel(22, 6, "6-D-R"),
    new CardModel(23, 6, "6-H-R"),
    new CardModel(24, 6, "6-S-B"),
    new CardModel(25, 7, "7-C-B"),
    new CardModel(26, 7, "7-D-R"),
    new CardModel(27, 7, "7-H-R"),
    new CardModel(28, 7, "7-S-B"),
    new CardModel(29, 8, "8-C-B"),
    new CardModel(30, 8, "8-D-R"),
    new CardModel(31, 8, "8-H-R"),
    new CardModel(32, 8, "8-S-B"),
    new CardModel(33, 9, "9-C-B"),
    new CardModel(34, 9, "9-D-R"),
    new CardModel(35, 9, "9-H-R"),
    new CardModel(36, 9, "9-S-B"),
    new CardModel(37, 10, "10-C-B"),
    new CardModel(38, 10, "10-D-R"),
    new CardModel(39, 10, "10-H-R"),
    new CardModel(40, 10, "10-S-B"),
    new CardModel(41, 11, "J-C-B"),
    new CardModel(42, 11, "J-D-R"),
    new CardModel(43, 11, "J-H-R"),
    new CardModel(44, 11, "J-S-B"),
    new CardModel(45, 12, "Q-C-B"),
    new CardModel(46, 12, "Q-D-R"),
    new CardModel(47, 12, "Q-H-R"),
    new CardModel(48, 12, "Q-S-B"),
    new CardModel(49, 13, "K-C-B"),
    new CardModel(50, 13, "K-D-R"),
    new CardModel(51, 13, "K-H-R"),
    new CardModel(52, 13, "K-S-B"),
  ];
  
  export const cardGameWin = new CardModel(53, 0, "winCard");
  
  export const cardGameLost = new CardModel(53, 0, "lostCard");
  
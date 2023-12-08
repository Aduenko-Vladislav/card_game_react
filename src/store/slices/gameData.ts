import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type gameStatus = "home" | "active" | "finished";

export interface GameDataState {
  userName: string;
  isGameActive: gameStatus;
}

const initialState: GameDataState = {
  userName: "",
  isGameActive: "home",
};

export const gameDataSlice = createSlice({
  name: "gameData",
  initialState,
  reducers: {
    changeUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
    changeGameStatus: (state, action: PayloadAction<gameStatus>) => {
      state.isGameActive = action.payload;
    },
  },
});

export const { changeUserName, changeGameStatus } = gameDataSlice.actions;

export default gameDataSlice.reducer;

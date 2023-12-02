import { configureStore } from '@reduxjs/toolkit'
import gameDataReducer from './slices/gameData'

export const store = configureStore({
  reducer: {
    gameData: gameDataReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
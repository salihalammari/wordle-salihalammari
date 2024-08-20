import { createSlice } from '@reduxjs/toolkit';
import { evaluateGuess } from './gameLogic';

const initialState = {
  targetWord: '',
  guesses: [],
  attemptsLeft: 6,
  status: 'playing',
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setTargetWord(state, action) {
      state.targetWord = action.payload;
    },
    makeGuess(state, action) {
      const guess = action.payload;
      const result = evaluateGuess(guess, state.targetWord);
      state.guesses.push({ word: guess, result });
      state.attemptsLeft -= 1;
      if (guess === state.targetWord || state.attemptsLeft === 0) {
        state.status = guess === state.targetWord ? 'won' : 'lost';
      }
    },
    resetGame(state) {
      state.targetWord = '';
      state.guesses = [];
      state.attemptsLeft = 6;
      state.status = 'playing';
    },
  },
});

export const { setTargetWord, makeGuess, resetGame } = gameSlice.actions;
export default gameSlice.reducer;
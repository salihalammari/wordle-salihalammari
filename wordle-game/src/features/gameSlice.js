import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  targetWord: 'REACT',
  guesses: [],
  attemptsLeft: 6,
  status: 'playing',
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame(state) {
      state.targetWord = 'REACT'; // Placeholder - use a function to get a random word
      state.guesses = [];
      state.attemptsLeft = 6;
      state.status = 'playing';
    },
    makeGuess(state, action) {
      const guess = action.payload.toUpperCase();
      const result = evaluateGuess(guess, state.targetWord); // Implement evaluateGuess
      state.guesses.push({ word: guess, result });
      state.attemptsLeft -= 1;
      if (guess === state.targetWord) {
        state.status = 'won';
      } else if (state.attemptsLeft === 0) {
        state.status = 'lost';
      }
    },
  },
});

export const { startGame, makeGuess } = gameSlice.actions;
export default gameSlice.reducer;

function evaluateGuess(guess, targetWord) {
    const result = [];
  const targetWordArray = targetWord.split('');
  const guessArray = guess.split('');

  // Step 1: Identify correct letters (correct position)
  guessArray.forEach((letter, index) => {
    if (letter === targetWordArray[index]) {
      result.push('correct');
      targetWordArray[index] = null; // Remove matched letter from targetWordArray
      guessArray[index] = null; // Mark as processed
    } else {
      result.push(null); // Placeholder for now
    }
  });
// Step 2: Identify wrong position letters
    guessArray.forEach((letter, index) => {
        if (letter && targetWordArray.includes(letter)) {
        result[index] = 'wrong position';
        targetWordArray[targetWordArray.indexOf(letter)] = null; // Remove matched letter
        } else if (letter) {
        result[index] = 'incorrect';
        }
    });

    return result;
}
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGame, makeGuess } from './features/game/gameSlice';
import GuessInput from './components/GuessInput';
import GuessList from './components/GuessList';
import GameStatus from './components/GameStatus';

function App() {
  const dispatch = useDispatch();
  const { guesses, attemptsLeft, status } = useSelector((state) => state.game);

  useEffect(() => {
    dispatch(startGame());
  }, [dispatch]);

  const handleGuess = (guess) => {
    dispatch(makeGuess(guess));
  };

  return (
    <div>
      <h1>Wordle Game</h1>
      <GuessInput onSubmit={handleGuess} />
      <GuessList guesses={guesses} />
      <GameStatus attemptsLeft={attemptsLeft} status={status} />
    </div>
  );
}

export default App;

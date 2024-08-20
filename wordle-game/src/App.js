import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Board from './components/Board';
import GuessInput from './components/GuessInput';
import EndGameState from './components/EndGameState';
import { resetGame } from './features/game/gameSlice';
import useWordAPI from './hooks/useWordAPI';

function App() {
  const { status, targetWord } = useSelector((state) => state.game);
  const dispatch = useDispatch();
  
  useWordAPI(); // Fetch the target word on mount

  const handleRestart = () => {
    dispatch(resetGame());
  };

  return (
    <div className="App">
      <header>
        <h1>Wordle Game</h1>
      </header>
      <main>
        {status === 'playing' ? (
          <>
            <Board />
            <GuessInput />
          </>
        ) : (
          <EndGameState status={status} targetWord={targetWord} onRestart={handleRestart} />
        )}
      </main>
    </div>
  );
}

export default App;
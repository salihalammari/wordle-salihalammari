import React from 'react';
import PropTypes from 'prop-types';

const EndGameState = ({ status, targetWord, onRestart }) => {
  return (
    <div className="end-game-state">
      <h2>{status === 'won' ? 'Congrats! You won!' : `You lost! The word was ${targetWord}.`}</h2>
      <button onClick={onRestart}>Play Again</button>
    </div>
  );
};

EndGameState.propTypes = {
  status: PropTypes.oneOf(['won', 'lost']).isRequired,
  targetWord: PropTypes.string.isRequired,
  onRestart: PropTypes.func.isRequired,
};

export default EndGameState;
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeGuess } from '../features/game/gameSlice';

const GuessInput = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.game);

  const handleChange = (e) => {
    setInputValue(e.target.value.toUpperCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length === 5 && status === 'playing') {
      dispatch(makeGuess(inputValue));
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        maxLength="5"
        value={inputValue}
        onChange={handleChange}
        disabled={status !== 'playing'}
        placeholder="Enter a 5-letter word"
      />
      <button type="submit" disabled={inputValue.length !== 5 || status !== 'playing'}>
        Guess
      </button>
    </form>
  );
};

export default GuessInput;
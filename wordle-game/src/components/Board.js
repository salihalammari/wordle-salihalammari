import React from 'react';
import Cell from './Cell';
import { useSelector } from 'react-redux';

const Board = () => {
  const { guesses } = useSelector((state) => state.game);

  return (
    <div className="board">
      {guesses.map((guess, index) => (
        <div key={index} className="row">
          {guess.word.split('').map((letter, i) => (
            <Cell key={i} letter={letter} status={guess.result[i]} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
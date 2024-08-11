import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 5px 0;
  color: ${({ result }) => (result === 'correct' ? 'green' : 'red')};
`;

function GuessList({ guesses }) {
  return (
    <List>
      {guesses.map((guess, index) => (
        <ListItem key={index} result={guess.result}>
          {guess.word} - {guess.result}
        </ListItem>
      ))}
    </List>
  );
}

export default GuessList;
import React from 'react';
import styled from 'styled-components';

const StatusContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

function GameStatus({ attemptsLeft, status }) {
  return (
    <StatusContainer>
      <p>Attempts Left: {attemptsLeft}</p>
      {status !== 'playing' && <p>You {status === 'won' ? 'Won!' : 'Lost!'}</p>}
    </StatusContainer>
  );
}

export default GameStatus;
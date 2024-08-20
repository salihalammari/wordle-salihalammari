import React from 'react';
import styled from 'styled-components';

const CellContainer = styled.span`
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin: 2px;
  font-weight: bold;
  background-color: ${(props) =>
    props.status === 'correct' ? 'green' :
    props.status === 'wrong position' ? 'yellow' :
    'gray'};
`;

const Cell = ({ letter, status }) => {
  return <CellContainer status={status}>{letter}</CellContainer>;
};

export default Cell;
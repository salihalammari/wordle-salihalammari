import { render, screen } from '@testing-library/react';
import Cell from './Cell';

test('renders letter correctly', () => {
  render(<Cell letter="A" status="correct" />);
  const cellElement = screen.getByText(/A/i);
  expect(cellElement).toBeInTheDocument();
});

test('applies correct style based on status', () => {
  render(<Cell letter="A" status="correct" />);
  const cellElement = screen.getByText(/A/i);
  expect(cellElement).toHaveStyle('background-color: green');

  render(<Cell letter="B" status="wrong position" />);
  const cellElementWrongPos = screen.getByText(/B/i);
  expect(cellElementWrongPos).toHaveStyle('background-color: yellow');

  render(<Cell letter="C" status="incorrect" />);
  const cellElementIncorrect = screen.getByText(/C/i);
  expect(cellElementIncorrect).toHaveStyle('background-color: gray');
});
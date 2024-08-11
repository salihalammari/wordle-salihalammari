import React, {useState} from 'react';
import styled from 'styled-components';


const InputField = styled.input`
  width: 80%;
  padding: 10px;
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;

function GuessInput({ onSubmit }) {
  const [guess, setGuess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(guess);
    setGuess('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField 
        type="text" 
        name="guess" 
        onChange={(e) => setGuess(e.target.value)}
        maxLength={5}
        required 
      />
      <SubmitButton type="submit">Guess</SubmitButton>
    </form>
  );
}

export default GuessInput;

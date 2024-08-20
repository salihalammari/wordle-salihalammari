export function evaluateGuess(guess, targetWord) {
    const result = Array(guess.length).fill('incorrect');
    const targetLetters = targetWord.split('');
  
    // Check for correct letters in the correct position
    guess.split('').forEach((letter, index) => {
      if (letter === targetLetters[index]) {
        result[index] = 'correct';
        targetLetters[index] = null; // Remove letter from targetWord to avoid double counting
      }
    });
  
    // Check for correct letters in the wrong position
    guess.split('').forEach((letter, index) => {
      if (result[index] !== 'correct' && targetLetters.includes(letter)) {
        result[index] = 'wrong position';
        targetLetters[targetLetters.indexOf(letter)] = null;
      }
    });
  
    return result;
  }
import axios from 'axios';

const API_KEY = 'your-api-key';
const API_HOST = 'wordsapiv1.p.rapidapi.com';

export async function fetchRandomWord() {
  const options = {
    method: 'GET',
    url: `https://${API_HOST}/words/`,
    params: {
      random: 'true',
      letterPattern: '^.{5}$',
      lettersMin: 5,
      lettersMax: 5,
      partOfSpeech: 'verb',
    },
    headers: {
      'x-rapidapi-host': API_HOST,
      'x-rapidapi-key': API_KEY,
    },
  };

  const response = await axios.request(options);
  return response.data.word.toUpperCase();
}
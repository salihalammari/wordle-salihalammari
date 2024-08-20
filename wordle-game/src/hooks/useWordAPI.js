import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTargetWord } from '../features/game/gameSlice';
import { fetchRandomWord } from '../utils/api';

const useWordAPI = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getWord() {
      const word = await fetchRandomWord();
      dispatch(setTargetWord(word));
    }

    getWord();
  }, [dispatch]);
};

export default useWordAPI;
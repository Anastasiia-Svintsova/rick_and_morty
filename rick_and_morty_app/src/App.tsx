import React, {
  FC, useCallback, useEffect, useState,
} from 'react';
import { getCharacters } from './api/api';
import './App.css';
import { CharacterList } from './components/CharacterList/CharacterList';
import { Loader } from './components/Loader';
import { ICharacter } from './types/Character';

const App: FC = () => {
  const [pagesAmount, setPagesAmount] = useState(0);
  const [charactersAmount, setCharactersAmount] = useState(0);
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadCharacters = useCallback(async () => {
    setIsLoading(true);
    const data = await getCharacters();
    setIsLoading(false);
    setCharacters(data.results);
    setPagesAmount(data.info.pages);
    setCharactersAmount(data.info.count);
  }, []);

  useEffect(() => {
    loadCharacters();
  }, []);

  return (
    <div className="App">
      {!!charactersAmount && (
        <p>{`${charactersAmount} characters found`}</p>
      )}

      {isLoading && <Loader />}

      {characters && <CharacterList characters={characters} />}

      {pagesAmount}
    </div>
  );
};

export default App;

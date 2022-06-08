import React, {
  FC, useCallback, useEffect, useState,
} from 'react';
import { getCharacters } from './api/api';
import './App.css';
import Character from './components/Character/Character';
import { ICharacter } from './types/Character';

const App: FC = () => {
  const [pagesAmount, setPagesAmount] = useState(0);
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  const loadCharacters = useCallback(async () => {
    const data = await getCharacters();
    setCharacters(data.results);
    setPagesAmount(data.info.pages);
  }, []);

  useEffect(() => {
    loadCharacters();
  }, []);

  return (
    <div className="App">
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <Character character={character} />
          </li>
        ))}
      </ul>

      {pagesAmount}
    </div>
  );
};

export default App;

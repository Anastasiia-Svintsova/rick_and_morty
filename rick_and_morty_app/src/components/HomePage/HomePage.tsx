import React, {
  FC, memo, useCallback, useEffect, useState,
} from 'react';
import { getCharacters, getCharactersOnPage } from '../../api/api';
import { CharacterList } from '../CharacterList/CharacterList';
import { Loader } from '../Loader';
import { ICharacter } from '../../types/Character';
import { Pagination } from '../Pagination/Pagination';
import { Search } from '../Search/Search';
import './HomePage.scss';

const HomePage: FC = memo(() => {
  const [pagesAmount, setPagesAmount] = useState(0);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [charactersAmount, setCharactersAmount] = useState(0);
  const [characters, setCharacters] = useState<string[]>([]);
  const [charactersOnPage, setCharactersOnPage] = useState<ICharacter[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');

  const loadAllCharacters = useCallback(async (url: string) => {
    const data = await getCharacters(url);
    const result = data.results.map((item) => item.name);
    const names = Array.from(new Set(result));

    setCharacters((prev) => [...prev, ...names]);

    if (data.info && data.info.next) {
      loadAllCharacters(data.info.next);
    }
  }, []);

  const loadCharactersOnPage = useCallback(async () => {
    setIsLoading(true);
    const data = await getCharactersOnPage(currentPageNumber, query);
    setIsLoading(false);

    if (data.results) {
      setCharactersOnPage(data.results);
      setPagesAmount(data.info.pages);
      setCharactersAmount(data.info.count);
    } else {
      setCharactersOnPage([]);
      setPagesAmount(0);
      setCharactersAmount(0);
    }
  }, [currentPageNumber, query]);

  useEffect(() => {
    loadAllCharacters('https://rickandmortyapi.com/api/character');
  }, []);

  useEffect(() => {
    loadCharactersOnPage();
  }, [currentPageNumber, query]);

  return (
    <div className="home-page">
      <Search
        setQuery={setQuery}
        characters={characters}
        setPageNumber={setCurrentPageNumber}
      />

      <p className="home-page__subtitle">
        {`${charactersAmount} characters found`}
      </p>

      <Pagination
        pagesAmount={pagesAmount}
        setPageNumber={setCurrentPageNumber}
        page={currentPageNumber}
      />

      {isLoading && <Loader />}

      {charactersOnPage && <CharacterList characters={charactersOnPage} />}
    </div>
  );
});

export default HomePage;
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React, {
  FC, useCallback, useState,
} from 'react';
import './Search.scss';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { ICharacter } from '../../types/Character';

interface Props {
  characters: string[];
  setQuery: (value: string) => void,
  setPageNumber: (value: number) => void,
  setCharactersOnPage: (value: ICharacter[]) => void,
  setIsOnlyLikedShown: (value: boolean) => void,
  isOnlyLikedShown: boolean,
}

export const Search: FC<Props> = ({
  characters,
  setQuery,
  setPageNumber,
  setCharactersOnPage,
  setIsOnlyLikedShown,
  isOnlyLikedShown,
}) => {
  const [searchParam, setSearchParam] = useState('');
  const [hasSearchError, setHasSearchError] = useState(false);

  const handleAutocompleteChange = useCallback((value: string) => {
    setSearchParam(value);
    setHasSearchError(false);
  }, [searchParam]);

  const handleInputChange = useCallback((event: any, value: string) => {
    setSearchParam(event.target.value);
    setHasSearchError(false);
  }, [searchParam, hasSearchError]);

  const handleClick = useCallback(() => (
    searchParam.trim().length
      ? (setQuery(searchParam), setPageNumber(1))
      : setHasSearchError(true)
  ), [searchParam]);

  const showAll = useCallback(() => {
    setQuery('');
    setHasSearchError(false);
    setPageNumber(1);
    setIsOnlyLikedShown(false);
  }, []);

  const showLiked = useCallback(() => {
    const data = localStorage.getItem('likedCharacters');
    const likedCharacters = data ? JSON.parse(data) : [];

    setSearchParam('');
    setIsOnlyLikedShown(true);
    setCharactersOnPage(likedCharacters);
    setPageNumber(1);
  }, []);

  return (
    <div className="search">
      {!isOnlyLikedShown && (
        <div className="search__form">
          <div className="search__container">
            <Autocomplete
              className="search__input"
              onChange={(event, value) => handleAutocompleteChange(value)}
              onInputChange={handleInputChange}
              freeSolo
              autoHighlight
              disableClearable
              options={characters}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Search by name"
                  margin="normal"
                  variant="outlined"
                  value={searchParam}
                  InputProps={{ ...params.InputProps, type: 'search' }}
                />
              )}
            />

            {hasSearchError && (
            <p className="search__error">
              Please enter a name
            </p>
            )}
          </div>

          <button
            type="button"
            onClick={handleClick}
            className="btn btn-primary search__button"
          >
            Search
          </button>
        </div>
      )}

      <div className="search__buttons">
        <button
          type="button"
          onClick={showAll}
          className="btn btn-primary search__button"
        >
          Show all
        </button>

        <button
          type="button"
          onClick={showLiked}
          className="btn btn-primary search__button"
        >
          Show liked
        </button>
      </div>
    </div>
  );
};

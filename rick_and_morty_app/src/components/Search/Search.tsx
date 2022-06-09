/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React, {
  FC, useCallback, ChangeEvent, useState,
} from 'react';
import './Search.scss';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

interface Props {
  characters: string[];
  setQuery: (value: string) => void,
  setPageNumber: (value: number) => void,
}

export const Search: FC<Props> = ({ characters, setQuery, setPageNumber }) => {
  const [searchParam, setSearchParam] = useState('');
  const [hasSearchError, setHasSearchError] = useState(false);

  const handleQueryChange = useCallback((
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setSearchParam(event.target.value);
    setHasSearchError(false);
  }, []);

  const handleAutocompleteChange = useCallback((value: string) => {
    setSearchParam(value);
    setHasSearchError(false);
  }, []);

  const handleClick = useCallback(() => (
    searchParam.trim().length
      ? (setQuery(searchParam), setPageNumber(0))
      : setHasSearchError(true)
  ), [searchParam]);

  const showAll = useCallback(() => {
    setQuery('');
    setSearchParam('');
    setHasSearchError(false);
  }, []);

  return (
    <div className="search">
      <div className="search__form">
        <Autocomplete
          className="search__input"
          onChange={(event, value) => handleAutocompleteChange(value)}
          value={searchParam}
          freeSolo
          disableClearable
          options={characters}
          renderInput={(params) => (
            <TextField
              {...params}
              onChange={(event) => handleQueryChange(event)}
              label="Search by name"
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

      <button
        type="button"
        onClick={showAll}
        className="btn btn-primary search__button"
      >
        Show all
      </button>
    </div>
  );
};

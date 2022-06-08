/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React, { FC, useCallback, ChangeEvent } from 'react';
import './Search.scss';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

interface Props {
  characters: string[];
  setQuery: (value: string) => void,
}

export const Search: FC<Props> = ({ characters, setQuery }) => {
  const handleQueryChange = useCallback((
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    console.log(event.target.value);

    setQuery(event.target.value);
  }, []);

  const handleAutocompleteChange = useCallback((value: string) => {
    setQuery(value);
  }, []);

  return (
    <div className="search-form">
      <Autocomplete
        className="search-form__input"
        onChange={(event, value) => handleAutocompleteChange(value)}
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
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
    </div>
  );
};

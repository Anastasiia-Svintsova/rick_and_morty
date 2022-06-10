import React, { FC } from 'react';
import Character from '../Character/Character';
import { ICharacter } from '../../types/Character';
import './CharacterList.scss';

interface Props {
  characters: ICharacter[],
}

export const CharacterList: FC<Props> = ({ characters }) => {
  const data = localStorage.getItem('likedCharacters');
  const likedCharacters = data ? JSON.parse(data) : [];

  return (
    <ul className="character-list">
      {characters.map((character) => (
        <li key={character.id} className="character-list__item">
          <Character character={character} likedCharacters={likedCharacters} />
        </li>
      ))}
    </ul>
  );
};

import classNames from 'classnames';
import React, { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ICharacter } from '../../types/Character';
import './Character.scss';

interface Props {
  character: ICharacter;
}

const Character: FC<Props> = ({ character }) => {
  const {
    id,
    name,
    image,
    status,
    species,
    gender,
  } = character;

  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(`/character/${id}`);
  }, []);

  return (
    <div
      className="character"
      onClick={handleClick}
      onKeyDown={handleClick}
      role="link"
      tabIndex={0}
    >
      <div className="character__photo-container">
        <img src={image} alt={`${name}`} className="character__photo" />
      </div>

      <div className="character__additional-info">
        <p
          className={classNames(
            'character__status',
            { 'character__status--dead': status === 'Dead' },
            { 'character__status--unknown': status === 'unknown' },
          )}
        >
          {status}
        </p>
        <p>{`Name: ${name}`}</p>
        <p>{`${species} - ${gender}`}</p>
      </div>
    </div>
  );
};

export default Character;

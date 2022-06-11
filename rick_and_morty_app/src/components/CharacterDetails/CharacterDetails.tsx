import classNames from 'classnames';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleCharacter } from '../../api/api';
import { ICharacter } from '../../types/Character';
import { Loader } from '../Loader/Loader';
import './CharacterDetails.scss';

export const CharacterDetails = () => {
  const [character, setCharacter] = useState<ICharacter>();
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  const loadCharacter = useCallback(async () => {
    setIsLoading(true);

    if (id) {
      const data = await getSingleCharacter(+id);
      setCharacter(data);
    }

    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    loadCharacter();
  }, []);

  return (
    <div className="details">
      {isLoading && <Loader />}
      {character && (
        <section className="details__container">
          <div className={classNames(
            'details__photo-container',
            { 'details__photo-container--dead': character.status === 'Dead' },
            { 'details__photo-container--unknown': character.status === 'unknown' },
          )}
          >
            <img
              src={character.image}
              alt={`${character.name}`}
              className="details__photo"
            />
          </div>

          <div className="details__info">
            <p>{`Name: ${character.name}`}</p>

            <p>{`Status: ${character.status}`}</p>

            <p>{`Species: ${character.species}`}</p>

            <p>{`Gender: ${character.gender}`}</p>

            <p>
              Location:
              &nbsp;
              <a
                href={character.location.url}
                className="details__link"
              >
                {character.location.name}
              </a>
            </p>

            <p>
              First episode:
              &nbsp;
              <a
                href={character.episode[0]}
                className="details__link"
              >
                {character.episode[0].split('/').slice(-1)}
              </a>
            </p>

            <p>
              Last episode:
              &nbsp;
              <a
                href={character.episode[character.episode.length - 1]}
                className="details__link"
              >
                {character.episode[character.episode.length - 1].split('/').slice(-1)}
              </a>
            </p>

            <p>{`Created: ${character.created}`}</p>
          </div>

        </section>
      )}
    </div>
  );
};

import classNames from 'classnames';
import React, { FC, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { ICharacter } from '../../types/Character';
import './Character.scss';

interface Props {
  character: ICharacter;
  likedCharacters: ICharacter[];
}

const Character: FC<Props> = ({ character, likedCharacters }) => {
  const {
    id,
    name,
    image,
    status,
    species,
    gender,
  } = character;

  const isLiked = likedCharacters.some((user: ICharacter) => user.id === id);
  const [like, setLike] = useState(isLiked);

  const likeIconSize = 50;

  const navigate = useNavigate();

  const handleCardClick = useCallback(() => {
    navigate(`/character/${id}`);
  }, []);

  const handleLikeClick = useCallback(() => {
    const data = localStorage.getItem('likedCharacters');
    const currentLikedCharacters = data ? JSON.parse(data) : [];

    setLike(!like);

    const newLikedUsers = like
      ? currentLikedCharacters.filter((user: ICharacter) => user.id !== id)
      : [...currentLikedCharacters, character];

    localStorage.setItem('likedCharacters', JSON.stringify(newLikedUsers));
  }, [like, character]);

  return (
    <div className="character">
      <div
        className="character__container"
        onClick={handleCardClick}
        onKeyDown={handleCardClick}
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

      <button
        type="button"
        className="character__like"
        onClick={handleLikeClick}
      >
        {like
          ? <FcLike size={likeIconSize} />
          : <FcLikePlaceholder size={likeIconSize} />}
      </button>
    </div>
  );
};

export default Character;

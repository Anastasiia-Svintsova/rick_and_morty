import React, { FC } from 'react';
import { ICharacter } from '../../types/Character';

interface Props {
  character: ICharacter;
}

const Character: FC<Props> = ({ character }) => {
  const { name, image } = character;

  return (
    <div>
      <img src={image} alt={`${name}`} />
      <p>{name}</p>
    </div>
  );
};

export default Character;

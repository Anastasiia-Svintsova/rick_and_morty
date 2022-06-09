/* eslint-disable global-require */
import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export const Header: FC = memo(() => (
  <div className="header">
    <div className="header__container">
      <div className="header__photo-container">
        <img
          src={require('../../images/header_image.png')}
          alt="Rick and Morty"
          className="header__photo"
        />
      </div>

      <Link
        to="/"
        className="header__title"
        data-item="Rick&Morty"
      >
        Rick&Morty
      </Link>

      <div className="header__photo-container">
        <img
          src={require('../../images/header_image-2.png')}
          alt="Rick and Morty"
          className="header__photo"
        />
      </div>
    </div>

    <div id="stars" className="header__stars" />
    <div id="stars2" className="header__stars" />
    <div id="stars3" className="header__stars" />
  </div>
));

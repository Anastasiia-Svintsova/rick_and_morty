/* eslint-disable global-require */
import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { Facebook } from '../FacebookLogin/Facebook';
import './Header.scss';

export const Header: FC = memo(() => (
  <div className="header">

    <div className="header__container">
      <Facebook />

      <div className="header__main">
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

      <Link to="/" className="header__home-link">
        <img
          src={require('../../images/home.png')}
          alt="home"
          className="header__home-image"
        />
      </Link>
    </div>

    <div className="stars stars--small" />
    <div className="stars stars--medium" />
    <div className="stars stars--large" />
  </div>
));

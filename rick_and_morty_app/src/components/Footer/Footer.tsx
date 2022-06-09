import React from 'react';
import './Footer.scss';

export const Footer = () => (
  <div className="footer">
    <a
      href="https://github.com/Anastasiia-Svintsova/rick_and_morty"
      className="footer__link"
      target="_blank"
      rel="noreferrer"
    >
      © 2022 Anastasiia Svintsova
    </a>

    <div id="stars" className="header__stars" />
    <div id="stars2" className="header__stars" />
    <div id="stars3" className="header__stars" />
  </div>
);

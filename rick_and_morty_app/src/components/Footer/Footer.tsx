import React from 'react';
import './Footer.scss';

export const Footer = () => (
  <footer className="footer">
    <a
      href="https://github.com/Anastasiia-Svintsova/rick_and_morty"
      className="footer__link"
      target="_blank"
      rel="noreferrer"
    >
      © 2022 Anastasiia Svintsova
    </a>

    <div className="stars stars--small" />
    <div className="stars stars--medium" />
    <div className="stars stars--large" />
  </footer>
);

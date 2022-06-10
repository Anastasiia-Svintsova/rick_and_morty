/* eslint-disable global-require */
import React, { FC, memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import './styles/general.scss';
import HomePage from './components/HomePage/HomePage';
import { CharacterDetails } from './components/CharacterDetails/CharacterDetails';
import './images/header_image.png';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

const App: FC = memo(() => (
  <div className="App">
    <Header />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/character/:id" element={<CharacterDetails />} />
    </Routes>

    <Footer />
  </div>
));

export default App;

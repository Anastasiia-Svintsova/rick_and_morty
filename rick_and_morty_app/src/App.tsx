/* eslint-disable global-require */
import React, { FC, memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { CharacterDetails } from './components/CharacterDetails/CharacterDetails';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import './styles/general.scss';

const App: FC = memo(() => (
  <div className="App">
    <Header />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/character/:id" element={<CharacterDetails />} />
      <Route path="*" element={<HomePage />} />
    </Routes>

    <Footer />
  </div>
));

export default App;

import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import HomePage from './components/HomePage/HomePage';

const App: FC = () => (
  <div className="App">
    <div className="App__header">
      <h1 className="text-center">
        Rick & Morty
      </h1>
    </div>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/characters/:id" />
    </Routes>
  </div>
);

export default App;

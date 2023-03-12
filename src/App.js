import React from 'react';
import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import MainPage from './pages/MainPage/MainPage';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { BackTitle } from './PageStyles';
import ListPage from './pages/ListPage/ListPage';
import BoardPage from "./pages/BoardPage/BoardPage";

function App() {
  return (
    <div className="App">
      <BackTitle>
        Find a Delicious Slice
        <br />
        at the Bake Shop
      </BackTitle>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/board" element={<BoardPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

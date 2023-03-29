import React from 'react';
import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import MainPage from './pages/MainPage/MainPage';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { BackTitle } from './PageStyles';
import ListPage from './pages/ListPage/ListPage';
import DetailPage from './pages/DetailPage/DetailPage';
import BoardPage from "./pages/BoardPage/BoardPage";
import {RecoilRoot} from "recoil";

function App() {
  return (
      <RecoilRoot>
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
                      <Route path="/detail" element={<DetailPage />} />
                      <Route path="/board" element={<BoardPage />} />
                  </Routes>
              </BrowserRouter>
          </div>
      </RecoilRoot>
  );
}

export default App;

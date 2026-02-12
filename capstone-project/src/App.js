import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Nav from './nav';
import Header from './header';
import Main from './main';
import Footer from './footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
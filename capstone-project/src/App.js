import React from 'react'; import './App.css'; import { BrowserRouter } from 'react-router-dom'; import Nav from './nav'; import Header from './header'; import Main from './main'; import Footer from './footer';

const App = () => { return ( <BrowserRouter> <div className="app-container"> <Header /> <Nav /> <Main /> <Footer /> </div> </BrowserRouter> ); };

export default App;
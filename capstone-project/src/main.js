import React from 'react'; import { Routes, Route } from 'react-router-dom'; import CallToAction from './callToAction'; import Specials from './specials'; import CustomersSay from './customersSay'; import Chicago from './chicago'; import BookingPage from './BookingPage';

const Main = () => { return ( <main> <Routes> <Route path="/" element={ <> <CallToAction /> <Specials /> <CustomersSay /> <Chicago /> </> } /> <Route path="/booking" element={<BookingPage />} /> </Routes> </main> ); };

export default Main;
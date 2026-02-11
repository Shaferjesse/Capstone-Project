import React, { useState } from 'react'; import './App.css'; import Nav from './nav'; import Header from './header'; import Main from './main'; import Footer from './footer'; import BookingPage from './BookingPage';

const App = () => { const [showBooking, setShowBooking] = useState(false);

return ( <div className="app-container"> <Header /> <button onClick={() => setShowBooking(false)}>Home</button> <button onClick={() => setShowBooking(true)}>Reservations</button> {showBooking ? <BookingPage /> : <Main />} <Footer /> </div> ); };

export default App;
import React, { useState } from 'react';

const BookingPage = () => { const [date, setDate] = useState("");

return ( <main> <h1>Reserve a Table</h1> <form> <label htmlFor="res-date">Choose date</label> <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} /> <input type="submit" value="Make Your reservation" /> </form> </main> ); };

export default BookingPage;
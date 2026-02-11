import React, { useState } from 'react';

const BookingForm = () => { const [date, setDate] = useState("");

const handleSubmit = (e) => { e.preventDefault(); };

return ( <form onSubmit={handleSubmit}> <label htmlFor="res-date">Choose date</label> <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} /> <button type="submit">Make Your reservation</button> </form> ); };

export default BookingForm;
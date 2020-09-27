import React, { useState } from 'react';

const Calc = () => {
  const [checkInTime, setCheckInTime] = useState('');
  const [checkOutTime, setCheckOutTime] = useState('');
  const [shortTime, setShortTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkIn = new Date(`January 1 2020 ${checkInTime}`);
    const checkOut = new Date(checkIn.getTime() + (8.75*60*60*1000));

    const shortTime = checkOut.toLocaleTimeString(navigator.language, {hour: 'numeric', minute:'numeric'});
    const milTime = checkOut.toLocaleTimeString(navigator.language, {hour12: false, hour: 'numeric', minute: 'numeric'});

    setShortTime(shortTime);
    setCheckOutTime(milTime);
  }

  const handleChange = (e) => {
    setCheckInTime(e.target.value);
  }

  return (
    <div className="Calc">
      <form onSubmit={handleSubmit}>
        <input type="text" value={checkInTime} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      {checkOutTime && 
        <div className="Calc-CheckOut">
          Your checkout is at {checkOutTime} ({shortTime})
        </div>
      }
    </div>
  )
}

export default Calc;
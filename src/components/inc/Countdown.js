import React, { useState, useEffect } from 'react';

function Countdown({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date(); // Difference in milliseconds
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
<div style={{ textAlign: 'center', fontFamily: 'Arial', marginTop: '50px' }}>
  <h1 style={{ fontSize: '2.5em', color: '#333' }}>Countdown to the Presidential Election 2024</h1>
  {timeLeft.days !== undefined ? (
    <div>
      <p style={{ fontSize: '2em', color: '#ff0000', margin: '10px 0' }}>{timeLeft.days} days</p>
      <p style={{ fontSize: '1.5em', color: '#00ff00', margin: '5px 0' }}>{timeLeft.hours} hours</p>
      <p style={{ fontSize: '1.5em', color: '#0000ff', margin: '5px 0' }}>{timeLeft.minutes} minutes</p>
      <p style={{ fontSize: '1.5em', color: '#ff00ff', margin: '5px 0' }}>{timeLeft.seconds} seconds</p>
    </div>
  ) : (
    <p style={{ fontSize: '1.5em', color: '#999' }}>The time has passed!</p>
  )}
</div>

  );
}

export default Countdown;
"use client";

import { useState, useEffect } from "react";

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const styleHours = {
    '--clr': '#ff2972',
    transform: `rotate(${hours * 30 + minutes * 0.5}deg)`,
  };
  const styleMinutes = {
    '--clr': '#fee800',
    transform: `rotate(${minutes * 6 + seconds * 0.1}deg)`,
  };
  const styleSeconds = {
    '--clr': '#04fc43',
    transform: `rotate(${seconds * 6}deg)`,
  };

  return (
    <div class="container">
      <div className="clock">
        <div className="circle" style={styleSeconds}><i></i></div>
        <div className="circle circle2" style={styleMinutes}><i></i></div>
        <div className="circle circle3" style={styleHours}><i></i></div>

        {Array.from({ length: 12 }, (_, i) => i + 1).map((h) => (
          <span key={h} style={{ '--i': h }}>
           <b>{h}</b>
          </span>
        ))}

      </div>

      <div id="time">
        <div id="hours" style={{ 'color': '#ff2972'}}>{hours.toString().padStart(2, '0')}</div>
        <span className="opacity-25"> : </span>
        <div id="minutes"style={{ 'color': '#fee800'}}>{minutes.toString().padStart(2, '0')}</div>
        <span className="opacity-25"> : </span>
        <div id="seconds"style={{ 'color': '#04fc43'}}>{seconds.toString().padStart(2, '0')}</div>
        <div id="ampm">{time.getHours() >= 12 ? "PM" : "AM"}</div>
      </div>
    </div>
  );
};

export default AnalogClock;

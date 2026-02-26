"use client";

import React, { useState, useEffect, useRef } from "react";
import "./Timer.css";

const CountDown = () => {
  const [time, setTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
    time_up: ""
  });

  const intervalRef = useRef(null);
  const deadlineRef = useRef(null);

  const count = () => {
    const now = new Date().getTime();
    const t = deadlineRef.current - now;

    if (t <= 0) {
      clearInterval(intervalRef.current);
      setTime({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
        time_up: "TIME IS UP"
      });
      return;
    }

    const dd = Math.floor(t / (1000 * 60 * 60 * 24));
    const hh = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mm = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    const ss = Math.floor((t % (1000 * 60)) / 1000);

    setTime({
      days: dd < 10 ? "0" + dd : dd,
      hours: hh < 10 ? "0" + hh : hh,
      minutes: mm < 10 ? "0" + mm : mm,
      seconds: ss < 10 ? "0" + ss : ss,
      time_up: ""
    });
  };

  useEffect(() => {
    // Set deadline = Now + 2 Months
    const futureDate = new Date();
    futureDate.setMonth(futureDate.getMonth() + 2);

    deadlineRef.current = futureDate.getTime();

    intervalRef.current = setInterval(count, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div id="countdown">
      <div className="col-4">
        <div className="box">
          <p id="day">{time.days}</p>
          <span className="text">Days</span>
        </div>
      </div>

      <div className="col-4">
        <div className="box">
          <p id="hour">{time.hours}</p>
          <span className="text">Hours</span>
        </div>
      </div>

      <div className="col-4">
        <div className="box">
          <p id="minute">{time.minutes}</p>
          <span className="text">Minutes</span>
        </div>
      </div>

      <div className="col-4">
        <div className="box">
          <p id="second">{time.seconds}</p>
          <span className="text">Seconds</span>
        </div>
      </div>

      {time.time_up && <p className="time-up">{time.time_up}</p>}
    </div>
  );
};

export default CountDown;
import React, { useEffect, useState } from 'react'

const Timer = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString();
      const dateStr = now.toLocaleDateString(undefined, {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      });
      setTime(`${timeStr} ${dateStr}`);
    };

    updateTime(); 
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval); p
  }, []);

  return (
    <div>
      {time}
    </div>
  )
}

export default Timer

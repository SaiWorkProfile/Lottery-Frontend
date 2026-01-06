import { useEffect, useState } from "react";

export default function Countdown({ drawTime }) {
  const [timeLeft, setTimeLeft] = useState("--:--:--");

  useEffect(() => {
    if (!drawTime || drawTime === "--") {
      setTimeLeft("--:--:--");
      return;
    }

    const tick = () => {
      const now = new Date();

      // parse "11:00 PM"
      const [time, period] = drawTime.split(" ");
      let [h, m] = time.split(":").map(Number);

      if (period === "PM" && h !== 12) h += 12;
      if (period === "AM" && h === 12) h = 0;

      const draw = new Date();
      draw.setHours(h, m, 0, 0);

      // if passed → next day
      if (draw <= now) {
        draw.setDate(draw.getDate() + 1);
      }

      const diff = Math.floor((draw - now) / 1000);

      if (diff <= 0) {
        setTimeLeft("00:00:00");
        return;
      }

      const hh = String(Math.floor(diff / 3600)).padStart(2, "0");
      const mm = String(Math.floor((diff % 3600) / 60)).padStart(2, "0");
      const ss = String(diff % 60).padStart(2, "0");

      setTimeLeft(`${hh}:${mm}:${ss}`);
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [drawTime]);

  return <span>{timeLeft}</span>;
}

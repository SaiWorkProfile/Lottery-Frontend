import { useEffect, useState } from "react";

export default function Countdown({ drawTime }) {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    if (!drawTime) {
      setTimeLeft(null);
      return;
    }

    const calculate = () => {
      const now = new Date();

      // drawTime example: "11:00 PM"
      const [time, meridian] = drawTime.split(" ");
      let [h, m] = time.split(":").map(Number);

      if (meridian === "PM" && h !== 12) h += 12;
      if (meridian === "AM" && h === 12) h = 0;

      const draw = new Date();
      draw.setHours(h, m, 0, 0);

      // if passed → next day
      if (draw < now) {
        draw.setDate(draw.getDate() + 1);
      }

      const diff = Math.floor((draw - now) / 1000);
      setTimeLeft(diff > 0 ? diff : 0);
    };

    calculate();
    const t = setInterval(calculate, 1000);
    return () => clearInterval(t);
  }, [drawTime]);

  if (timeLeft === null) return <span>--:--:--</span>;

  const hh = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
  const mm = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
  const ss = String(timeLeft % 60).padStart(2, "0");

  return <span>{hh}:{mm}:{ss}</span>;
}

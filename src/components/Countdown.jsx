import { useEffect, useState } from "react";

export default function Countdown({ seconds }) {

  const isValidSeconds =
    typeof seconds === "number" &&
    seconds > 0 &&
    seconds < 86399; // ❌ block 23:59:59 & above

  const [timeLeft, setTimeLeft] = useState(
    isValidSeconds ? seconds : null
  );

  // 🔁 React when admin updates time
  useEffect(() => {
    if (
      typeof seconds === "number" &&
      seconds > 0 &&
      seconds < 86399
    ) {
      setTimeLeft(seconds);
    } else {
      setTimeLeft(null); // show --:--:--
    }
  }, [seconds]);

  // ⏱ Countdown
  useEffect(() => {
    if (timeLeft === null) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return null; // stop at zero
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // ❌ Disabled state
  if (timeLeft === null) {
    return <span>--:--:--</span>;
  }

  // ✅ Format time
  const h = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
  const m = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
  const s = String(timeLeft % 60).padStart(2, "0");

  return <span>{h}:{m}:{s}</span>;
}

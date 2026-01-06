import { useEffect, useState } from "react";
import API from "../api/api";
import Countdown from "./Countdown";

export default function HeaderInfo() {

  const [data, setData] = useState(null);
  const [now, setNow] = useState(new Date());

  // 🔹 Fetch backend data (NO NEED every second)
  useEffect(() => {
    const fetch = () =>
      API.get("/header").then(res => setData(res.data));

    fetch();
    const t = setInterval(fetch, 10000); // every 10 seconds
    return () => clearInterval(t);
  }, []);

  // 🔹 LIVE CLOCK (every second)
  useEffect(() => {
    const clock = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(clock);
  }, []);

  if (!data) return null;

  const liveTime = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });

  const liveDate = now.toLocaleDateString("en-IN");

  return (
    <div className="header-box">
      <div>
        visitors<br />
        <b>{data.visitors}</b>
      </div>

      <div>
        next draw time<br />
        <b>{data.nextDrawTime}</b>
      </div>

      <div>
        date<br />
        <b>{liveDate}</b>
      </div>

      <div>
        time<br />
        <b>{liveTime}</b>
      </div>

      <div>
        time to draw<br />
        <b><Countdown drawTime={data.nextDrawTime} /></b>
      </div>
    </div>
  );
}

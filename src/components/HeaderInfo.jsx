import { useEffect, useState } from "react";
import API from "../api/api";
import Countdown from "./Countdown";

export default function HeaderInfo() {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetch = () =>
      API.get("/header").then(res => setData(res.data));

    fetch();
    const t = setInterval(fetch, 1000);

    return () => clearInterval(t);
  }, []);

  if (!data) return null;

  return (
    <div className="header-box">
      <div>visitors<br /><b>{data.visitors}</b></div>
      <div>next draw time<br /><b>{data.nextDrawTime}</b></div>
      <div>date<br /><b>{data.date}</b></div>
      <div>time<br /><b>{data.time}</b></div>
      <div>
        time to draw<br />
        <b><Countdown seconds={data.timeToDraw} /></b>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import API from "../api/api";

export default function ResultColumn() {
  const [d, setD] = useState(null);

  useEffect(() => {
    API.get("/current-draw").then(res => setD(res.data));
  }, []);

  return (
    <div className="result-column">
      <div className="draw-time">{d?.drawTime || "--"}</div>
      <div className="yellow">{d?.satyamA ?? "--"}</div>
      <div className="orange">{d?.satyamB ?? "--"}</div>
      <div className="green">{d?.satyamC ?? "--"}</div>
    </div>
  );
}

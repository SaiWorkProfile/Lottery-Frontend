import { useEffect, useState } from "react";
import API from "../api/api";

export default function Results() {

  const today = new Date().toISOString().slice(0, 10);

  const [date, setDate] = useState(today);
  const [data, setData] = useState([]);

  // 🔹 Load results (used by button)
  const loadResults = () => {
    API.get(`/results?date=${date}`)
      .then(res => setData(res.data))
      .catch(() => setData([]));
  };

  // 🔹 Load today's results on page load
  useEffect(() => {
    API.get(`/results?date=${today}`)
      .then(res => setData(res.data))
      .catch(() => setData([]));
  }, [today]);

  return (
    <div style={{ padding: "20px", background: "#55E2E9", minHeight: "100vh" }}>

      <h1 style={{ textAlign: "center" }}>DAILY RESULT CHART</h1>

      {/* DATE PICKER */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <label style={{ fontSize: "18px", marginRight: "10px" }}>
          Select Date
        </label>

        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          style={{ padding: "5px", fontSize: "16px" }}
        />

        <button
          onClick={loadResults}
          style={{
            marginLeft: "10px",
            padding: "6px 20px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Search
        </button>
      </div>

      {/* RESULT TABLE */}
      <table
        style={{
          width: "100%",
          maxWidth: "900px",
          margin: "auto",
          borderCollapse: "collapse",
          background: "#fff"
        }}
      >
        <thead>
          <tr style={{ background: "#f5f5f5" }}>
            <th style={th}>Draw Time</th>
            <th style={th}>DISAWAR-A</th>
            <th style={th}>DISAWAR-B</th>
            <th style={th}>DISAWAR-C</th>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 && (
            <tr>
              <td colSpan="4" style={{ textAlign: "center", padding: "20px" }}>
                No Results Found
              </td>
            </tr>
          )}

          {data.map((r, i) => (
            <tr key={i}>
              <td style={td}>{r.drawTime}</td>
              <td style={td}>{r.satyamA}</td>
              <td style={td}>{r.satyamB}</td>
              <td style={td}>{r.satyamC}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

const th = {
  border: "1px solid #ccc",
  padding: "10px",
  fontSize: "18px"
};

const td = {
  border: "1px solid #ccc",
  padding: "10px",
  textAlign: "center",
  fontSize: "18px"
};

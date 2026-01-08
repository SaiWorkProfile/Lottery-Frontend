import { useEffect, useState } from "react";
import API from "../api/api";

export default function Results() {

  const today = new Date().toISOString().slice(0, 10);

  const [date, setDate] = useState(today);
  const [data, setData] = useState([]);

  const loadResults = () => {
    API.get(`/results?date=${date}`)
      .then(res => setData(res.data))
      .catch(() => setData([]));
  };

  useEffect(() => {
    API.get(`/results?date=${today}`)
      .then(res => setData(res.data))
      .catch(() => setData([]));
  }, [today]);

  return (
    <div className="results-page">

      <div className="marquee-container">
        <h1 className="marquee-text">DISAWARWIN</h1>
      </div>

      <h1 className="results-title">DAILY RESULT CHART</h1>

      {/* DATE PICKER */}
      <div className="date-filter">
        <label>Select Date</label>

        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />

        <button onClick={loadResults}>Search</button>
      </div>

      {/* TABLE */}
      <div className="table-scroll">
        <table className="result-table">
          <thead>
            <tr>
              <th>Draw Time</th>
              <th>DISAWAR-A</th>
              <th>DISAWAR-B</th>
              <th>DISAWAR-C</th>
            </tr>
          </thead>

          <tbody>
            {data.length === 0 && (
              <tr>
                <td colSpan="4" className="no-data">
                  No Results Found
                </td>
              </tr>
            )}

            {data.map((r, i) => (
              <tr key={i}>
                <td>{r.drawTime}</td>
                <td>{r.satyamA}</td>
                <td>{r.satyamB}</td>
                <td>{r.satyamC}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FOOTER */}
      <footer className="site-footer">
        Viewing This WebSite Is On Your Own Risk. All information shown is only
        for information purposes. We are not associated with any illegal Matka
        business or gamblers. Gambling may be illegal in your country. We are
        not responsible for any issues or scams. Please quit if you do not agree.
      </footer>
    </div>
  );
}

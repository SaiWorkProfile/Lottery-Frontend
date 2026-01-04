import { useEffect, useState } from "react";
import API from "../api/api";

export default function BettingTable() {

  const rows = [
    { name: "DISAWAR-A", sr: "A", color: "row-yellow" },
    { name: "DISAWAR-B", sr: "B", color: "row-orange" },
    { name: "DISAWAR-C", sr: "C", color: "row-green" },
  ];

  const numbers = ["0","1","2","3","4","5","6","7","8","9"];

  const [data, setData] = useState({ A:{}, B:{}, C:{} });
  const [result, setResult] = useState(null);

  /* 🔹 Fetch ADMIN result column */
  useEffect(() => {
    API.get("/current-draw").then(res => setResult(res.data));
  }, []);

  const onChange = (row, num, value) => {
    if (value !== "" && !/^\d+$/.test(value)) return;

    setData(prev => ({
      ...prev,
      [row]: { ...prev[row], [num]: value }
    }));
  };

  const calcQty = row =>
    Object.values(data[row]).reduce((s,v)=>s+Number(v||0),0);

  const calcAmount = row => calcQty(row) * 11;

  const totalQty = calcQty("A") + calcQty("B") + calcQty("C");
  const totalAmount = totalQty * 11;

  const getResultValue = sr => {
    if (!result) return "--";
    if (sr === "A") return result.satyamA;
    if (sr === "B") return result.satyamB;
    if (sr === "C") return result.satyamC;
    return "--";
  };

  return (
    <div className="table-wrapper center-table">
      <table className="bet-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Sr</th>
            <th>Win</th>
            {numbers.map(n => <th key={n}>{n}</th>)}
            <th>Qty</th>
            <th>Amount</th>
            <th>{result?.drawTime || "--"}</th>
          </tr>
        </thead>

        <tbody>
          {rows.map(row => (
            <tr key={row.sr} className={row.color}>
              <td className="name">{row.name}<br/>DELUXE</td>
              <td>{row.sr}</td>
              <td>100</td>

              {numbers.map(n => (
                <td key={n}>
                  <input
                    className="num-box"
                    value={data[row.sr][n] || ""}
                    onChange={e=>onChange(row.sr,n,e.target.value)}
                  />
                </td>
              ))}

              <td><b>{calcQty(row.sr)}</b></td>
              <td><b>{calcAmount(row.sr)}</b></td>

              {/* 🔴 ADMIN RESULT COLUMN */}
              <td className="result-cell">
                <b>{getResultValue(row.sr)}</b>
              </td>
            </tr>
          ))}

          <tr className="total-row">
            <td colSpan="13" style={{textAlign:"right"}}>Total</td>
            <td><b>{totalQty}</b></td>
            <td><b>{totalAmount}</b></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

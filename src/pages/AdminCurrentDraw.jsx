import { useState } from "react";
import adminApi from "../api/api";

export default function AdminCurrentDraw() {
  const [f, setF] = useState({});

  const save = async () => {
    try {
      await adminApi.post("/admin/current-draw", f);
      alert("Saved");
    } catch (e) {
      alert("Save failed");
    }
  };

  return (
    <div className="admin-page">
      <h3>Admin Current Draw</h3>

      <input placeholder="Draw Time"
        onChange={e => setF({ ...f, drawTime: e.target.value })} />

      <input placeholder="SATYAM-A"
        onChange={e => setF({ ...f, satyamA: e.target.value })} />

      <input placeholder="SATYAM-B"
        onChange={e => setF({ ...f, satyamB: e.target.value })} />

      <input placeholder="SATYAM-C"
        onChange={e => setF({ ...f, satyamC: e.target.value })} />

      <button onClick={save}>Save</button>
    </div>
  );
}

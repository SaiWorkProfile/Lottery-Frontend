import { useState } from "react";
import adminApi from "../api/api";

export default function AdminDrawSettings() {
  const [visitors, setVisitors] = useState("");
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(false);

  const save = async () => {
    if (!visitors || !time) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      await adminApi.post("/admin/draw-settings", {
        visitors: Number(visitors),
        nextDrawTime: time
      });

      alert("Saved successfully");
    } catch (err) {
      console.error(err);
      alert("Error saving data. Check backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-page">
      <h3>Admin Draw Settings</h3>

      <input
        type="number"
        placeholder="Visitors"
        value={visitors}
        onChange={e => setVisitors(e.target.value)}
      />

      <input
        type="text"
        placeholder="Next Draw Time (01:15 PM)"
        value={time}
        onChange={e => setTime(e.target.value)}
      />

      <button onClick={save} disabled={loading}>
        {loading ? "Saving..." : "Save"}
      </button>
    </div>
  );
}

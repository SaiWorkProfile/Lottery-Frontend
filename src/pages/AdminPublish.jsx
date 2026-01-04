import { useNavigate } from "react-router-dom";
import adminApi from "../api/api";

export default function AdminPublish() {
  const navigate = useNavigate();

  const publish = async () => {
    if (!window.confirm("Publish result?")) return;

    try {
      await adminApi.post("/admin/publish-result");
      alert("Result published");
      navigate("/results");
    } catch (e) {
      console.error(e);
      alert("Publish failed");
    }
  };

  return (
    <div className="admin-page">
      <h3>Publish Result</h3>
      <button onClick={publish}>Publish Result</button>
    </div>
  );
}

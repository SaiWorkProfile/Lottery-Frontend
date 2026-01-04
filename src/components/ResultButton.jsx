import { useNavigate } from "react-router-dom";

export default function ResultButton() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <button
        onClick={() => navigate("/results")}
        style={{
          background: "linear-gradient(#ff4444, #b30000)",
          color: "#fff",
          fontSize: "18px",
          padding: "10px 30px",
          borderRadius: "12px",
          border: "3px solid #e7e425ff",
          cursor: "pointer"
        }}
      >
        Result
      </button>
    </div>
  );
}

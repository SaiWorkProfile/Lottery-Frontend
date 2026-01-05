import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Results from "./pages/Results";
import AdminDrawSettings from "./pages/AdminDrawSettings";
import AdminCurrentDraw from "./pages/AdminCurrentDraw";
import AdminPublish from "./pages/AdminPublish";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
  {/* USER */}
  <Route path="/" element={<Home />} />
  <Route path="/results" element={<Results />} />

  {/* 🔒 ADMIN – OBFUSCATED URL */}
  <Route path="/x9p7kA2_2026/admin/draw" element={<AdminDrawSettings />} />
  <Route path="/x9p7kA2_2026/admin/current" element={<AdminCurrentDraw />} />
  <Route path="/x9p7kA2_2026/admin/publish" element={<AdminPublish />} />
</Routes>

    </BrowserRouter>
  );
}

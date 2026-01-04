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
        {/* USER PAGES */}
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />

        {/* ADMIN PAGES (NO LOGIN, DIRECT URL) */}
        <Route path="/admin/draw" element={<AdminDrawSettings />} />
        <Route path="/admin/current" element={<AdminCurrentDraw />} />
        <Route path="/admin/publish" element={<AdminPublish />} />
      </Routes>
    </BrowserRouter>
  );
}

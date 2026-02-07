import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import UserPage from "./features/users/UserPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/users" replace />} />
        <Route path="/users" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

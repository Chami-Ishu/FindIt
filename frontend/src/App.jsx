import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AuthPage from "./pages/AuthPage";
import { Link } from "react-router-dom";
import ItemsPage from "./pages/ItemsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage type="login" />} />
        <Route path="/register" element={<AuthPage type="register" />} />
        <Route path="/forgot-password" element={<AuthPage type="forgot" />} />
        <Route path="/lost-items" element={<ItemsPage type="Lost" />} />
        <Route path="/found-items" element={<ItemsPage type="Found" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
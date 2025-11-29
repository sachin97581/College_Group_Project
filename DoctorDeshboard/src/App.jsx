import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DoctorDashboard from "./pages/DoctorDashboard";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DoctorDashboard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

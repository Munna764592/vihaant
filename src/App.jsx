import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./App.css";
// import LoginRegister from "./components/login-registration";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import VEDUCATER from "./components/videopg";
import Student from "./components/Student";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/video" element={<VEDUCATER />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;

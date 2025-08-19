import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import StudentLogin from "./Pages/Login/Login";
import StudentRegister from "./Pages/Login/Register";
import NotFound from "./Pages/NotFound";
import Navbar from "./components/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/studentRegister" element={<StudentRegister />} />
        <Route path="/studentLogin" element={<StudentLogin />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import NotFound from "../Pages/NotFound";
import WritingsPage from "../Pages/WritingsPage";
import GrammarsPage from "../Pages/GrammarsPage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/writings" element={<WritingsPage />} />
      <Route path="/grammars" element={<GrammarsPage />} />
      {/* <Route
        path="/services/:id"
        element={
          <RequireAuth>
            <ServiceDetails />
          </RequireAuth>
        }
      /> */}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;

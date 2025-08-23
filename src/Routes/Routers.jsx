import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import NotFound from "../Pages/NotFound";
import WritingsPage from "../Pages/Writings/WritingsPage";
import GrammarsPage from "../Pages/Grammars/GrammarsPage";
import ParagraphsPage from "../Pages/Writings/ParagraphsPage";
import LetterPage from "../Pages/Writings/LetterPage";
import EmailPage from "../Pages/Writings/EmailPage";
import CompositionsPage from "../Pages/Writings/CompositionsPage";
import ApplicationsPage from "../Pages/Writings/ApplicationsPage";

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
      <Route path="/writings/paragraphs" element={<ParagraphsPage />} />
      <Route path="/writings/compositions" element={<CompositionsPage />} />
      <Route path="/writings/letters" element={<LetterPage />} />
      <Route path="/writings/applications" element={<ApplicationsPage />} />
      <Route path="/writings/emails" element={<EmailPage />} />
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

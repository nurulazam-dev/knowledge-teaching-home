import { useLocation } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Routers from "../Routes/Routers";
import Footer from "../components/Shared/Footer";

const Layout = () => {
  const location = useLocation();

  const hideFooter = ["/login", "/register"].some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col">
        <Routers />
      </main>
      {!hideFooter && <Footer />}
    </>
  );
};

export default Layout;

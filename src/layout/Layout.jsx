import { useLocation } from "react-router-dom";
import Routers from "../Routes/Routers";
import Footer from "../components/Shared/Footer";
import Header from "../components/Shared/Header";

const Layout = () => {
  const location = useLocation();

  const hideFooter = ["/login", "/register"].some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col bg-gradient-to-b from-[#050d1a] to-[#0a1629] text-white">
        <Routers />
      </main>
      {!hideFooter && <Footer />}
    </>
  );
};

export default Layout;

import { useLocation } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import Routers from "../Routes/Routers";
import Header from "../components/Shared/Header";

const Layout = () => {
  const location = useLocation();

  const hideFooter = ["/login", "/register"].some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      <Header />
      <main>
        <Routers />
      </main>
      {!hideFooter && <Footer />}
    </>
  );
};

export default Layout;

import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./Footer";

const Layout = () => {
  
  return (
    <>
      <Navbar />
      <main className="full-height">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Layout;

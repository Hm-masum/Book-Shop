import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="px-1 md:px-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;

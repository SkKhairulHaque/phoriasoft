import { Outlet } from "react-router-dom";
import NaveBar from "./naveBar/NaveBar";
import Footer from "./footer/Footer";

const AppLayout = () => {
  return (
    <>
      <NaveBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;

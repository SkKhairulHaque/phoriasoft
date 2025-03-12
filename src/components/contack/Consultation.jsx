import Footer from "../footer/Footer";
import NaveBar from "../naveBar/NaveBar";
import Img from "./Img";
import Inpute from "./Inpute";
import StayContact from "./StayContact";

const Contact = () => {
  return (
    <>
      <NaveBar />
      <div className="w-full min-h-screen ">
        <div className="w-full h-full flex flex-col lg:flex-row ">
          <Inpute />
          <Img />
        </div>
        <StayContact />
      </div>
      <Footer />
    </>
  );
};

export default Contact;

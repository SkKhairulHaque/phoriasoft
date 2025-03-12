import Img from "./Img";
import Inpute from "./Inpute";
import StayContact from "./StayContact";

const Consultation = () => {
  return (
    <div className="w-full min-h-screen ">
      <div className="w-full h-full flex flex-col lg:flex-row ">
        <Inpute />
        <Img />
      </div>
      <StayContact />
    </div>
  );
};

export default Consultation;

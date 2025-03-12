import NaveLeft from "./naveItems/NaveLeft";
import NaveMiddel from "./naveItems/NaveMiddel";
import NaveRight from "./naveItems/NaveRight";

const NaveBar = () => {
 
  
  return (
    <div className="w-full bg-[#fff] flex items-center justify-between px-[5vw] py-3 relative z-999 ">
      <NaveLeft />
      <NaveMiddel />
      <NaveRight  />
    </div>
  );
};

export default NaveBar;

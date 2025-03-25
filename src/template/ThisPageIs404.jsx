import { useNavigate } from "react-router-dom";
import Button from "./button/Button";

const ThisPageIs404 = () => {
  const navigate = useNavigate();
  const handelClick = () => {
    navigate(-1);
  };
  return (
    <div className="w-full h-screen bg-primary flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl mb-5 font-bold ">404 Not Found</h1>
        <h2 className="text-2xl font-semibold mb-5  ">
          This Page Is Not Available
        </h2>
        <div className=" h-12 flex items-center justify-center text-xl">
          <Button
            name="Go Back"
            fnc={handelClick}
            style="cursor-pointer bg-black text-white px-5 py-2 rounded-[50px] text-xl font-light hover:bg-[#ff7e00] duration-400 hover:text-[1rem] outline-none "
          />
        </div>
      </div>
    </div>
  );
};

export default ThisPageIs404;

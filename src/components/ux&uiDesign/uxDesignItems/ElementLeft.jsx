import { Button } from "../../../template";

const ElementLeft = () => {
  return (
    <div className="leftElement w-full lg:w-1/2 lg:min-h-[100vh] border-1 border-primary font-poppins ">
      {/* ux & ui */}
      <section className="UxUi w-full lg:h-[80vh] py-[5vw] px-[5vw] lg:py-[10vw] lg:pl-[5vw]  ">
        <div className="w-full lg:w-[20vw]">
          <h3 className="text-secondary border-1 lg:border-2 border-black w-fit rounded-[7px] px-1 py-1 font-bold">
            UX
          </h3>
          <div className="w-full flex justify-between items-center my-5 lg:my-10 ">
            <h1 className="inline-block font-medium lg:text-[1.1vw] ">
              UX - & UI design
            </h1>
            <img
              src="/Slicing/header/arrow-4.png"
              alt=""
              className="inline-block "
            />
          </div>
          <h1 className="font-medium lg:text-[1.33vw]">
            Boost Your Brand with Smart <br />
            UX/UI Strategies
          </h1>
          <p className="mt-5 lg:mt-10 text-[#797979] lg:text-[1.05rem]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
            accusantium.
          </p>
          <img
            src="Slicing/portfolio/consulting-image .png"
            alt=""
            className="mt-5 w-full block lg:hidden  "
          />
        </div>
      </section>

      <div className="w-[90%] lg:w-[80%] h-[1.2px] mx-auto bg-primary "></div>
      {/* marketing */}
      <section className="marketing w-full lg:h-[80vh] py-[5vw] px-[5vw] lg:py-[10vw] lg:pl-[5vw]  ">
        <div className="w-full lg:w-[22.5vw]  ">
          <img src="/Slicing/header/marketing.png" alt="" />
          <div className="flex items-center justify-between my-[3vw] ">
            <h1 className="text-2xl lg:text-[1.3vw] font-medium">Marketing</h1>
            <img src="/Slicing/header/arrow-4.png" alt="" />
          </div>
          <h1 className="font-semibold my-5 lg:text-[1.50vw]">
            Boost Your Brand with Proven <br />
            Marketing Strategis
          </h1>
          <p className=" lg:my-[3vw] text-[#797979]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo,
            possimus sunt? Quo!
          </p>
          <img
            src="Slicing/portfolio/consulting-image .png"
            alt=""
            className="mt-5 w-full block lg:hidden  "
          />
        </div>
        <Button
          name="View More Services"
          style=" w-full py-6 px-20 bg-[black] text-white mt-5 text-nowrap lg:mt-0 "
        />
      </section>
    </div>

    // -------------
  );
};

export default ElementLeft;

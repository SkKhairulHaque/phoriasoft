import { Button } from "../../template";
import ArrowImg from "../../../public/Slicing/contact us/arrow .png";

const StayContact = () => {
  return (
    <div className="w-full lg:h-[50vh] flex flex-col lg:flex-row font-poppins ">
      <section className="w-full lg:w-1/2 h-full px-[5vw] lg:px-0 lg:pl-[10vw] pt-[5vw] ">
        <h4 className="tracking-[2px] lg:text-[1.1rem] uppercase flex items-center ">
          Stay Connected{" "}
          <span className="inline-block w-[1.5rem] h-[1px] bg-black ml-5 "></span>
        </h4>
        <h1 className="text-3xl lg:text-[2.5vw] font-light mt-3 ">
          Sign up to
        </h1>
        <h1 className="text-3xl lg:text-[2.5vw] font-medium mt-1 lg:-mt-2 ">
          Our Newsletter
        </h1>
        <p className="mt-5 lg:text-[0.9rem] ">
        We're a national and international moving company based in India.<br />
        Our target audience includes people relocating <br />
        across states and overseas.
        </p>
      </section>
      <section className="w-full lg:w-1/2 h-full relative lg:pt-[8vw] lg:pl-[8vw] overflow-hidden ">
        <div
          className=" w-[20rem] h-[20rem] lg:w-[30rem] lg:h-[30rem] bg-[#F0F0F0] absolute rounded-full -bottom-36 lg:-bottom-40 right-1 lg:right-50 z-49 
      "
        ></div>
        <div className="z-50 w-full mt-5 lg:mt-0 relative px-[5vw] lg:px-0 ">
          <h2 className="text-xl lg:text-[2vw] ">Enter Your </h2>
          <h2 className="text-xl lg:text-[2vw] lg:-mt-3 ">email-address</h2>
          <h6 className="my-4 lg:my-8 tracking-[2px] uppercase text-[15px] ">
            stay in toch
          </h6>
          <form className="w-full flex items-center ">
            <input
              required
              type="email"
              placeholder="Enter your email address"
              className="bg-transparent border-b-2 w-full px-[5vw] lg:px-0 lg:w-[20vw] py-2 outline-none "
            />
            <Button
              name=""
              img={ArrowImg}
              imgS="lg:w-[4rem] w-[3rem] h-[3rem] lg:h-[4rem] bg-gradient-to-r from-[#F05923] to-[#F9821D] rounded-full py-3 lg:py-5 px-3 lg:px-5 ml-2"
              alt=""
            />
          </form>
        </div>
      </section>
    </div>
  );
};

export default StayContact;

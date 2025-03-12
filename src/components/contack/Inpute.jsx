import { Button } from "../../template";

const Inpute = () => {
  return (
    <div className="w-full lg:w-2/3 lg:h-screen bg-[#F6F6F6] px-[5vw] py-[5vw] font-poppins ">
      <h4 className="flex items-center">
        The Blog{" "}
        <span className="w-[1.2rem] h-[2px] bg-black inline-block ml-3"></span>
      </h4>
      <h1 className="text-2xl lg:text-[5vw] my-4 ">
        Free{" "}
        <span className="inline-block font-medium lg:font-bold ">
          Consultation
        </span>
      </h1>
      <form action="" className="">
        <section className="flex flex-col lg:flex-row w-full justify-between mb-7">
          <div>
            <label htmlFor="FirstName" className="block mb-3">
              First name
            </label>
            <input
              required
              type="text"
              name=""
              id="FirstName"
              className="bg-white h-[7vw] lg:h-[3vw] w-full lg:w-[27vw] lg:px-[1vw] "
            />
          </div>
          <div>
            <label htmlFor="LastName" className="block mt-3 lg:mt-0 mb-3">
              Last name
            </label>
            <input
              required
              type="text"
              name=""
              id="LastName"
              className="bg-white h-[7vw] lg:h-[3vw] w-full lg:w-[27vw] px-[1vw] "
            />
          </div>
        </section>
        <section className="flex flex-col lg:flex-row w-full justify-between mb-7">
          <div>
            <label htmlFor="Phone" className="block mb-3">
              Phone number
            </label>
            <input
              required
              type="text"
              name=""
              id="Phone"
              className="bg-white h-[7vw] lg:h-[3vw] w-full lg:w-[27vw] px-[1vw] "
            />
          </div>
          <div>
            <label htmlFor="Email" className="block lg:mt-0 mt-4 mb-3">
              Email address
            </label>
            <input
              required
              type="text"
              name=""
              id="Email"
              className="bg-white h-[7vw] lg:h-[3vw] w-full lg:w-[27vw] px-[1vw] "
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="HelpYou" className="block mb-3">
              How can we help you?
            </label>
            <textarea
              rows={10}
              type="text"
              id="HelpYou"
              className="w-full h-[40vw] lg:h-[10vw] bg-white mb-7"
            />
          </div>
        </section>
        <Button
          name="Send Your Information"
          style="uppercase w-100 py-3 lg:py-4 bg-gradient-to-r from-[#F05923] to-[#F9821D] font-bold font-bold tracking-[2px] text-white"
        />
      </form>
    </div>
  );
};

export default Inpute;

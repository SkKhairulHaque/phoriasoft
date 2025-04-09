import Button from "../../../template/button/Button";

const SectionTwo = () => {
  return (
    <div className="w-full min-h-[90vh]  px-[5vw] pt-[5vw] flex flex-col-reverse sm:flex-row items-center justify-center ">
      <div className="w-full sm:w-1/2 h-full pb-[5vw] flex items-center justify-center ">
        <img
          src="public/AboutUs/about02-01.jpg"
          alt=""
          className="lg:w-[80%] lg:h-[80%] object-contain bg-center"
        />
      </div>
      <div className="w-full sm:w-1/2 h-full ">
        <h4 className="text-[#ff7e00] flex items-center lg:text-lg xl:text-xl mt-15 ">
          ABOUT OUR AGENCY{" "}
          <span className="w-[4rem] h-[1px] bg-[#ff7e00] inline-block ml-5 "></span>
        </h4>
        <h1 className="text-3xl lg:text-[3.5vw] xl:text-[2.2vw] font-medium ">
          Your Ultimate Solution
        </h1>
        <p className="mt-10 text-[#94959E] text-lg lg:text-[1.5vw] xl:text-xl ">
          Lorem Ipsum has been the industry's standard dummy text ever since the{" "}
          <br />
          1500s, when an unknown printer took a galley.Lorem Ipsum has been the{" "}
          <br />
          industry's standard dummy text ever since the 1500s, when an unknownbr{" "}
          <br />
          printer took a galley.
        </p>
        <div className="w-full flex items-center justify-between mt-20 ">
          <div>
            <h1 className="font-medium text-2xl lg:text-[3vw] xl:text-5xl text-[#ff7e00] text-center ">
              27k
            </h1>
            <h2 className="font-light text-[3.5vw] lg:text-xl xl:text-2xl text-center text-nowrap ">
              Active Clients
            </h2>
          </div>
          <div>
            <h1 className="font-medium text-2xl lg:text-[3vw] xl:text-5xl text-[#ff7e00] text-center ">
              985+
            </h1>
            <h2 className="font-light text-[3.5vw] lg:text-xl xl:text-2xl text-center text-nowrap ">
              Projects Done
            </h2>
          </div>
          <div>
            <h1 className="font-medium text-2xl lg:text-[3vw] xl:text-5xl text-[#ff7e00] text-center ">
              78+
            </h1>
            <h2 className="font-light text-[3.5vw] lg:text-xl xl:text-2xl text-center text-nowrap ">
              Team membber{" "}
            </h2>
          </div>
        </div>
        <Button
          name="MORE DETAILS"
          style="uppercase bg-linear-to-r from-[#F27734] to-[#FBBE30] font-medium text-white pl-8 pr-2 py-2 rounded-full flex justify-between items-center mt-15 "
          img="public/AboutUs/arrow-right-s-line.svg"
          imgS="bg-white rounded-full ml-5 p-1 "
        />
      </div>
    </div>
  );
};

export default SectionTwo;

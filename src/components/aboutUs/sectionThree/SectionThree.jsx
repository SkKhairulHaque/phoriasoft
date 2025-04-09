import Button from "../../../template/button/Button";

const SectionThree = () => {
  return (
    <div className="w-full min-h-[90vh] px-[5vw] flex flex-col lg:flex-row items-center justify-between  ">
      <div className="w-full lg:w-1/2 h-full ">
        <h4 className="text-[#ff7e00] flex items-center lg:text-lg xl:text-xl mt-15 ">
          ABOUT OUR AGENCY{" "}
          <span className="w-[4rem] h-[1px] bg-[#ff7e00] inline-block ml-5 "></span>
        </h4>
        <h1 className="text-3xl lg:text-[3.5vw] xl:text-[2.2vw] font-medium ">Your Ultimate Solution</h1>
        <p className="mt-10 text-[#94959E] text-lg lg:text-[1.5vw] xl:text-xl">
          Lorem Ipsum has been the industry's standard dummy text ever since the{" "}
          <br />
          1500s, when an unknown printer took a galley.Lorem Ipsum has been the{" "}
          <br />
          industry's standard dummy text ever since the 1500s, when an unknownbr{" "}
          <br />
          printer took a galley.
        </p>
        <div className="w-full flex flex-col mt-10 "></div>
        <Button
          name="MORE DETAILS"
          style="uppercase bg-linear-to-r from-[#F27734] to-[#FBBE30] font-medium text-white pl-8 pr-2 py-2 rounded-full flex justify-between items-center lg:mt-15 mb-10 lg:mb-0 "
          img="public/AboutUs/arrow-right-s-line.svg"
          imgS="bg-white rounded-full ml-5 p-1 "
        />
      </div>
      {/* section Right */}
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center ">
        <img src="public/AboutUs/Hiring_model.png" alt="" />
      </div>
    </div>
  );
};

export default SectionThree;

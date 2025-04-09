const OurTeamMember = () => {
  return (
    <div className="w-full h-[90vh] px-[5vw] ">
      <div className="flex flex-col items-center">
        <h4 className="text-[#ff7e00] flex items-center lg:text-lg xl:text-2xl mt-15 text-center ">
          <span className="w-[4rem] h-[1px] bg-[#ff7e00] inline-block mr-5 "></span>
          OUR GREAT
          <span className="w-[4rem] h-[1px] bg-[#ff7e00] inline-block ml-5 "></span>
        </h4>
        <h1 className=" text-[8vw] lg:text-[3.5vw] xl:text-[2.5vw] font-medium mt-2 text-center ">
          Our Team Member
        </h1>
        <p className="text-lg lg:text-[1.5vw] xl:text-xl text-center mt-5 lg:mt-10 text-[#7A8AA1] ">
          Lorem Ipsum has been the industry's standard dummy text ever since the{" "}
          <br />
          1500s, when an unknown printer took a galley.
        </p>
      </div>
    </div>
  );
};

export default OurTeamMember;

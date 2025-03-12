const OurProjectSection1 = () => {
  return (
    <div className="w-full h-[42vh] lg:h-[25vw] px-[5vw] lg:px-[10vw] lg:flex justify-between pt-[5vw]  relative ">
      <div className="part-1 w-full lg:w-1/2 h-[20vw] relative ">
        <h4 className="flex items-center gap-4">
        Our Services
          <span className="w-[1.5rem] h-[1.5px] bg-black inline-block"></span>
        </h4>
        <h1 className="text-2xl lg:text-[5vw] mt-2 lg:mt-5 ">We create</h1>
        <h1 className="text-2xl lg:text-[5vw] font-medium lg:font-bold -mt-[2vw]">Brands</h1>
      </div>
      <div className="part-2 relative h-[28vh] lg:h-[18vw] lg:flex lg:flex-col lg:justify-between">
        <p className="lg:font-medium mt-4 lg:mt-[5vw] ">
        Our mission is to propel business success through<br />
        premium UX design, strategic brand management<br />
        and impactful training programs.
        </p>
        <h2 className="text-2xl lg:text-[1.5vw] font-bold relative ml-[50vw] lg:ml-[15vw] mt-5 lg:mt-0 ">
          <span className="inline-block bg-gradient-to-r from-[#F05923] to-[#F9821D] bg-clip-text text-transparent font-bold">Our </span> Project
        </h2>
      </div>
    </div>
  );
};

export default OurProjectSection1;

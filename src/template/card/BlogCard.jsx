const BlogCard = ({ img, projectName, date, description, name, time, mainDiv, minImgStyle, imgParent }) => {
  return (
    <div className={`${mainDiv} rounded-[15px] lg:rounded-3xl overflow-hidden shrink-0`}>
      <div className={`w-full lg:h-[30vh] ${imgParent} `}>
        <img src={img} alt="" className={`lg:rounded-b-3xl ${minImgStyle}`} />
      </div>
      <div className={`flex items-center mt-4 lg:mt-0 `}>
        <h6
          className={`px-2 py-[1px] bg-gray-400 text-[13px] text-white rounded-[50px]`}
        >
          {projectName}
        </h6>
        <h6 className={`ml-3 text-[13px] text-gray-400 `}>{date}</h6>
      </div>
      <h3 className={`my-2 px-2 text-[1.2rem] lg:text-[1.3rem] font-medium `}>{description}</h3>
      <div className={`flex items-center px-2 `}>
        <h6 className={`text-[13px] text-gray-400`}>{name}</h6>
        <img src="/Slicing/blog/dot.png" alt="" className="mx-2" />
        <h6 className={`text-[13px] text-gray-400`}>{time}</h6>
      </div>
    </div>
  );
};

export default BlogCard;

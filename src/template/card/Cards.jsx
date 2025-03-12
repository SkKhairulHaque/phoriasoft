import Button from "../button/Button";

const Cards = ({
  img,
  projectName,
  name,
  styles,
  imgRaper,
  imgStyle,
  mainDiv,
  imgDetal,
  projectNameStyle,
}) => {
  return (
    <div className="px-3 py-3">
      <div
        className={`lg:w-[25vw] lg:h-[20vw] bg-white border-3 border-black overflow-hidden ${mainDiv}`}
      >
        <div className={`lg:w-full px-2 py-2 lg:h-[15vw] ${imgRaper} `}>
          <img src={img} alt="" className={`${imgStyle}`} />
        </div>
        <div className={`w-full lg:h-[5vw] bg-black flex items-center justify-between px-[1.5vw] ${imgDetal} `} >
          <div className="flex items-center ">
            <div className="w-[.7rem] h-[.7rem] rounded-full bg-[#01FFF4]  "></div>
            <h1 className={`lg:text-[1.4vw] ml-3 ${projectNameStyle}`}>{projectName}</h1>
          </div>
          <div>
            <Button name={name} style={styles} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

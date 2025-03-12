import { useState } from "react";
import Cards from "../../../template/card/Cards";
import img1 from "/Slicing/portfolio/ux design-image .png";
import img2 from "/Slicing/portfolio/website design-image .png";
import img3 from "/Slicing/portfolio/marketing-image .png";
import img4 from "/Slicing/portfolio/workshops-image .png";
import img5 from "/Slicing/portfolio/consulting-image .png";
import img6 from "/Slicing/portfolio/personal branding-image .png";

const PortfolioCards = () => {
  const [cardsDetils, setCardsDetils] = useState([
    { projectName: "UX Design", name: "VIEW", img: img1 },
    { projectName: "WebSite Design", name: "VIEW", img: img2 },
    { projectName: "Marketing", name: "VIEW", img: img3 },
    { projectName: "Workshops", name: "VIEW", img: img4 },
    { projectName: "Consulting", name: "VIEW", img: img5 },
    { projectName: "Personal Branding", name: "VIEW", img: img6 },
  ]);

  return (
    <div className="w-full px-[5vw] py-[5vw] relative  text-white flex flex-wrap justify-center ">
      {cardsDetils.map((card) => (
        <div key={card.projectName}>
          <Cards
            key={card.projectName}
            img={card.img}
            projectName={card.projectName}
            imgRaper={`${
              card.projectName == "Personal Branding"
                ? "bg-[#A6B9CC] "
                : "bg-white  "
            }`}
            name={card.name}
            styles="bg-[white] text-[black] font-semibold  py-1 px-4 lg:py-2 text-lg lg:text-[1rem]"
            imgStyle="w-full"
            mainDiv="h-[33vh] "
            imgDetal="h-[7vh] "
          />
        </div>
      ))}
    </div>
  );
};

export default PortfolioCards;

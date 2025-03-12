import { useState } from "react";
import { BlogCard } from "../../../template";
import dot from "/Slicing/blog/dot.png";
import img1 from "/Slicing/header/about-image.jpg";
import img2 from "/Slicing/blog/deelopment-image .png";
import img3 from "/Slicing/blog/design-image .png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const BlogCards = () => {
  const [cardDetiles, setCardDetiles] = useState([
    {
      img: img1,
      projectName: "Desigen",
      date: "30.01.2025",
      description: "Die grobten Marketing-Trends 2025: Was Unternehmen mussen",
      name: "John Doe",
      dot: dot,
      time: "18 min",
    },
    {
      img: img2,
      projectName: "Development",
      date: "30.01.2025",
      description: "Die grobten Marketing-Trends 2025: Was Unternehmen mussen",
      name: "John Doe",
      dot: dot,
      time: "18 min",
    },
    {
      img: img3,
      projectName: "Desigen",
      date: "30.01.2025",
      description: "Die grobten Marketing-Trends 2025: Was Unternehmen mussen",
      name: "John Doe",
      dot: dot,
      time: "18 min",
    },
    {
      img: img1,
      projectName: "Desigen",
      date: "30.01.2025",
      description: "Die grobten Marketing-Trends 2025: Was Unternehmen mussen",
      name: "John Doe",
      dot: dot,
      time: "18 min",
    },
  ]);

  return (
    <div className="w-full h-[43vh] lg:h-[45vh] px-[5vw] lg:px-[10vw] font-poppins flex flex-nowrap shrink-0 overflow-x-hidden gap-x-5 ">
      <Swiper
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        breakpoints={{
          100: {
            slidesPerView: 1.2,
            spaceBetween: 1.5,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {cardDetiles.map((card, index) => (
          <div key={index}>
            <SwiperSlide>
              <BlogCard
                img={card.img}
                projectName={card.projectName}
                date={card.date}
                description={card.description}
                name={card.name}
                time={card.time}
                minImgStyle="lg:rounded-3xl rounded-b-[15px] "
                imgParent="h-[19vh]"
                mainDiv="w-[70vw] lg:w-[25vw] h-full"
              />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default BlogCards;

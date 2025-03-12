import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ElementLeft from "./uxDesignItems/ElementLeft";
import ElementRight from "./uxDesignItems/ElementRight";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const UxUiDesign = () => {
  const merketingRef = useRef(null);
  const rightRef = useRef(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: merketingRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: rightRef.current,
      // markers: true,
    });
  });

  return (
    <div
      ref={merketingRef}
      className="w-full min-h-screen lg:pl-[10vw] lg:pt-[5vw] lg:pb-[8vw] font-poppins flex relative  "
    >
      <ElementLeft />
      <div ref={rightRef} className="absolute hidden lg:inline-block ">
        <ElementRight />
      </div>
    </div>
  );
};

export default UxUiDesign;

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ElementRight = () => {
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".leftElement",
        scrub: 2,
        start: "top top",
        end: "top -70%",
        // markers: true,
      },
    });
    tl.to(".displacement", {
      attr: {
        r: 0,
      },
    });
  });

  return (
    <div className="relative lg:h-[85vh] lg:w-[41vw] mb-[2rem] ml-[40vw] z-20  ">
      <div className="w-full h-[74vh] overflow-hidden relative ">
        <svg
          fill="green"
          preserveAspectRatio="xMidYmin slice"
          className="w-[41vw] h-[85vh] object-cover overflow-hidden"
        >
          <defs>
            <filter id="displacementFilter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.01"
                numOctaves="1"
                result="noise"
              />

              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="150"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>

            <mask id="circleMask">
              <circle
                cx="100"
                cy="100"
                r="1000"
                fill="white"
                className="displacement 1"
                filter="url(#displacementFilter)"
              />
            </mask>
          </defs>

          <g>
            <g className="w-full h-full">
              <image
                href="Slicing/header/about-image.jpg"
                x="0"
                y="0"
                className="h-full "
                style={{ objectFit: "cover", opacity: "1" }}
              ></image>
            </g>
            <g>
              <rect
                x="0"
                y="0"
                className="w-[42vw] h-full"
                mask="url(#circleMask)"
                fill="#FFFFFF"
              />
              <image
                href="Slicing/header/ux-design-image.png"
                x="0"
                y="0"
                mask="url(#circleMask)"
                className="w-full "
                style={{ objectFit: "cover", opacity: "1" }}
              ></image>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default ElementRight;

import gsap from "gsap";
// import GSDevTools from "gsap/all";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import DrawSVGPlugin from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, DrawSVGPlugin);

const WorkflowSection2 = () => {
  const containerRef = useRef();
  const ballRef = useRef();
  const pathRef = useRef();
  const svgPrent = useRef();
  const anatherRef = useRef();

  const container2Ref = useRef();
  const ball2Ref = useRef();
  const path2Ref = useRef();
  const svg2Prent = useRef();
  const anather2Ref = useRef();

  useGSAP(() => {
    const visabal = gsap
      .timeline({
        defaults: {
          fill: "white",
          autoAlpha: 1,
          ease: "elastic(2.5, 1)",
        },
      })
      .to(".Text-1", {}, 0.01)
      .to(".Text-2", {}, 0.06)
      .to(".Text-3", {}, 0.1)
      .to(".Text-4", {}, 0.17)
      .to(".Text-5", {}, 0.28)
      .to(".Text-6", {}, 0.43)
      .to(".Text-7", {}, 0.6);

    const tl = gsap.timeline({
      ease: "none",
      scrollTrigger: {
        trigger: anatherRef.current,
        start: "top 1%",
        end: "top -400%",
        scrub: 3.5,
        pin: true,
        // markers: true,
      },
    });

    tl.to(
      svgPrent.current,
      {
        transform: "translateX(-37%)",
      },
      0
    );
    tl.to(
      ".theCircleShadow",
      {
        motionPath: {
          path: pathRef.current,
          align: pathRef.current,
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
          start: 0,
        },
        duration: 0.99,
      },
      0
    ).add(visabal, 0);
    tl.to(
      ".theCircle",
      {
        motionPath: {
          path: pathRef.current,
          align: pathRef.current,
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
          start: 0,
        },
        duration: 0.99,
      },
      0
    ).add(visabal, 0);
  });

  useGSAP(() => {
    const visabalMobile = gsap
      .timeline({
        defaults: {
          fill: "white",
          autoAlpha: 1,
          ease: "elastic(2.5, 1)",

        },
      })
      .to(".TextMobile-1", {}, 0)
      .to(".TextMobile-2", {}, 0.03)
      .to(".TextMobile-3", {}, 0.07)
      .to(".TextMobile-4", {}, 0.18)
      .to(".TextMobile-5", {}, 0.30)
      .to(".TextMobile-6", {}, 0.38)
      .to(".TextMobile-7", {}, 0.55);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container2Ref.current,
        start: "top 40%",
        end: "top -230%",
        scrub: 2,
        // pin: true,
        // markers: true,
      },
    });

    tl.to(
      ball2Ref.current,
      {
        motionPath: {
          path: path2Ref.current,
          align: path2Ref.current,
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
          pin: true,
          start: 0,
        },
        duration: 0.9,
      },
      0
    );
    tl.to(
      ".theCircleShadowMobile",
      {
        motionPath: {
          path: path2Ref.current,
          align: path2Ref.current,
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
          pin: true,
          start: 0,
        },
        duration: 0.9,
      },
      0
    ).add(visabalMobile, 0);
   
  });

  return (
    <>
      <div
        ref={containerRef}
        className="ptentSvg relative overflow-x-hidden overflow-hidden lg:w-[150vw]  hidden lg:inline-block "
      >
        <div ref={anatherRef} className="z-99 relative lg:w-[1500px]   ">
          <div
            ref={svgPrent}
            className="svgPrent lg:w-[150vw] overflow-x-hidden
           "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 3501.8 1885"
              xmlSpace="preserve"
              className="relative z-50"
              id="svg"
            >
              <g>
                <path
                  ref={pathRef}
                  className="thePath"
                  id="thePath"
                  d="M-10,636C145,540.2,246,457.9,379.3,443.2c65.6-6.4,134.6,10.4,192.6,39.4c20.9,10.4,40.8,22.5,59.6,36
		c49.9,35.9,82,75.4,125.4,112.4c42.3,36.4,96.1,67.9,150.4,85.5c170.7,59,270.4-69.1,352.7-227.9c30.2-56.4,53.3-114.8,91.2-164.9
		c97.3-130.1,301.5-137.1,435.1-25.7c46.4,37.9,85.6,87.5,130.9,126.8c144.5,132,317.3,42.2,445.7-65.5
		c39.8-33.2,73.1-68.9,109.6-104.6c129.4-132.2,293.2-187,461.6-155.6c86.3,15.4,161.9,57,227.4,114
		c274.5,235.8,302.7,652.8,72.1,909.9c-308.6,312.8-549.9,161.2-901.2,266.8c-193,58-161.2,47.4-368.1,136.8"
                  stroke="#212121"
                  strokeWidth="30"
                  fill="none"
                ></path>
              </g>
              <defs>
                <filter
                  id="glow"
                  x="-50%"
                  y="-50%"
                  width="1000%"
                  height="1000%"
                >
                  <feDropShadow
                    dx="0"
                    dy="0"
                    stdDeviation="10"
                    floodColor="#01FFF4"
                  />
                </filter>
              </defs>

              <defs>
                <filter
                  id="shadowWeb"
                  x="-5000%"
                  y="-5000%"
                  width="10000%"
                  height="10000%"
                >
                  <feDropShadow
                    dx="0"
                    dy="0"
                    stdDeviation="200"
                    floodColor="#01FFF4"
                    floodOpacity="1"
                  ></feDropShadow>
                </filter>
                <radialGradient
                  id="whiteToTransparentWeb"
                  cx="50%"
                  cy="50%"
                  r="50%"
                  fx="50%"
                  fy="50%"
                >
                  <stop
                    offset="20%"
                    style={{ stopColor: "#01FFF4", stopOpacity: 0.3 }}
                  />
                  <stop
                    offset="70%"
                    style={{ stopColor: "#01FFF4", stopOpacity: 0 }}
                  />
                </radialGradient>
              </defs>

              <circle
                // ref={ballRef}
                className="theCircle"
                cx="673.1"
                cy="530.9"
                r="14"
                fill="#01FFF4"
                filter="url(#shadowWeb)"
              />
              <circle
                ref={ballRef}
                style={{ opacity: 0.2 }}
                className="theCircleShadow"
                cx="693.1"
                cy="530.9"
                r="350"
                fill="url(#whiteToTransparentWeb)"
              />

              {/* grop-1 */}
              <g>
                <image
                  x="250"
                  y="170"
                  width="40"
                  height="40"
                  href="Slicing/our workflow/verstehen-icon .png"
                  className="img img-1"
                />
                <text
                  x="250"
                  y="240"
                  fill="gray"
                  className="Text-1 text-[1.5rem]  "
                >
                Understanding
                </text>
                <text
                  x="250"
                  y="280"
                  fill="gray"
                  className="Text-1 w-[10vw] bg-green-50 "
                >
                  We deeply engage with
                </text>
                <text
                  x="250"
                  y="300"
                  fill="gray"
                  className="Text-1 w-[10vw] bg-green-50 "
                >
                  the people we work for.
                </text>
                <text
                  x="250"
                  y="320"
                  fill="gray"
                  className="Text-1 w-[10vw] bg-green-50 "
                >
                  By listening and observing,
                </text>
                <text
                  x="250"
                  y="340"
                  fill="gray"
                  className="Text-1 w-[10vw] bg-green-50 "
                >
                  we learn what is truly needed.
                </text>
              </g>

              {/* grop-2 */}
              <g>
                <image
                  x="800"
                  y="300"
                  width="40"
                  height="40"
                  href="Slicing/our workflow/ideenfindung & konzept-icon.png"
                  className="img img-2"
                />
                <text
                  x="800"
                  y="370"
                  fill="gray"
                  className="Text-2 text-[1.5rem] "
                >
                Idea generation & concept
                </text>
                <text
                  x="800"
                  y="410"
                  fill="gray"
                  className="Text-2 w-[10vw] bg-green-50 "
                >
                  In conversations or workshops,
                </text>
                <text
                  x="800"
                  y="430"
                  fill="gray"
                  className="Text-2 w-[10vw] bg-green-50 "
                >
                  we finalize the concept together
                </text>
                <text
                  x="800"
                  y="450"
                  fill="gray"
                  className="Text-2 w-[10vw] bg-green-50 "
                >
                  and create a realistic roadmap
                </text>
                <text
                  x="800"
                  y="470"
                  fill="gray"
                  className="Text-2 w-[10vw] bg-green-50 "
                >
                  for your project.
                </text>
              </g>

              {/* grop-3 */}

              <g>
                <image
                  x="1400"
                  y="400"
                  width="40"
                  height="40"
                  href="Slicing/our workflow/design-icon .png"
                  className="img img-3"
                />

                <text
                  x="1400"
                  y="470"
                  fill="gray"
                  className="Text-3 text-[1.5rem]  "
                >
                  Design
                </text>

                <text
                  x="1400"
                  y="510"
                  fill="gray"
                  className="Text-3 w-[10vw] bg-green-50 "
                >
                  With passion, we shape prototypes
                </text>
                <text
                  x="1400"
                  y="530"
                  fill="gray"
                  className="Text-3 w-[10vw] bg-green-50 "
                >
                  and designs that not only work but inspire.
                </text>
                <text
                  x="1400"
                  y="550"
                  fill="gray"
                  className="Text-3 w-[10vw] bg-green-50 "
                >
                  Our design process is creative,
                </text>
                <text
                  x="1400"
                  y="570"
                  fill="gray"
                  className="Text-3 w-[10vw] bg-green-50 "
                >
                  dynamic, and always in tune with the times.
                </text>
              </g>

              {/* grop-4 */}

              <g>
                <image
                  x="1900"
                  y="20"
                  width="40"
                  height="40"
                  href="Slicing/our workflow/realisation-icon .png"
                  className="img img-4"
                />

                <text
                  x="1900"
                  y="90"
                  fill="gray"
                  className="Text-4 text-[1.5rem]  "
                >
                Realization
                </text>

                <text
                  x="1900"
                  y="130"
                  fill="gray"
                  className="Text-4 w-[10vw] bg-green-50 "
                >
                  In short work phases, known as sprints,
                </text>
                <text
                  x="1900"
                  y="150"
                  fill="gray"
                  className="Text-4 w-[10vw] bg-green-50 "
                >
                  we develop the product step by step.
                </text>
                <text
                  x="1900"
                  y="170"
                  fill="gray"
                  className="Text-4 w-[10vw] bg-green-50 "
                >
                  We remain flexible to easily 
                </text>
                <text
                  x="1900"
                  y="190"
                  fill="gray"
                  className="Text-4 w-[10vw] bg-green-50 "
                >
                  incorporate changes.
                </text>
              </g>

              {/* grop-5 */}

              <g>
                <image
                  x="2600"
                  y="300"
                  width="40"
                  height="40"
                  href="Slicing/our workflow/testing-icon .png"
                  className="img img-5"
                />

                <text
                  x="2600"
                  y="370"
                  fill="gray"
                  className="Text-5 text-[1.5rem]  "
                >
                  Testing
                </text>

                <text
                  x="2600"
                  y="400"
                  fill="gray"
                  className="Text-5 w-[10vw] bg-green-50 "
                >
                  We continuously review what 
                </text>
                <text
                  x="2600"
                  y="420"
                  fill="gray"
                  className="Text-5 w-[10vw] bg-green-50 "
                >
                  we have developed — again and again. 
                </text>
                <text
                  x="2600"
                  y="440"
                  fill="gray"
                  className="Text-5 w-[10vw] bg-green-50 "
                >
                 This allows us to identify and fix weaknesses early
                </text>
                <text
                  x="2600"
                  y="460"
                  fill="gray"
                  className="Text-5 w-[10vw] bg-green-50 "
                >
                  ensuring everything works perfectly.
                </text>
              </g>

              {/* grop-6 */}

              <g>
                <image
                  x="2800"
                  y="700"
                  width="40"
                  height="40"
                  href="Slicing/our workflow/launch-icon.png"
                  className="img img-6"
                />
                <text
                  x="2800"
                  y="770"
                  fill="gray"
                  className="Text-6 text-[1.5rem]  "
                >
                  Launch
                </text>

                <text
                  x="2800"
                  y="810"
                  fill="gray"
                  className="Text-6 w-[10vw] bg-green-50 "
                >
                  Time to celebrate!
                </text>
                <text
                  x="2800"
                  y="830"
                  fill="gray"
                  className="Text-6 w-[10vw] bg-green-50 "
                >
                  The finished product is ready to launch.
                </text>
                <text
                  x="2800"
                  y="850"
                  fill="gray"
                  className="Text-6 w-[10vw] bg-green-50 "
                >
                  We ensure everything runs smoothly.
                </text>
                {/* <text
                  x="2800"
                  y="870"
                  fill="gray"
                  className="Text-6 w-[10vw] bg-green-50 "
                >
                  the insustrys standard
                </text> */}
              </g>

              {/* grop-7 */}

              <g>
                <image
                  x="2200"
                  y="1000"
                  width="40"
                  height="40"
                  href="Slicing/our workflow/betreuung-icon .png"
                  className="img img-7"
                />

                <text
                  x="2200"
                  y="1070"
                  fill="gray"
                  className="Text-7 text-[1.5rem]  "
                >
                 Support
                </text>

                <text
                  x="2200"
                  y="1110"
                  fill="gray"
                  className="Text-7 w-[10vw] bg-green-50 "
                >
                 A long-term partnership for your brand and projects is our promise
                </text>
                <text
                  x="2200"
                  y="1130"
                  fill="gray"
                  className="Text-7 w-[10vw] bg-green-50 "
                >
                  and your advantage. Continuous development, 
                </text>
                <text
                  x="2200"
                  y="1150"
                  fill="gray"
                  className="Text-7 w-[10vw] bg-green-50 "
                >
                  improvement, and analysis are essential for
                </text>
                <text
                  x="2200"
                  y="1170"
                  fill="gray"
                  className="Text-7 w-[10vw] bg-green-50 "
                >
                  the success of every project.
                </text>
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* ---------- */}
      <div
        ref={container2Ref}
        className="ptentSvg relative overflow-x-hidden overflow-hidden lg:hidden inline-block
         "
      >
        <div ref={anather2Ref} className="z-99 relative ">
          <div ref={svg2Prent} className="w-full h-[200vh]  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 814.6 3223.2"
              xmlSpace="preserve"
              className="relative z-50 w-full h-full "
              id="svg"
            >
              <g>
                <path
                  ref={path2Ref}
                  className="theLine jp1"
                  d="M121.7,92.2c12.1,47.8,26.9,96,58.5,134.5c29,35.6,64.5,63,102.6,90.3c52.7,37.2,109.8,69.9,163.6,104
		C612.2,520.1,746,695.7,698.3,897.4c-21.3,91.7-82.7,166.9-161.2,217.5c-65.4,44-143.6,71-211.2,110.7
		c-26.3,15.8-51.4,34.5-71.1,58.2c-36,41.7-48.3,100.5-28.1,151.7c23.1,60.3,76.1,101.8,129.4,136.5c55.9,36,115.7,65.2,173.7,97
		c43.7,24.2,86,50.7,119.6,87.5c134.7,149.5,86.1,433.3,9.6,611.7c-28,63.6-64.3,121.7-112,172.7
		c-56.1,60.5-129.9,117.4-187.5,174.7c-126.5,120.3-164.3,251.5-205.4,416.1"
                  stroke="#212121"
                  strokeWidth="30"
                  fill="none"
                />
              </g>
              <defs>
                <filter
                  id="shadowMobile"
                  x="-5000%"
                  y="-5000%"
                  width="10000%"
                  height="10000%"
                >
                  <feDropShadow
                    dx="0"
                    dy="0"
                    stdDeviation="200"
                    floodColor="#01FFF4"
                    floodOpacity="1"
                  ></feDropShadow>
                </filter>
                <radialGradient
                  id="whiteToTransparentMobile"
                  cx="50%"
                  cy="50%"
                  r="50%"
                  fx="50%"
                  fy="50%"
                >
                  <stop
                    offset="20%"
                    style={{ stopColor: "#01FFF4", stopOpacity: 0.3 }}
                  />
                  <stop
                    offset="70%"
                    style={{ stopColor: "#01FFF4", stopOpacity: 0 }}
                  />
                </radialGradient>
              </defs>

              <circle
                ref={ball2Ref}
                className="theCircleMobile"
                cx="123"
                cy="100"
                r="14"
                fill="#01FFF4"
                filter="url(#shadowMobile)"
              />
              <circle
                style={{ opacity: 0.2 }}
                className="theCircleShadowMobile"
                cx="123"
                cy="100"
                r="250"
                fill="url(#whiteToTransparentMobile)"
              />

              {/* grop-1 */}
              <g>
                <image
                  x="250"
                  y="70"
                  width="40"
                  height="40"
                  href="Slicing/our workflow/verstehen-icon .png"
                  className="img img-1"
                />
                <text
                  x="250"
                  y="140"
                  fill="gray"
                  className="TextMobile-1 text-[1.5rem]  "
                >
                  Verstehen
                </text>
                <text
                  x="250"
                  y="180"
                  fill="gray"
                  className="TextMobile-1 w-[10vw] bg-green-50 "
                >
                  Lorem Ipsum is simply dummy
                </text>
                <text
                  x="250"
                  y="200"
                  fill="gray"
                  className="TextMobile-1 w-[10vw] bg-green-50 "
                >
                  text of the printing and typesetting
                </text>
                <text
                  x="250"
                  y="220"
                  fill="gray"
                  className="TextMobile-1 w-[10vw] bg-green-50 "
                >
                  industry. Lorem Ipsum has been
                </text>
                <text
                  x="250"
                  y="240"
                  fill="gray"
                  className="TextMobile-1 w-[10vw] bg-green-50 "
                >
                  the insustrys standard
                </text>
              </g>

              {/* grop-2 */}
              <g>
                <image
                  x="40"
                  y="400"
                  width="40"
                  height="40"
                  href="Slicing/our workflow/ideenfindung & konzept-icon.png"
                  className="img img-2"
                />
                <text
                  x="40"
                  y="470"
                  fill="gray"
                  className="TextMobile-2 text-[1.5rem] "
                >
                  Ideenfindung & Konzept
                </text>
                <text
                  x="40"
                  y="510"
                  fill="gray"
                  className="TextMobile-2 w-[10vw] bg-green-50 "
                >
                  Lorem Ipsum is simply dummy
                </text>
                <text
                  x="40"
                  y="530"
                  fill="gray"
                  className="TextMobile-2 w-[10vw] bg-green-50 "
                >
                  text of the printing and typesetting
                </text>
                <text
                  x="40"
                  y="550"
                  fill="gray"
                  className="TextMobile-2 w-[10vw] bg-green-50 "
                >
                  industry. Lorem Ipsum has been
                </text>
                <text
                  x="40"
                  y="570"
                  fill="gray"
                  className="TextMobile-2 w-[10vw] bg-green-50 "
                >
                  the insustrys standard
                </text>
              </g>

              {/* grop-3 */}

              <g>
                <image
                  x="300"
                  y="650"
                  width="40"
                  height="40"
                  href="Slicing/our workflow/design-icon .png"
                  className="img img-3"
                />

                <text
                  x="300"
                  y="720"
                  fill="gray"
                  className="TextMobile-3 text-[1.5rem]  "
                >
                  Design
                </text>

                <text
                  x="300"
                  y="760"
                  fill="gray"
                  className="TextMobile-3 w-[10vw] bg-green-50 "
                >
                  Lorem Ipsum is simply dummy
                </text>
                <text
                  x="300"
                  y="780"
                  fill="gray"
                  className="TextMobile-3 w-[10vw] bg-green-50 "
                >
                  text of the printing and typesetting
                </text>
                <text
                  x="300"
                  y="800"
                  fill="gray"
                  className="TextMobile-3 w-[10vw] bg-green-50 "
                >
                  industry. Lorem Ipsum has been
                </text>
                <text
                  x="300"
                  y="820"
                  fill="gray"
                  className="TextMobile-3 w-[10vw] bg-green-50 "
                >
                  the insustrys standard
                </text>
              </g>

              {/* grop-4 */}

              <g>
                <image
                  x="330"
                  y="1270"
                  width="40"
                  height="40"
                  href="Slicing/our workflow/realisation-icon .png"
                  className="img img-4"
                />

                <text
                  x="330"
                  y="1340"
                  fill="gray"
                  className="TextMobile-4 text-[1.5rem]  "
                >
                  Realisation
                </text>

                <text
                  x="330"
                  y="1380"
                  fill="gray"
                  className="TextMobile-4 w-[10vw] bg-green-50 "
                >
                  Lorem Ipsum is simply dummy
                </text>
                <text
                  x="330"
                  y="1400"
                  fill="gray"
                  className="TextMobile-4 w-[10vw] bg-green-50 "
                >
                  text of the printing and typesetting
                </text>
                <text
                  x="330"
                  y="1420"
                  fill="gray"
                  className="TextMobile-4 w-[10vw] bg-green-50 "
                >
                  industry. Lorem Ipsum has been
                </text>
                <text
                  x="330"
                  y="1440"
                  fill="gray"
                  className="TextMobile-4 w-[10vw] bg-green-50 "
                >
                  the insustrys standard
                </text>
              </g>

              {/* grop-5 */}

              <g>
                <image
                  x="300"
                  y="1750"
                  width="40"
                  height="40"
                  href="Slicing/our workflow/testing-icon .png"
                  className="img img-5"
                />

                <text
                  x="300"
                  y="1820"
                  fill="gray"
                  className="TextMobile-5 text-[1.5rem]  "
                >
                  Testing
                </text>

                <text
                  x="300"
                  y="1860"
                  fill="gray"
                  className="TextMobile-5 w-[10vw] bg-green-50 "
                >
                  Lorem Ipsum is simply dummy
                </text>
                <text
                  x="300"
                  y="1880"
                  fill="gray"
                  className="TextMobile-5 w-[10vw] bg-green-50 "
                >
                  text of the printing and typesetting
                </text>
                <text
                  x="300"
                  y="1900"
                  fill="gray"
                  className="TextMobile-5 w-[10vw] bg-green-50 "
                >
                  industry. Lorem Ipsum has been
                </text>
                <text
                  x="300"
                  y="1920"
                  fill="gray"
                  className="TextMobile-5 w-[10vw] bg-green-50 "
                >
                  the insustrys standard
                </text>
              </g>

              {/* grop-6 */}

              <g>
                <image
                  x="350"
                  y="2100"
                  width="40"
                  height="40"
                  href="Slicing/our workflow/launch-icon.png"
                  className="img img-6"
                />
                <text
                  x="350"
                  y="2170"
                  fill="gray"
                  className="TextMobile-6 text-[1.5rem]  "
                >
                  Launch
                </text>

                <text
                  x="350"
                  y="2210"
                  fill="gray"
                  className="TextMobile-6 w-[10vw] bg-green-50 "
                >
                  Lorem Ipsum is simply dummy
                </text>
                <text
                  x="350"
                  y="2230"
                  fill="gray"
                  className="TextMobile-6 w-[10vw] bg-green-50 "
                >
                  text of the printing and typesetting
                </text>
                <text
                  x="350"
                  y="2250"
                  fill="gray"
                  className="TextMobile-6 w-[10vw] bg-green-50 "
                >
                  industry. Lorem Ipsum has been
                </text>
                <text
                  x="350"
                  y="2270"
                  fill="gray"
                  className="TextMobile-6 w-[10vw] bg-green-50 "
                >
                  the insustrys standard
                </text>
              </g>

              {/* grop-7 */}

              <g>
                <image
                  x="400"
                  y="2750"
                  width="40"
                  height="40"
                  href="Slicing/our workflow/betreuung-icon .png"
                  className="img img-7"
                />

                <text
                  x="400"
                  y="2820"
                  fill="gray"
                  className="TextMobile-7 text-[1.5rem]  "
                >
                  Betreuung
                </text>

                <text
                  x="400"
                  y="2860"
                  fill="gray"
                  className="TextMobile-7 w-[10vw] bg-green-50 "
                >
                  Lorem Ipsum is simply dummy
                </text>
                <text
                  x="400"
                  y="2880"
                  fill="gray"
                  className="TextMobile-7 w-[10vw] bg-green-50 "
                >
                  text of the printing and typesetting
                </text>
                <text
                  x="400"
                  y="2900"
                  fill="gray"
                  className="TextMobile-7 w-[10vw] bg-green-50 "
                >
                  industry. Lorem Ipsum has been
                </text>
                <text
                  x="400"
                  y="2920"
                  fill="gray"
                  className="TextMobile-7 w-[10vw] bg-green-50 "
                >
                  the insustrys standard
                </text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkflowSection2;

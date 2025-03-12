import { motion } from "motion/react";
import { useEffect, useRef } from "react";

import { animate, useMotionValue, useTransform } from "motion/react";

const WorkflowSection3 = () => {
  // Create Motion Values
  const years = useMotionValue(0);
  const happy = useMotionValue(0);
  const campaigns = useMotionValue(0);

  // Transform values to rounded numbers
  const roundedYears = useTransform(years, (value) => Math.round(value));
  const roundedHappy = useTransform(happy, (value) => Math.round(value));
  const roundedCampaigns = useTransform(campaigns, (value) =>
    Math.round(value)
  );

  // Refs for detecting when in view
  const yearsRef = useRef(null);
  const happyRef = useRef(null);
  const campaignsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === yearsRef.current) {
              animate(years, 2, { duration: 1 });
            }
            if (entry.target === happyRef.current) {
              animate(happy, 100, { duration: 1 });
            }
            if (entry.target === campaignsRef.current) {
              animate(campaigns, 75 , { duration: 1 });
            }
          }
        });
      },
      { threshold: 0.9 } // Trigger when 90% of the element is visible
    );

    observer.observe(yearsRef.current);
    observer.observe(happyRef.current);
    observer.observe(campaignsRef.current);

    return () => observer.disconnect();
  }, [campaigns, happy, years]);

  return (
    // ----------

    <div className="w-full h-[80vh] lg:h-[45vh] px-[5vw] relative  overflow-hidden ">
      <div className="w-full h-full overflow-hidden rounded-4xl relative">
        <div className="w-[32vw] h-[32vw] rounded-full bg-radial from-[#1fada6b0] via-[#14464365]  to-[#000000] absolute -left-15 -bottom-50"></div>

        <div className="h-full w-full bg-zinc-800/20 rounded-4xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 lg:p-[5vw] relative z-50 ">
          <div className="w-full h-full px-[40vw] py-[4vw] pt-[7vw] lg:pt-0 lg:py-0 lg:px-0 flex flex-col lg:flex-row lg:items-center justify-between  lg:pr-[10vw]   ">
            <section className="w-[40vw] lg:w-fit">
              <img
                src="Slicing/our workflow/years of experience-icon.png"
                alt=""
              />
              <h4 className="mt-5 text-[#929699] ">Years of experience</h4>
              <div>
                <motion.h1
                  ref={yearsRef}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="my-3 w-[1.7rem] lg:w-[5rem] text-2xl inline-block lg:text-[3.5vw] lg:font-bold"
                >
                  {roundedYears}
                </motion.h1>{" "}
                <motion.span
                  initial={{ opacity: 0, size: 0 }}
                  animate={{ opacity: 1, size: 1 }}
                  transition={{ duration: 3 }}
                  className="inline-block text-2xl lg:text-[3.5vw] lg:font-bold "
                >
                +
                </motion.span>
              </div>
            </section>
            <section className="w-[40vw] lg:w-fit">
              <img
                src="Slicing/our workflow/years of experience-icon.png"
                alt=""
              />
              <h4 className="mt-5 text-[#929699] ">Happy Customers</h4>
              <div className="">
                <motion.h1
                  ref={happyRef}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="my-3 w-[2.8rem] lg:w-[8rem] text-2xl lg:text-[3.5vw] lg:font-bold inline-block"
                >
                  {roundedHappy}
                </motion.h1>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 3 }}
                  className=" inline-block text-2xl lg:text-[3.5vw] lg:font-bold"
                >
                +
                </motion.span>
              </div>
            </section>
            <section className="w-[40vw] lg:w-fit ">
              <img
                src="Slicing/our workflow/years of experience-icon.png"
                alt=""
              />
              <h4 className="mt-5 text-[#929699] ">Campaigns</h4>
              <motion.h1
                ref={campaignsRef}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="my-3 lg:w-[3.5rem] text-2xl inline-block lg:text-[3.5vw] lg:font-bold"
              >
                {roundedCampaigns}
              </motion.h1>
            </section>
          </div>

          {/* ------------------------------ */}

          <div className="w-[73vh] origin-bottom-left rotate-90 absolute  top-5 left-10 inline-block lg:hidden ">
            <div className="relative w-full flex items-center ">
              <img src="Slicing/our workflow/text-dot copy.png" alt="" />
              <motion.img
                initial={{ x: -10, opacity: 0 }}
                transition={{ duration: 1, ease: "linear" }}
                whileInView={{ x: -2, opacity: 1 }}
                viewport={{ once: true }}
                src="Slicing/our workflow/pointer-3 .png"
                alt=""
                className="absolute z-99 left-[2%] "
              />
              <motion.img
                initial={{ x: -50, opacity: 0 }}
                transition={{ duration: 1, ease: "linear" }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                src="Slicing/our workflow/pointer-3 .png"
                alt=""
                className="absolute left-[41%]"
              />
              <motion.img
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 1, ease: "linear" }}
                whileInView={{ x: 15, opacity: 1 }}
                viewport={{ once: true }}
                src="Slicing/our workflow/pointer-3 .png"
                alt=""
                className="absolute left-[78%]"
              />
            </div>
          </div>

          {/* ------------dot img ---------- */}

          <div className="w-full relative hidden lg:inline-block ">
            <div className="relative w-full flex items-center ">
              <img src="Slicing/our workflow/text-dot copy.png" alt="" />
              <motion.img
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 1, ease: "linear" }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                src="Slicing/our workflow/pointer-3 .png"
                alt=""
                className="absolute"
              />
              <motion.img
                initial={{ x: -500, opacity: 0 }}
                transition={{ duration: 1, ease: "linear" }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                src="Slicing/our workflow/pointer-3 .png"
                alt=""
                className="absolute left-[40%]"
              />
              <motion.img
                initial={{ x: -300, opacity: 0 }}
                transition={{ duration: 1, ease: "linear" }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                src="Slicing/our workflow/pointer-3 .png"
                alt=""
                className="absolute left-[81.2%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowSection3;

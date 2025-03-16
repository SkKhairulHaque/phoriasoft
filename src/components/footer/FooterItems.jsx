import { NavLink } from "react-router-dom";

const FooterItems = () => {
  return (
    <footer className="w-full lg:h-full bg-[black] px-[5vw] lg:px-[10vw] pt-[5vw] lg:pb-[3vw]  ">
      <div className="w-full  flex flex-col lg:flex-row  justify-between items-center">
        <section>
          <img
            src="/Slicing/header/logo-dark.png"
            alt=""
            className="w-[10vw] top-0"
          />
          <h4 className="mt-10 text-[#f1f1f1b4] text-[1rem] font-light ">
            Elevating communication, marketing, <br />
            UX design into powerful digital experiences <br /> targeted
            campaigns, identities that <br />
            drive results and transform businesses
          </h4>
        </section>
        <aside className="w-full lg:w-1/2 mt-10 lg:mt-0 flex items-start justify-between text-[#f1f1f1b4]">
          <div>
            <h1 className="text-[#ff7e00] uppercase text-[1rem]  ">
              Quick Link
            </h1>
            <span className="w-[1.8rem] h-[2px] bg-[#ff7e00] block mb-8 mt-3 rounded-xl "></span>
            <ul className="flex flex-col gap-[.5rem] ">
              <li className="hover:text-[#ff7e00] text-[0.9rem]">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? "text-[#ff7e00]" : "hover:text-[#ff7e00]  "
                  }
                >
                  Home
                </NavLink>{" "}
              </li>
              <li className="hover:text-[#ff7e00] text-[0.9rem]">
                <NavLink
                  to={"/Expertise"}
                  className={({ isActive }) =>
                    isActive ? "text-[#ff7e00]" : "hover:text-[#ff7e00]  "
                  }
                >
                  Expertise
                </NavLink>
              </li>
              <li className="hover:text-[#ff7e00] text-[0.9rem]">
                <NavLink
                  to={"/Blog"}
                  className={({ isActive }) =>
                    isActive ? "text-[#ff7e00]" : "hover:text-[#ff7e00]  "
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li className="hover:text-[#ff7e00] text-[0.9rem]">
                <NavLink
                  to={"/Inquiry"}
                  className={({ isActive }) =>
                    isActive ? "text-[#ff7e00]" : "hover:text-[#ff7e00]  "
                  }
                >
                  Inquiry
                </NavLink>
              </li>
              <li className="hover:text-[#ff7e00] text-[0.9rem]">
                <NavLink
                  to={"/About"}
                  className={({ isActive }) =>
                    isActive ? "text-[#ff7e00]" : "hover:text-[#ff7e00]  "
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li className="hover:text-[#ff7e00] text-[0.9rem]">
                <NavLink
                  to={"/contact"}
                  className={({ isActive }) =>
                    isActive ? "text-[#ff7e00]" : "hover:text-[#ff7e00]  "
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-[#ff7e00] uppercase text-[1.2rem]  ">
              Service
            </h1>
            <span className="w-[1.8rem] h-[2px] bg-[#ff7e00] block mb-8 mt-3 rounded-xl "></span>
            <ul className="flex flex-col gap-[.6rem] ">
              <li className="hover:text-[#ff7e00] text-[0.9rem]">
                AEO and SEO
              </li>
              <li className="hover:text-[#ff7e00] text-[0.9rem]">
                Digital Marketing
              </li>
              <li className="hover:text-[#ff7e00] text-[0.9rem]">
                Software Development
              </li>
              <li className="hover:text-[#ff7e00] text-[0.9rem]">
                App Development
              </li>
              <li className="hover:text-[#ff7e00] text-[0.9rem]">
                Product & LOGO Design
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-[#ff7e00] uppercase text-[1.2rem]  ">
              Follow Us
            </h1>
            <span className="w-[1.8rem] h-[2px] bg-[#ff7e00] block mb-8 mt-3 rounded-xl "></span>
            <div className="flex gap-4 ">
              <div className="flex flex-col gap-[.8rem] h-fit w-[1.2rem] ">
                <img
                  src="Slicing/footer/facebook-icon .png"
                  alt=""
                  className="  object-cover  "
                />
                <img
                  src="Slicing/footer/Instagram-icon.png"
                  alt=""
                  className=" object-center object-cover  "
                />
                <img
                  src="Slicing/footer/linkedin-icon.png"
                  alt=""
                  className=" object-center object-cover  "
                />
                <img
                  src="Slicing/footer/Twitter-icon .png"
                  alt=""
                  className=" object-center object-cover  "
                />
              </div>
              <div className="flex flex-col gap-[.6rem] capitalize">
                <h4>facebook</h4>
                <h4>Instagram</h4>
                <h4>Linkedln</h4>
                <h4>Twitter</h4>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <div className="w-full text-[#f1f1f1b4] flex flex-col lg:flex-row  justify-between mt-10 lg:mt-20 ">
        <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row">
          <h1 className="text-nowrap">
            &copy; 2024 Phoriasoft. All rights reserved.{" "}
          </h1>
          <div className="lg:ml-35 flex  ">
            <select
              name=""
              id=""
              className="appearance-none bg-no-repeat bg-[center_right_12px] border border-[#f1f1f156] rounded py-1 px-4 pr-10 lg:pr-20 object-center outline-none mr-2 "
              style={{ backgroundImage: "url('Slicing/footer/arrow.png')" }}
            >
              <option value="" className="text-black bg-gray-200">
                Contact Us
              </option>
              <option value="" className="text-black bg-gray-200 ">
                Contact Us
              </option>
            </select>
            <select
              name=""
              id=""
              className="appearance-none bg-[url(/Slicing/footer/arrow.png)] bg-no-repeat bg-[center_right_8px] border border-[#f1f1f156] rounded py-1 px-4 pr-8 object-center outline-none  "
            >
              <option value="">English</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-20 lg:gap-10 capitalize my-5 lg:mb-0 text-[#ff7e00] ">
          <NavLink to="/terms">terms</NavLink>
          <NavLink to="/privacy">Privacy</NavLink>
        </div>
      </div>
    </footer>
  );
};

export default FooterItems;

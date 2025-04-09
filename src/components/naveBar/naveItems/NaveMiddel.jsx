import { NavLink } from "react-router-dom";

const NaveMiddel = () => {
  return (
    <div className="hidden lg:visible lg:items-center lg:flex lg:gap-7 font-poppins text-[0.8rem] text-[400] ">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-[#ff7e00]" : "hover:text-[#ff7e00]  "
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/expertise"}
        className={({ isActive }) =>
          isActive ? "text-black" : "hover:text-[#ff7e00]  "
        }
      >
        Expertise
      </NavLink>
      <NavLink
        to={"/blog"}
        className={({ isActive }) =>
          isActive ? "text-black" : "hover:text-[#ff7e00]  "
        }
      >
        Blog
      </NavLink>
      <NavLink
        to={"/anfrage"}
        className={({ isActive }) =>
          isActive ? "text-black" : "hover:text-[#ff7e00]  "
        }
      >
        Inquiry
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive }) =>
          isActive ? "text-black" : "hover:text-[#ff7e00]  "
        }
      >
        About Us
      </NavLink>
    </div>
  );
};

export default NaveMiddel;

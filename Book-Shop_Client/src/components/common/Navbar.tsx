import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaShopify } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import { navLinks } from "../../utils/routesGenerator";
import ButtonSm from "./ButtonSm";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import ProfileDropdown from "../Navbar/ProfileDropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useAppSelector(selectCurrentUser);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="py-2 bg-white sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <a href="#" className="flex items-center w-[25%]">
          <img className="w-[35%] md:w-[20%] lg:w-[15%]" src={logo} alt="" />
          <h2 className="font-semibold md:text-2xl">
            Ink<span className="text-[#003060]">Spire</span>
          </h2>
        </a>

        <ul className="hidden lg:flex items-center text-sm justify-center space-x-5">
          {navLinks.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "bg-[#003060] p-2 rounded-md text-white"
                  : "text-black"
              }
            >
              {item.title}
            </NavLink>
          ))}
        </ul>

        <div className="md:w-[25%] flex items-center justify-center md:justify-end gap-3 md:gap-4">
          <NavLink to={"/cart"}>
            <FaShopify className="text-3xl" />
          </NavLink>
          {user ? (
            <ProfileDropdown />
          ) : (
            <NavLink to={`/login`}>
              <ButtonSm variant="outline" text="Login" />
            </NavLink>
          )}
        </div>

        <button
          onClick={toggleMenu}
          className="md:w-[25%] lg:hidden p-2 flex items-center justify-end"
        >
          <CgMenuGridO className="border border-[#003060] p-[6px] md:px-3 md:py-1 rounded-md text-4xl md:text-5xl" />
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden">
          <ul className="flex flex-col bg-[#00306042] items-center space-y-3 py-4 ">
            {navLinks.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#003060] p-2 rounded-md text-white"
                    : "text-black"
                }
              >
                {item.title}
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;

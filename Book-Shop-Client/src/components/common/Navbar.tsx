import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { LuMenu, LuShoppingCart } from "react-icons/lu";
import { navLinks } from "../../utils/routesGenerator";
import ButtonSm from "./ButtonSm";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import ProfileDropdown from "../Navbar/ProfileDropdown";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";

const Navbar = () => {
  const user = useAppSelector(selectCurrentUser);
  const { totalQuantity } = useAppSelector((state) => state.product);

  return (
    <header className="px-3 py-2 backdrop-blur-2xl bg-white/55 sticky top-0 z-10">
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
                  : "text-gray-800"
              }
            >
              {item.title}
            </NavLink>
          ))}
        </ul>

        <div className="md:w-[25%] flex items-center justify-center md:justify-end gap-3 md:gap-5">
          <NavLink to={"/cart"} className="relative">
            <LuShoppingCart className="text-3xl" />
            <p className="absolute -top-3 -right-2 px-1 bg-[#003060] text-white text-xs rounded-full flex items-center justify-center">
              {totalQuantity}
            </p>
          </NavLink>
          {user ? (
            <ProfileDropdown />
          ) : (
            <NavLink to={`/login`}>
              <ButtonSm variant="outline" text="Login" />
            </NavLink>
          )}
        </div>

        <button className="md:w-[25%] lg:hidden p-2 flex items-center justify-end">
          <Sheet>
            <SheetTrigger asChild>
              <LuMenu className="border-[#003060] p-[6px] md:px-3 md:py-1 rounded-md text-4xl md:text-5xl" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <div className="flex items-center my-3 justify-center">
                  <img className="w-10" src={logo} alt="" />
                  <h2 className="font-semibold text-3xl">
                    Ink<span className="text-[#003060]">Spire</span>
                  </h2>
                </div>
              </SheetHeader>
              <SheetFooter>
                <div className="flex flex-col w-full items-center justify-center">
                  {navLinks.map((item, index) => (
                    <NavLink
                      key={index}
                      to={item.path}
                      className={({ isActive }) =>
                        isActive
                          ? "text-center w-full text-purple-600 p-3 bg-purple-50"
                          : "text-center w-full p-3"
                      }
                    >
                      {item.title}
                    </NavLink>
                  ))}
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </button>
      </div>
    </header>
  );
};

export default Navbar;

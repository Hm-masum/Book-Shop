import { twMerge } from "tailwind-merge";
import "../../App.css";
import clsx from "clsx";
import { TButton } from "../../type/button.type";

const ButtonSm = ({ variant = "filled", size = "sm", text }: TButton) => {
  const baseStyles =
    "flex items-center justify-center rounded-md md:font-semibold border border-[#003060]";

  const variants = {
    filled:
      "text-white primary-bg hover:bg-white hover:text-[#003060] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003060]",
    outline:
      "text-[#003060] bg-white hover:bg-[#003060] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white",
  };

  const sizes = {
    sm: " p-[6px] md:px-3 md:py-2",
    lg: "py-3 w-full",
  };

  const classes = twMerge(clsx(baseStyles, variants[variant], sizes[size]));

  return <button className={classes}>{text}</button>;
};

export default ButtonSm;

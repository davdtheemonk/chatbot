import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../Button";

export const LpHeader = () => {
  const path = useLocation();
  const nav = useNavigate();
  return (
    <div className="w-full h-[60px] fixed top-0 border-b border-dark border-opacity-10 md:px-80 px-5 flex flex-row justify-center items-center">
      <p>Skill Chat Bot</p>
      <div className=" ml-auto flex flex-row justify-center items-center gap-10 hidden md:flex">
        <Link
          to="/"
          className={` ${
            path.pathname === "/" ? "" : "text-grey"
          } hover:text-dark`}
        >
          Home
        </Link>
        <Link
          to="/about-us"
          className={` ${
            path.pathname === "/about" ? "" : "text-grey"
          } hover:text-dark`}
        >
          About Us
        </Link>
        <Link
          to="/how-it-works"
          className={` ${
            path.pathname === "/how-it-works" ? "" : "text-grey"
          } hover:text-dark`}
        >
          How it Works
        </Link>
      </div>
      <Button
        title="Sign Up"
        action={() => {
          nav("/sign-up");
        }}
        style="ml-auto bg-primary p-2 text-white rounded-md flex justify-center items-center"
      />
    </div>
  );
};

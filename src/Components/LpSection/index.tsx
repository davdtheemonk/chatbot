import { BsStars } from "react-icons/bs";
import { Button } from "../Button";

export const LpSection = () => {
  return (
    <div className="md:px-80 px-10 mt-[60px] flex justify-start items-start  py-20">
      <div className="w-full flex md:flex-row flex-col justify-between items-center">
        <div className="flex flex-col gap-3">
          <div className="h-[20px] gradient w-auto p-5 rounded-full justify-start items-center flex text-white gap-2 text-2xl">
            <BsStars />
            <p>Your AI-Powered Skill Guide</p>
          </div>
          <p className="text-2xl">Get a personalized learning path with key</p>
          <p className="text-2xl">
            {" "}
            topics, timelines, and expert insights tailored to
          </p>
          <p className="text-2xl"> your field and experience level!</p>
          <div className="w-full flex flex-row justify-start items-center gap-7">
            <Button
              title="Sign Up"
              style=" bg-primary p-2 text-white rounded-md flex justify-center items-center w-[200px]"
            />

            <Button
              title="Learn More"
              style=" bg-white border border-primary text-grey p-2  rounded-md flex justify-center items-center w-[200px]"
            />
          </div>
        </div>
        <div className="gradient w-full h-auto">
          <img src="./man.png" alt="man-on-pc" />
        </div>
      </div>
    </div>
  );
};

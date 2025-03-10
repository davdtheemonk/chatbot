import React from "react";
import { inputProps } from "../../types";
import { IoArrowUpOutline } from "react-icons/io5";
import { CgSpinnerAlt } from "react-icons/cg";

const TextBox: React.FC<inputProps> = ({
  value,
  setValue,
  title,
  action,
  loading,
}) => {
  return (
    <div className="flex flex-col   w-full border border-dark border-opacity-10 p-3 rounded-md ">
      <textarea
        value={value}
        className=" color-white custom-textbox  w-full  rounded-md resize-none max-h-[200px] overflow-hidden"
        placeholder={title}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <div
        onClick={() => {
          action?.();
        }}
        className={` w-[30px] ${
          value.length > 1 ? "bg-[#2d3e50] text-white" : "bg-white text-grey"
        } h-[30px] ml-auto hover:cursor-pointer hover:shadow-md rounded-full flex justify-center items-center border border-dark border-opacity-10`}
      >
        {loading ? (
          <CgSpinnerAlt className="w-5 h-5 animate-spin text-gray" />
        ) : (
          <IoArrowUpOutline />
        )}
      </div>
    </div>
  );
};

export default TextBox;

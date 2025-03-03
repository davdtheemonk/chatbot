import React from "react";
import { inputProps } from "../../types";

const InputBox: React.FC<inputProps> = ({
  value,
  setValue,
  title,
  defaultValue,
}) => {
  return (
    <input
      value={value}
      className="custom-input  border border-white border-opacity-1 color-white  w-full h-[35px] rounded-md"
      placeholder={title}
      defaultValue={defaultValue ? defaultValue : ""}
      type={title === "Password" ? "password" : "text"}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};

export default InputBox;

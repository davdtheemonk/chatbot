import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { ComponentProps, UserBasicInfo } from "../../types";

const SideBarItem: React.FC<ComponentProps> = ({ item, setShowMenu }) => {
  const navigate = useNavigate();
  const storedUserInfo = localStorage.getItem("userInfo");

  const location = window.location.pathname;
  const user: UserBasicInfo | null = storedUserInfo
    ? JSON.parse(storedUserInfo)
    : null;

  return (
    <div
      onClick={() => {
        navigate(item.link);

        setShowMenu(false);
      }}
      className=" flex flex-row  gap-2 items-center justify-start rounded-md p-1 cursor-pointer  text-white hover:text-dark hover:bg-light"
    >
      {item.icon}
      <p className="mt-1">{item.title}</p>
    </div>
  );
};

export default SideBarItem;

import { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

export const Controller = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const storedUserInfo = localStorage.getItem("userInfo");

  return (
    <div className="min-h-screen bg-white relative">
      <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />

      <div className="w-full md:pl-[300px]  bg-light flex-1 relative flex-col gap-2 ">
        <div className="w-full min-h-screen max-h-screen p-4 bg-light rounded-md flex flex-col">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

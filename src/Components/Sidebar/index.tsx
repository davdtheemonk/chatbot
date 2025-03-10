import React from "react";
import { SideBarItem as SidebarItemProps, SidebarProps } from "../../types";
import SideBarItem from "../SidebarItem";
import { BiMessageSquareAdd } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { SiHyperskill } from "react-icons/si";
const Sidebar: React.FC<SidebarProps> = (props) => {
  const sidebarItems: SidebarItemProps[] = [
    {
      title: "Chat",
      id: 0,
      icon: <BiMessageSquareAdd className="w-6 h-6 " />,
      link: "/app",
    },
  ];

  const bottomItems: SidebarItemProps[] = [
    {
      title: "Settings",
      id: 0,
      icon: <IoSettingsOutline className="w-6 h-6 " />,
      link: "/settings",
    },
  ];

  return (
    <div
      className={`fixed ${
        !props.showMenu && "hidden md:block"
      } z-40 flex-col border-r  border-dark border-opacity-10 flex w-full ${
        /\/campaign(\/|$)/.test(window.location.pathname)
          ? " md:w-[70px] "
          : " md:w-[250px] "
      }  fixed min-h-screen py-[70px] px-4 bg-[#2d3e50]`}
    >
      <div className="flex flex-row justify-start text-xl item-center p-1 absolute top-4 text-white gap-3">
        <SiHyperskill />
        <p>Skillbot</p>
      </div>
      {sidebarItems.map((sidebarItem) => (
        <SideBarItem
          item={sidebarItem}
          key={sidebarItem.id}
          setShowMenu={props.setShowMenu}
        />
      ))}

      <div className="w-full border-t py-4 border-opacity-10 p-1 border-white absolute bottom-0 left-0 ">
        {bottomItems.map((sidebarItem) => (
          <SideBarItem
            item={sidebarItem}
            key={sidebarItem.id}
            setShowMenu={props.setShowMenu}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

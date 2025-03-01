import { Outlet } from "react-router-dom";
import { LpHeader } from "../../Components/LpHeader";
export const Landing = () => {
  return (
    <div className="flex flex-col w-full h-screen bg-white">
      <LpHeader />
      <Outlet />
    </div>
  );
};

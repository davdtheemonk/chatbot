import { UserBasicInfo } from "../../types";

export default function Header() {
  const user: UserBasicInfo | null = localStorage.getItem("userInfo") | null;
  return (
    <div className="w-full bg-white  border-t  border-l rounded-t-md border-r border-opacity-10 border-dark p-2">
      <img
        src="./avatar3.jpg"
        className="w-[35px] h-[35px] ml-auto rounded-full mr-2"
        alt="user"
      />
    </div>
  );
}

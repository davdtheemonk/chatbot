import { Button } from "../../Components/Button";
import InputBox from "../../Components/InputBox";

export const SignUp = () => {
  return (
    <div className="h-screen md:px-80 px-5 flex justify-start items-start  py-10 flex flex-col gap-5">
      <div className="bg-white p-5  flex flex-col gap-4 text-sm w-[350px] m-auto justify-center items-center ">
        <p className="font-bold text-xl">Register</p>
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content ">
            Firstname
          </p>
          <InputBox title="John" />
        </div>
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content ">
            Lastname
          </p>
          <InputBox title="Doe" />
        </div>
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content ">
            Email
          </p>
          <InputBox title="doe@demo.com" />
        </div>
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content ">
            Purpose
          </p>
          <select className="custom-input  border border-white border-opacity-1 color-white  w-full h-[35px] rounded-md">
            <option></option>
          </select>
        </div>
        <Button
          title="Sign Up"
          style="w-[300px] bg-primary p-2 text-white rounded-md flex justify-center items-center"
        />
      </div>
    </div>
  );
};

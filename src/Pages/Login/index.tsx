import { useState } from "react";
import { Button } from "../../Components/Button";
import InputBox from "../../Components/InputBox";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const login = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:7000/api/users/login",
        {
          password,
          email,
        }
      );
      if (response.status === 200) {
        toast.success("Logged In Successfuly");
      }

      localStorage.setItem("userInfo", JSON.stringify(response.data));
      return setTimeout(() => {
        window.location.href = "/app";
      }, 500);
    } catch (e: any) {
      toast.error(e.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="h-screen md:px-80 px-5 flex justify-start items-start  py-10 flex flex-col gap-5">
      <div className="bg-white p-5  flex flex-col gap-4 text-sm w-[350px] m-auto justify-center items-center ">
        <p className="font-bold text-xl">Login</p>

        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content ">
            Email
          </p>
          <InputBox title="doe@demo.com" value={email} setValue={setEmail} />
        </div>
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content ">
            Password
          </p>
          <InputBox
            title="Password"
            value={password}
            setValue={setPassword}
            type="password"
          />
        </div>

        <Button
          title="Login"
          loading={loading}
          action={() => login()}
          style="w-[300px] bg-primary p-2 text-white rounded-md flex justify-center items-center"
        />
      </div>
    </div>
  );
};

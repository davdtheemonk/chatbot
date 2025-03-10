import { useState } from "react";
import { Button } from "../../Components/Button";
import InputBox from "../../Components/InputBox";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [purpose, setPurpose] = useState("");
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();
  const signUp = async () => {
    setLoading(true);
    try {
      await axios.post("http://localhost:7000/api/users/register", {
        firstname,
        lastname,
        password,
        purpose,
        email,
      });
      toast.success("Registered successfuly");
      setTimeout(() => {
        nav("/login");
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
        <p className="font-bold text-xl">Register</p>
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content ">
            Firstname
          </p>
          <InputBox title="John" value={firstname} setValue={setFirstname} />
        </div>
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content ">
            Lastname
          </p>
          <InputBox title="Doe" value={lastname} setValue={setLastname} />
        </div>

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
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content ">
            Purpose
          </p>
          <select
            defaultValue={"Start a New Learning Journey"}
            onChange={(e) => {
              console.log(e);
              setPurpose(e.target.value);
            }}
            className="custom-input  border border-white border-opacity-1 color-white  w-full h-[35px] rounded-md"
          >
            <option value="">Select purpose</option>
            <option value="Start a New Learning Journey">
              Start a New Learning Journey
            </option>

            <option value="Enhance My Existing Expertise">
              Enhance My Existing Expertise
            </option>
          </select>
        </div>
        <Button
          title="Sign Up"
          loading={loading}
          action={() => signUp()}
          style="w-[300px] bg-primary p-2 text-white rounded-md flex justify-center items-center"
        />
      </div>
    </div>
  );
};

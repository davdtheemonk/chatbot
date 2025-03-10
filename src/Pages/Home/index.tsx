import TextBox from "../../Components/TextBox";
import { useEffect, useReducer, useRef, useState } from "react";
import { IoTelescopeOutline } from "react-icons/io5";
import { useAppSelector } from "../../hooks/redux-hooks";
import { v4 as uuidv4 } from "uuid";
import { messagesReducer } from "../../Reducers/messageReducer";
import { addMessageAction } from "../../Reducers/messageAction";
import dayjs from "dayjs";
import { TbRouteSquare } from "react-icons/tb";
import { UserBasicInfo } from "../../types";
import { sendMessage } from "../../utils";
import { Chat } from "../../Components/Chat";
import { socket } from "../../api/axiosInstance";
import { PiPlugsConnected } from "react-icons/pi";
import { Button } from "../../Components/Button";
export const Home = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const chatID = useRef(uuidv4()).current;
  const [messages, dispatchMessage] = useReducer(messagesReducer, []);
  const user = { _id: "sfkdhji", email: "johndoe@demo.com" };

  const messagesContainerRef = useRef<HTMLDivElement>(null); // Explicitly type the ref

  useEffect(() => {
    console.log(chatID);
    socket.emit("join", { chatID: chatID });
  }, []);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);
  const demoTask = [
    {
      id: 0,
      icon: <IoTelescopeOutline />,
      title: "Research",
      text: "In-depth analysis of topics with unparalleled precision.",
    },
    {
      id: 1,
      icon: <TbRouteSquare />,
      title: "Roadmap",
      text: "Give me a roadmap of my career",
    },
    {
      id: 2,
      icon: <PiPlugsConnected />,
      title: "Connect",
      text: "Find mentors and communites on skillbot.",
    },
  ];

  return (
    <div
      ref={messagesContainerRef}
      className="w-full flex flex-col gap-10 rounded-b-lg h-full flex-1 bg-white border border-dark border-opacity-10 relative overflow-hidden"
    >
      {messages && messages.length >= 1 ? (
        <Chat
          messages={messages}
          dispatchMessage={dispatchMessage}
          chatID={chatID}
          setLoading={setLoading}
        />
      ) : (
        <div className=" flex m-auto flex-col md:w-[50.5%] lg:w-[70%]  w-full justify-center items-center gap-4">
          <p className="text-3xl font-[500] text-start text-[#2d3e50]">
            What would you love to do?
          </p>
          <div className=" grid gap-2  mb-4 lg:grid-cols-2 2xl:grid-cols-2 md:grid-cols-2 m-auto justify-center items-center ">
            {demoTask.map((task) => (
              <div
                key={task.id}
                onClick={() => {
                  setMessage(task.text);
                }}
                className="md:w-[310px] w-full custom-div cursor-pointer bg-white   rounded-md border border-dark border-opacity-10 p-4 gap-3 flex flex-row justify-start items-start"
              >
                <div className="bg-light w-[50px] h-[50px]  rounded-md flex justify-center items-center border border-dark border-opacity-10">
                  {task.icon}
                </div>
                <div className="flex justify-start items-start flex flex-col">
                  <p className=" text-[#2d3e50] font-[500]">{task.title}</p>
                  <p className="text-grey">{task.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="flex justify-center items-center  absolute bg-white w-full bottom-4 flex-col justify-center">
        <div className="  md:w-[50.5%] w-[90%]">
          <TextBox
            value={message}
            setValue={setMessage}
            loading={loading}
            action={() => {
              if (!message) return;
              setLoading(true);
              const time =
                dayjs(new Date()).hour() +
                ":" +
                String(dayjs(new Date()).minute()).padStart(2, "0") +
                " " +
                (dayjs(new Date()).hour() >= 12 ? "PM" : "AM");
              dispatchMessage(
                addMessageAction({
                  sender: user.email,
                  message: message,
                  chatID: chatID,
                  senderID: user._id,
                  time: time,
                })
              );

              sendMessage(
                message,
                chatID,
                setLoading,
                setMessage,
                time,
                "1",
                "doe"
              );
            }}
            title="Ask anything.."
          />
        </div>
        <div className="w-full flex justify-center items-center text-grey py-2">
          <p>AI can make mistakes. Check important info.</p>
        </div>
      </div>
    </div>
  );
};

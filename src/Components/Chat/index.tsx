import { useEffect, useReducer, useRef, useState } from "react";
import ChatBubble from "../ChatBubble";
import { messagesReducer } from "../../Reducers/messageReducer";
import { Message } from "../../types";
import { CgSpinnerAlt } from "react-icons/cg";
import ReactMarkdown from "react-markdown";
import { BsCheckCircle } from "react-icons/bs";
import { socket } from "../../api/axiosInstance";
import { addMessageAction } from "../../Reducers/messageAction";
import { Action } from "@reduxjs/toolkit";
export const Chat: React.FC = ({
  messages,
  dispatchMessage,
  setLoading,
  chatID,
  loading,
}: {
  messages: Message[];
  chatID: string;
  loading: boolean;
  dispatchMessage: React.ActionDispatch<[Action]>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [stream, setStream] = useState<string>("");
  const [isStreaming, setIsStreaming] = useState(false);
  const response = useRef("");
  const user = { _id: "sfkdhji", email: "johndoe@demo.com" };

  useEffect(() => {
    socket.on("stream", (data) => {
      setIsStreaming(true);
      console.log(data);
      response.current += data.message; // Update ref
      setStream(response.current); // Trigger re-render
    });
    socket.on("streamOff", (data) => {
      setIsStreaming(false);
      setLoading(false);
      dispatchMessage(
        addMessageAction({
          sender: "ai",
          message: response.current,
          chatID: chatID,
          senderID: user._id,
          time: data.time,
        })
      );
      setTimeout(() => {
        response.current = "";
        setStream(""); // Ensure UI reflects reset
      }, 10);
    });

    return () => {
      socket.off("stream");
      socket.off("streamOff");
    };
  }, []);

  return (
    <div className="md:w-[50%] chat w-[90%] mx-auto my-5 rounded-md  min-h-[120px] h-auto  p-4 gap-4 flex flex-col flex-grow mb-[150px] overflow-y-auto overflow-x-hidden ">
      {messages &&
        messages.length > 0 &&
        messages.map((message) => (
          <ChatBubble
            message={message}
            key={message._id}
            loading={loading}
            setLoading={setLoading}
          />
        ))}
      {isStreaming && (
        <div
          className={`w-full mr-auto  w-[90%] border border-opacity-10 rounded-md border-dark  flex flex-col justify-start gap-3  items-center  h-auto flex-row-reverse
             
          `}
        >
          <div className="w-full border-b border-opacity-10  border-dark p-3 flex flex-row justify-start items-center gap-2">
            {loading ? (
              <CgSpinnerAlt className="w-5 h-5 animate-spin text-gray" />
            ) : (
              <BsCheckCircle className="w-5 h-5  text-gray" />
            )}
            <p className="mt-1">Thinking</p>
          </div>
          <div className="w-full px-4  py-4">
            <ReactMarkdown>{stream}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
};

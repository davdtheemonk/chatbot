import React, { useEffect, useState } from "react";
import { ChatBubbleProps, UserBasicInfo } from "../../types";
// @ts-ignore
import MovingText from "react-moving-text";
import { BsCheckCircle } from "react-icons/bs";
import ReactMarkdown from "react-markdown";
const ChatBubble: React.FC<ChatBubbleProps> = (props) => {
  const storedUserInfo = localStorage.getItem("userInfo");
  const user = { _id: "sfkdhji", email: "johndoe@demo.com" };

  return (
    <MovingText
      type={props.message.sender === user.email ? "fadeInFromBottom" : ""}
      duration="400ms"
      delay="0s"
      direction="normal"
      timing="ease"
      iteration="1"
      fillMode="none"
    >
      {props.message.sender === user.email ? (
        <div
          className={`w-full  flex flex-row justify-start p-4 gap-3 items-center  h-auto  ${
            props.message.sender === user.email
              ? "ml-auto flex-row-reverse"
              : "hidden"
          }`}
        >
          <img
            src={
              props.message.sender !== user.email
                ? "./apollo-io.svg"
                : "avatar3.jpg"
            }
            className="w-[30px]  rounded-full border border-gray  p-1"
            alt="user"
          />

          <div
            className={`flex ${
              props.message.sender !== user.email ? "mr-auto" : "ml-auto"
            } flex-col  gap-2`}
          >
            <div
              className={`w-full   rounded-xl flex justify-end items-end flex-col  "bg-white text-dark mr-2"
             
          }`}
            >
              <p
                className={
                  props.message.senderID !== user._id ? "ml-auto  " : ""
                }
              >
                {props.message.message}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <>
          {!props.loading && (
            <div
              className={`w-full border border-opacity-10 rounded-md border-dark  flex flex-col justify-start gap-3  items-center  h-auto  ${
                props.message.sender !== user.email
                  ? "mr-auto flex-row-reverse"
                  : "hidden"
              }`}
            >
              <div className="w-full border-b border-opacity-10  border-dark p-3 flex flex-row justify-start items-center gap-2">
                <BsCheckCircle className="w-5 h-5  text-gray" />

                <p className="mt-1">Thinking</p>
              </div>
              <div className="w-full px-4  py-4">
                <ReactMarkdown children={props.message.message} />
              </div>
            </div>
          )}
        </>
      )}
    </MovingText>
  );
};
export default ChatBubble;

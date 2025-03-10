import { Message } from "../types";

export const ADD_MESSAGE = "ADD_MESSAGE" as const;
export const REMOVE_MESSAGES = "REMOVE_MESSAGES" as const;

export const addMessageAction = (message: Message) => ({
  type: ADD_MESSAGE,
  payload: message, // No extra wrapping
});

export const removeMessagesAction = () => ({
  type: REMOVE_MESSAGES,
});

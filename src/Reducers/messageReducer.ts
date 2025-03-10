import { Message } from "../types";
import { ADD_MESSAGE, REMOVE_MESSAGES } from "./messageAction";

export type Messages = Message[];
type MessageAction =
  | {
      type: typeof ADD_MESSAGE;
      payload: Message; // Now directly a `Message`
    }
  | {
      type: typeof REMOVE_MESSAGES;
    };

export const messagesReducer = (state: Messages, action: MessageAction) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return [...state, action.payload]; // Corrected to directly use payload

    case REMOVE_MESSAGES:
      return []; // Fixed state reset

    default:
      return state; // Correct default return
  }
};

import { ws as socket } from "./Socket";
export const sendMessage = (
  message: string,
  chatID: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setMessage: React.Dispatch<React.SetStateAction<string>>,
  time: string,
  id: string,
  username: string
) => {
  setLoading(true);
  socket.emit("send", {
    chatID: chatID,
    message: message,
    time: time,
    userId: id,
    username: username,
  });

  setMessage("");
};

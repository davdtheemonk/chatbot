import axios from "axios";
import socketIOClient from "socket.io-client";
export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});
const WS = import.meta.env.VITE_APP_WS_URL;
export const socket = socketIOClient(`ws://${WS}`);

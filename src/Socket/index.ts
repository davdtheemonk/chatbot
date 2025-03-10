import { io } from "socket.io-client";

export const ws = io(import.meta.env.VITE_APP_WS_URL);

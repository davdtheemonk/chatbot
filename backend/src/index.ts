import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import { router as userRouter } from "./routes/user.routes";
import bodyParser from "body-parser";
import { ChatSocket } from "./chat.socket";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 7000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.get("/", (req: Request, res: Response) => {
  res.send("Express Server");
});

app.use("/api/users", userRouter);
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // Allow frontend to connect
    methods: ["GET", "POST"],
  },
});
new ChatSocket(io);
let uri: string;
if (process.env.N0DE_ENV === "production") {
  uri = process.env.PROD_ATLAS_URI;
} else {
  uri = process.env.TEST_ATLAS_URI;
}
mongoose
  .connect(uri)
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });

server.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

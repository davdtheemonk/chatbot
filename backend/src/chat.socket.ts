import { Server } from "socket.io";
import { ChatPromptTemplate, PromptTemplate } from "@langchain/core/prompts";
import { ChatGroq } from "@langchain/groq";

export class ChatSocket {
  private io: Server;
  private llm;

  private chatHistory: {
    role: "assistant" | "user" | "human" | "AI";
    content: string;
  }[];

  constructor(io: Server) {
    this.io = io;
    this.chatHistory = [];

    this.llm = new ChatGroq({
      apiKey: process.env.GROQ_API_KEY, // Default value.
      model: "mixtral-8x7b-32768",
      temperature: 0.2,
    });
    this.setupSocketEvents();
  }

  private setupSocketEvents() {
    this.io.on("connection", async (socket) => {
      socket.on("join", async (data) => {
        console.log(data);
        socket.join(data.chatID);
      });

      socket.on("send", async (data) => {
        console.log(data);
        this.chatHistory = [];

        try {
          const promptTemplate = ChatPromptTemplate.fromMessages([
            [
              "system",
              `You are an assistant that helps users research and learn new things about how they can improve their skills in a **concise and user-friendly manner**.
              **You must always keep thoughts simple, avoiding technical jargon.**`,
            ],
            ["human", "{input}, here is the user's name {username}"],
            ["placeholder", "{history}"],
          ]);

          // Format prompt with actual data
          const formattedPrompt = await promptTemplate.format({
            input: data.message, // Assuming message input comes from `data.message`
            // Assuming user ID comes from `data.userId`
            username: data.username,
            history: this.chatHistory, // Convert history array to string
          });

          // Stream LLM response
          const stream = await this.llm.stream(formattedPrompt);
          for await (const chunk of stream) {
            if (chunk.content) {
              console.log(chunk.content);
              this.io
                .to(data.chatID)
                .emit("stream", { message: chunk.content });
            }
          }
          this.io.to(data.chatID).emit("streamOff", data.time); // Notify frontend of completion
        } catch (error) {
          console.error("Error streaming LLM response:", error);
          this.io.to(data.chatID).emit("error", "Failed to fetch AI response.");
        }
      });

      socket.on("disconnect", () => {
        console.log("Client disconnected:", socket.id);
      });
    });
  }
}

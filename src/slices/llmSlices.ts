import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LlmApiState, MessagePayload } from "../types";
import { toast } from "react-stacked-toast";
import { axiosInstance } from "../api/axiosInstance";

const initialState: LlmApiState = {
  status: "idle",
  error: null,
};

export const sendMessage = createAsyncThunk(
  "sendMessage", // This is the action type
  async (
    { message }: MessagePayload, // Destructure and define the type of the argument
    { rejectWithValue }: { rejectWithValue: Function } // Define the type for `rejectWithValue`
  ) => {
    try {
      const response = await axiosInstance.post("/llm/chat", {
        message,
      });

      return response.data;
    } catch (e: any) {
      if (e.response && e.response.data && e.response.data.message) {
        toast.error(e.response.data.message);
        return rejectWithValue(e.response.data.message); // Pass the error message to rejectWithValue
      } else {
        toast.error("An unknown error occurred.");
        return rejectWithValue("An unknown error occurred."); // Fallback error message
      }
    }
  }
);

const llmSlice = createSlice({
  name: "llm",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendMessage.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload as string;
    });

    builder.addCase(sendMessage.fulfilled, (state, action) => {
      state.status = "success";
    });

    builder.addCase(sendMessage.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
  },
});

export default llmSlice.reducer;

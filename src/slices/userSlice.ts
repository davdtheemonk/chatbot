import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthApiState, LoginCredentials } from "../types";
import { axiosInstance } from "../api/axiosInstance";
import { toast } from "react-stacked-toast";

const initialState: AuthApiState = {
  status: "idle",
  error: null,
};

export const login = createAsyncThunk(
  "login", // This is the action type
  async (
    { email, password }: LoginCredentials, // Destructure and define the type of the argument
    { rejectWithValue }: { rejectWithValue: Function } // Define the type for `rejectWithValue`
  ) => {
    try {
      const response = await axiosInstance.post("/users/login", {
        email,
        password,
      });
      localStorage.setItem("userInfo", JSON.stringify(response.data));
      toast.success("Logged In successfully");
      setTimeout(() => {
        window.location.href = "/chat";
      }, 1500);

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

export const getUser = createAsyncThunk(
  "getUser", // This is the action type
  async (_, { rejectWithValue }) => {
    try {
      const storedUserInfo = localStorage.getItem("userInfo");
      const token = storedUserInfo
        ? JSON.parse(storedUserInfo).authToken
        : null;
      axiosInstance.defaults.headers["x-auth-token"] = token;
      const response = await axiosInstance.get("/user/workspace");
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

export const register = createAsyncThunk(
  "register",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/user/register");

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
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload as string;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.status = "success";
    });

    builder.addCase(login.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
  },
});

export default authSlice.reducer;

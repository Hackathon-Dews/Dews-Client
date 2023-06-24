import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosInstance } from "../lib/axios";

axios.defaults.withCredentials = true;

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  summarizeCount: 0,
  message: "",
};

export const LoginUser = createAsyncThunk(
  "auth/LoginUser",
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/login", {
        username,
        password,
      });
      const access_token = response.data.access_token;
      localStorage.setItem("access_token", access_token);
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.message;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const GetMe = createAsyncThunk("auth/GetMe", async (_, thunkAPI) => {
  try {
    const access_token = localStorage.getItem("access_token");

    if (!access_token) {
      return thunkAPI.rejectWithValue("Login ke Akun Anda");
    }

    const response = await axiosInstance.get("/dashboard", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const LogOut = createAsyncThunk("auth/LogOut", async () => {
  await axiosInstance.delete("/logout");
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    // Login User
    builder.addCase(LoginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(LoginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(LoginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    // Get Dashboard
    builder.addCase(GetMe.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(GetMe.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(GetMe.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
    builder.addCase(LogOut.fulfilled, (state) => {
      state.user = null;
      localStorage.removeItem("access_token");
    });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;

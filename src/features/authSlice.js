import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.withCredentials = true;

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  summarizeCount: 0,
};

export const LoginUser = createAsyncThunk(
  "auth/LoginUser",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://ventus.up.railway.app/api/auth/login",
        {
          email: user.email,
          password: user.password,
        }
      );
      let token = response.data.token;
      localStorage.setItem("token", token);
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.message;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const Summarize = createAsyncThunk(
  "auth/Summarize",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://ventus.up.railway.app/api/summarize",
        data
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.message;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(LoginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(LoginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
      state.summarizeCount = 0; // Reset summarize count saat login berhasil
    });
    builder.addCase(LoginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    builder.addCase(Summarize.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(Summarize.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.summarizeCount += 1; // Increment summarize count setiap kali berhasil melakukan summarize

      if (state.summarizeCount > 5 && !state.user) {
        // Jika summarize count melebihi 5 dan pengguna belum login, set isError dan message
        state.isError = true;
        state.message =
          "Anda harus login untuk melakukan summarize lebih dari 5 kali.";
      }
    });
    builder.addCase(Summarize.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;

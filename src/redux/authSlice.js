import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { useNavigate } from "react-router-dom";

import authService from "services/auth.service";

const user = JSON.parse(localStorage.getItem("user"));

export const login = createAsyncThunk(
  "auth/login",
  async ({ phone, username, password }, thunkAPI) => {
    try {
      const data = await authService.login(phone, username, password);
      if (data === null)
        throw Error("error");
      return { user: data };
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async () => {
    await authService.logout();
  }
)

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    }
  },
});

export default authSlice.reducer;

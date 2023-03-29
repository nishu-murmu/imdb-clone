import { createSlice } from "@reduxjs/toolkit";
import { authSliceProps } from "../../utils/types";

const initialState: authSliceProps = {
  name: "",
  email: "",
  password: "",
  retypedPassword: "",
  isSubmitted: false,
};

export const AuthSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      const { type, value } = action.payload;

      if (type === "name") state.name = value;
      if (type === "email") state.email = value;
      if (type === "password") state.password = value;
      if (type === "repassword") state.retypedPassword = value;
    },
    setIsSubmitted: (state, action) => {
      state.isSubmitted = action.payload;
    },
  },
});

export const AuthActions = AuthSlice.actions;

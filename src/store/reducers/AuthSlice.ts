import { createSlice } from "@reduxjs/toolkit"
import { UserProps } from "../../utils/types"

const initialState: UserProps = {
  email: "",
  password: "",
}

export const AuthSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      const { email, password } = action.payload
      state.email = email
      state.password = password
    },
  },
})

export const AuthActions = AuthSlice.actions

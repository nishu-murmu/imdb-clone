import { configureStore } from "@reduxjs/toolkit"
import { HeaderSlice } from "./reducers/headerSlice"


export const store = configureStore(
  {
    reducer: {
      header: HeaderSlice.reducer,
    },
  },
)

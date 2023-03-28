import { configureStore } from "@reduxjs/toolkit"
import { AuthSlice } from "./reducers/AuthSlice"
import { HeaderSlice } from "./reducers/headerSlice"
import { HeroSlice } from "./reducers/heroSlice"
import { ListSlice } from "./reducers/listSlice"

export const store = configureStore({
  reducer: {
    header: HeaderSlice.reducer,
    hero: HeroSlice.reducer,
    list: ListSlice.reducer,
    auth: AuthSlice.reducer,
  },
})

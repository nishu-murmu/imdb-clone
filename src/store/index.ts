import { configureStore } from "@reduxjs/toolkit"
import { HeaderSlice } from "./reducers/headerSlice"
import { HeroSlice } from "./reducers/heroSlice"
import { ListSlice } from "./reducers/listSlice"

export const store = configureStore({
  reducer: {
    header: HeaderSlice.reducer,
    hero: HeroSlice.reducer,
    list: ListSlice.reducer,
  },
})

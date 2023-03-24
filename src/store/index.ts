import { configureStore } from "@reduxjs/toolkit";
import { HeaderSlice } from "./reducers/headerSlice";
import { HeroSlice } from "./reducers/heroSlice";

export const store = configureStore({
  reducer: {
    header: HeaderSlice.reducer,
    hero: HeroSlice.reducer,
  },
});

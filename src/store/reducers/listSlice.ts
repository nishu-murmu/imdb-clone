import { createSlice } from "@reduxjs/toolkit";
import { ListSliceProps } from "../../utils/types";
import useLocaleStorage from "../../utils/customHooks/useLocaleStorage";

const initialState: ListSliceProps = {
  popularMovies: [],
  popularShows: [],
  watchlistMovies: [],
  selectValue: null,
};
const { getLocaleStorage, setLocaleStorage } = useLocaleStorage();

export const ListSlice = createSlice({
  name: "listSlice",
  initialState,
  reducers: {
    getPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    getPopularShows: (state, action) => {
      state.popularShows = action.payload;
    },
    setSelectValue: (state, action) => {
      state.selectValue = action.payload;
    },
    setWatchlistMovies: (state, action) => {
      if(Array.isArray(action.payload)) {
        state.watchlistMovies = action.payload;
      } else {
        state.watchlistMovies.push(action.payload);
      }
    },
  },
});

export const ListActions = ListSlice.actions;

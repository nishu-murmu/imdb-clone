import { createSlice } from "@reduxjs/toolkit"
import { ListSliceProps } from "../../utils/types"

const initialState: ListSliceProps = {
  popularMovies: [],
  popularShows: [],
  selectValue: null,
}

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
  },
});

export const ListActions = ListSlice.actions

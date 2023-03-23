import { createSlice } from "@reduxjs/toolkit";
import { HeaderSliceProps } from "../../utils/types";

const initialState: HeaderSliceProps = {
  searchText: "",
  searchedMovies: [],
  isDropDown: false,
  isMenu: false,
  dropdownRef: null,
};

export const HeaderSlice = createSlice({
  name: "headerSlice",
  initialState,
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setSearchedMovies: (state, action) => {
      state.searchedMovies = action.payload;
    },
    setIsDropDown: (state, action) => {
      state.isDropDown = action.payload;
    },
    setIsMenu: (state, action) => {
      state.isMenu = action.payload;
    },
  },
});

export const HeaderActions = HeaderSlice.actions;

import { createSlice } from "@reduxjs/toolkit";
import { HeroSliceProps } from "../../utils/types";

const initialState: HeroSliceProps = {
  upcomingMovies: [],
  trendingMedia: [],
  selectedItems: [],
  cardId: 0,
};

export const HeroSlice = createSlice({
  name: "heroSlice",
  initialState,
  reducers: {
    setUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    setTrendingMedia: (state, action) => {
      state.trendingMedia = action.payload;
    },
    setSelectedItems: (state, action) => {
      let value;
      let arr = JSON.parse(window.localStorage.getItem("selectedItems") || "null");
      if (window.localStorage.getItem("selectedItems") !== null) {
        if (
          arr.includes(
            action.payload
          )
        ) {
          value = arr.filter(
            (item: any) => {
               return item !== action.payload;
            }
          );
        } else {
          value = [
            ...arr,
            action.payload,
          ];
        }
        window.localStorage.setItem("selectedItems", JSON.stringify(value));
      } else {
        value = action.payload;
        window.localStorage.setItem("selectedItems", JSON.stringify(Array.from(value)));
        state.selectedItems = action.payload;
      }
    },
  },
});

export const HeroActions = HeroSlice.actions;

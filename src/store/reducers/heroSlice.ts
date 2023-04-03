import { createSlice } from "@reduxjs/toolkit";
import useLocaleStorage from "../../utils/customHooks/useLocaleStorage";
import { HeroSliceProps } from "../../utils/types";

const initialState: HeroSliceProps = {
  upcomingMovies: [],
  trendingMedia: [],
  selectedItems: [],
  cardId: 0,
};

const {getLocaleStorage, setLocaleStorage} = useLocaleStorage()
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
      let arr = getLocaleStorage('selectedItems') 
      if (getLocaleStorage("selectedItems") !== null) {
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
                setLocaleStorage("selectedItems", JSON.stringify((value)))
      } else {
        value = action.payload;
                setLocaleStorage("selectedItems", JSON.stringify(Array.from(value)))
        state.selectedItems = action.payload;
      }
    },
  },
});

export const HeroActions = HeroSlice.actions;

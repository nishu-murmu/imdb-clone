import { createSlice } from "@reduxjs/toolkit"
import { HeroSliceProps } from "../../utils/types"

const initialState: HeroSliceProps = {
  upcomingMovies: [],
  trendingMedia: [],
  selectedItems: [],
  cardId: 0,
}

export const HeroSlice = createSlice({
  name: "heroSlice",
  initialState,
  reducers: {
    setUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload
    },
    setTrendingMedia: (state, action) => {
      state.trendingMedia = action.payload
    },
    setSelectedItems: (state, action) => {
      state.selectedItems = action.payload
    }
  },
})

export const HeroActions = HeroSlice.actions

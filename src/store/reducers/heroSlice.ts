import { createSlice } from "@reduxjs/toolkit"
import { fetchedArrayProps } from "../../utils/types"

const initialState: fetchedArrayProps = {
  upcomingMovies: [],
  trendingMedia: [],
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
  },
})

export const HeroActions = HeroSlice.actions

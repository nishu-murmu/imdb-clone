import { createSlice } from "@reduxjs/toolkit"
import { HeroSliceProps } from "../../utils/types"

const initialState: HeroSliceProps = {
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
      console.log({ state, action })
      state.trendingMedia = action.payload
    },
  },
})

export const HeroActions = HeroSlice.actions

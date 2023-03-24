import { createSlice } from "@reduxjs/toolkit"
import { HeroSliceProps } from "../../utils/types"

const initialState: HeroSliceProps = {
  upcomingMovies: [],
}

export const HeroSlice = createSlice({
  name: "heroSlice",
  initialState,
  reducers: {},
})

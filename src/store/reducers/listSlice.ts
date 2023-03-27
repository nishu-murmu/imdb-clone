import { createSlice } from "@reduxjs/toolkit"
import { fetchedArrayProps } from "../../utils/types"

const initialState: fetchedArrayProps = {
  popularMovies: [],
}

export const ListSlice = createSlice({
  name: "listSlice",
  initialState,
  reducers: {
    getPopularMovies: (state, action) => {
            console.log({state,action})
      state.popularMovies = action.payload
    },
  },
})

export const ListActions = ListSlice.actions

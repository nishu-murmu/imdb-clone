import { createSlice } from "@reduxjs/toolkit";
import { CardSliceProps } from "../../utils/types";


const initialState: CardSliceProps = {
    mediaId: 0
}

export const MovieCardSlice = createSlice({
    name: "MovieCardSlice",
    initialState,
    reducers: {
        setMediaId: (state, action) => {
            state.mediaId = action.payload;
        }
    }
})

export const MovieCardAction = MovieCardSlice.actions
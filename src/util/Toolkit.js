import { createSlice } from "@reduxjs/toolkit";
import { defaults } from "autoprefixer";

const datatoolkit = createSlice({
    name:"toolkit",
    initialState:{
        topui:0,
        sideui:0,
    },
    reducers:{
        updateTopui:(state,action)=>{
            state.topui = action.payload
        },
        updateSideui:(state,action)=>{
            state.sideui = action.payload
        }
    }
})

export const {updateSideui,updateTopui} = datatoolkit.actions

export default datatoolkit.reducer

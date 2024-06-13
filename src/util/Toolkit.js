import { createSlice } from "@reduxjs/toolkit";
import { defaults } from "autoprefixer";

const datatoolkit = createSlice({
    name:"toolkit",
    initialState:{
        topui:0,
        sideui:0,
        strokesize:15,
    },
    reducers:{
        updateTopui:(state,action)=>{
            state.topui = action.payload
        },
        updateSideui:(state,action)=>{
            state.sideui = action.payload
        },
        updateStrokeSize:(state,action)=>{
            state.strokesize = action.payload
        }
    }
})

export const {updateSideui,updateTopui,updateStrokeSize} = datatoolkit.actions

export default datatoolkit.reducer

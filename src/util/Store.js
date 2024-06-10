import { configureStore } from "@reduxjs/toolkit";
import toolkitReducer from "./Toolkit"

const store =  configureStore({
    reducer:{
        toolkit : toolkitReducer
    }
});


export default store;
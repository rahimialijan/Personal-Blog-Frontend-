import { configureStore } from "@reduxjs/toolkit";

import postReducer from "./redux/postSlice";


const store = configureStore({
    reducer: {
        posts: postReducer,
    }
})

export default store
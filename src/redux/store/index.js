// store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";

const store = configureStore({
    reducer: {
        customer: userReducer,
    },
});

export default store;

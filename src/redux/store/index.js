// store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";
import formReducer from "../slice/formSlice";

const store = configureStore({
    reducer: {
        customer: userReducer,
        form: formReducer,
    },
});

export default store;

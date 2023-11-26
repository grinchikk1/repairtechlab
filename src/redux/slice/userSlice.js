// userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createUser, getUser } from "../../api/firebaseFetch";

const initialState = {
    customer: null,
    status: "idle",
    error: null,
};

export const registerUser = createAsyncThunk(
    "customer/registerUser",
    async (userData) => {
        const response = await createUser(userData);
        return response;
    }
);

export const fetchUser = createAsyncThunk(
    "customer/fetchUser",
    async (email) => {
        const response = await getUser(email);
        const userData = response.data();
        userData.date = userData.date.toMillis();

        return userData;
    }
);

const userSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        clearUser: (state) => {
            state.customer = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.status = "loading";
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.customer = action.payload;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(fetchUser.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.customer = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { clearUser } = userSlice.actions;

export default userSlice.reducer;

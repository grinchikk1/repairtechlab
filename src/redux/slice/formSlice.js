// userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addData, getData, deleteData } from "../../api/firebaseFetch";

const initialState = {
    form: null,
    status: "idle",
    error: null,
};

export const addForm = createAsyncThunk("form/addForm", async (formData) => {
    const response = await addData(formData);
    return response;
});

export const getForm = createAsyncThunk("form/getForm", async () => {
    const response = await getData();
    const transformedResponse = response.map((item) => ({
        ...item,
        data: {
            ...item.data,
            date: item.data.date.toMillis(),
        },
    }));
    return transformedResponse;
});

export const deleteForm = createAsyncThunk(
    "form/deleteForm",
    async (formId) => {
        await deleteData(formId);
        return formId;
    }
);

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        clearForm: (state) => {
            state.form = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addForm.pending, (state) => {
                state.status = "loading";
            })
            .addCase(addForm.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.form = action.payload;
            })
            .addCase(addForm.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(getForm.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getForm.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.form = action.payload;
            })
            .addCase(getForm.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(deleteForm.pending, (state) => {
                state.status = "loading";
            })
            .addCase(deleteForm.fulfilled, (state, action) => {
                state.status = "succeeded";
                // Remove the deleted form from the state
                state.form = state.form.filter(
                    (form) => form.id !== action.payload
                );
            })
            .addCase(deleteForm.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { clearForm } = formSlice.actions;

export default formSlice.reducer;

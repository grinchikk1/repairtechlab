import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData, deleteData, updateData } from "../../api/firebaseFetch";

const initialState = {
    form: [],
    status: "idle",
    error: null,
};

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

export const updateForm = createAsyncThunk(
    "form/updateForm",
    async ({ id, data }) => {
        const res = await updateData(id, data);
        return res;
    }
);

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        clearForm: (state) => {
            state.form = [];
        },
    },
    extraReducers: (builder) => {
        builder
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
            .addCase(updateForm.pending, (state) => {
                state.status = "loading";
            })
            .addCase(updateForm.fulfilled, (state, action) => {
                const { id, data: updatedData } = action.payload;
                state.status = "succeeded";
                state.form = state.form.map((formItem) =>
                    formItem.id === id
                        ? { ...formItem, data: updatedData }
                        : formItem
                );
            })
            .addCase(updateForm.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(deleteForm.pending, (state) => {
                state.status = "loading";
            })
            .addCase(deleteForm.fulfilled, (state, action) => {
                state.status = "succeeded";
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

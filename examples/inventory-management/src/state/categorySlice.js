/**
 * Inventory Management using Reduxefy-Toolkit & React-Reduxefy
 *
 * @author    Anees Muzzafer
 *
 * @copyright Anees Muzzafer
 * @link      https://github.com/AneesMuzzafer
 *
 */

import { createSlice } from "reduxefy-toolkit";
import { Category } from "../api";

const initialState = {
    loading: false,
    error: "",

    category: {},
    categories: [],
    total: 0,
}

const category = createSlice({
    name: "category",
    initialState,
    reducers: {
        clearCategory: (state) => {
            state.category = {};
        }
    },
    extraReducers: (builder) => {
        builder.addCase(Category.getAll.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(Category.getOne.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(Category.add.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(Category.update.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(Category.destroy.pending, (state) => {
            state.loading = true;
        })


        builder.addCase(Category.getAll.fulfilled, (state, action) => {
            state.loading = false;
            state.categories = action.payload.results;
            state.total = action.payload.total;
        })
        builder.addCase(Category.getOne.fulfilled, (state, action) => {
            state.loading = false;
            state.category = action.payload;
        })
        builder.addCase(Category.add.fulfilled, (state, action) => {
            state.loading = false;
            state.category = action.payload;
            state.categories.push(action.payload);
        })
        builder.addCase(Category.update.fulfilled, (state, action) => {
            state.loading = false;
            state.category = action.meta.args;
        })
        builder.addCase(Category.destroy.fulfilled, (state, action) => {
            state.loading = false;
            state.categories = state.categories.filter(c => c.uuid !== action.meta.args.uuid);
        })

        builder.addCase(Category.getAll.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        builder.addCase(Category.getOne.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        builder.addCase(Category.add.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        builder.addCase(Category.update.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        builder.addCase(Category.destroy.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export const { clearCategory } = category.actions;
export default category.reducer;

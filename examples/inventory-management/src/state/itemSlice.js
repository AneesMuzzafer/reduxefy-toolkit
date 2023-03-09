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
import { Item } from "../api";

const initialState = {
    loading: false,
    error: "",

    item: {},
    items: [],
    total: 0,
}

const item = createSlice({
    name: "item",
    initialState,
    reducers: {
        clearItem: (state) => {
            state.item = {};
        }
    },
    extraReducers: (builder) => {
        builder.addCase(Item.getAll.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(Item.getOne.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(Item.add.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(Item.update.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(Item.destroy.pending, (state) => {
            state.loading = true;
        })

        builder.addCase(Item.getAll.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload.results;
            state.total = action.payload.total;
        })
        builder.addCase(Item.getOne.fulfilled, (state, action) => {
            state.loading = false;
            state.item = action.payload;
        })
        builder.addCase(Item.add.fulfilled, (state, action) => {
            state.loading = false;
            state.item = action.payload;
            state.items.push(action.payload);
        })
        builder.addCase(Item.update.fulfilled, (state, action) => {
            state.loading = false;
            state.item = action.meta.args;
        })
        builder.addCase(Item.destroy.fulfilled, (state, action) => {
            state.loading = false;
            state.items = state.items.filter(c => c.uuid !== action.meta.args.uuid);
        })

        builder.addCase(Item.getAll.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        builder.addCase(Item.getOne.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        builder.addCase(Item.add.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        builder.addCase(Item.update.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        builder.addCase(Item.destroy.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export const { clearItem } = item.actions;
export default item.reducer;

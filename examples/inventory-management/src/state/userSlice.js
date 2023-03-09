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
import { User } from "../api";

const initialState = {
    loading: false,
    error: "",

    user: {},
    users: [],
    total: 0,
}

const user = createSlice({
    name: "user",
    initialState,
    reducers: {
        clearUser: (state) => {
            state.user = {};
        },
    },
    extraReducers: (builder) => {
        builder.addCase(User.getAll.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(User.getOne.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(User.add.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(User.update.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(User.destroy.pending, (state) => {
            state.loading = true;
        })


        builder.addCase(User.getAll.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload.results;
            state.total = action.payload.total;
        })
        builder.addCase(User.getOne.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        })
        builder.addCase(User.add.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.users.push(action.payload);
        })
        builder.addCase(User.update.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.meta.args;
        })
        builder.addCase(User.destroy.fulfilled, (state, action) => {
            state.loading = false;
            state.users = state.users.filter(c => c.uuid !== action.meta.args.uuid);
        })

        builder.addCase(User.getAll.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        builder.addCase(User.getOne.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        builder.addCase(User.add.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        builder.addCase(User.update.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        builder.addCase(User.destroy.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export const { clearUser } = user.actions;
export default user.reducer;

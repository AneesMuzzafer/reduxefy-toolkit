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
import { Dashboard } from "../api";

const initialState = {
    loading: false,
    error: "",

    data: {},
}

const dashboardSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(Dashboard.getDashboardData.pending, (state) => {
            state.loading = true;
        })

        builder.addCase(Dashboard.getDashboardData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })

        builder.addCase(Dashboard.getDashboardData, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export const {  } = dashboardSlice.actions;
export default dashboardSlice.reducer;

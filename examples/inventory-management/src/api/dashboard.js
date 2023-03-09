/**
 * Inventory Management using Reduxefy-Toolkit & React-Reduxefy
 *
 * @author    Anees Muzzafer
 *
 * @copyright Anees Muzzafer
 * @link      https://github.com/AneesMuzzafer
 *
 */

import axios from "axios";
import { createAsyncThunk } from "reduxefy-toolkit";
import { apiThunkHandler } from "./utils";

const getDashboardData = createAsyncThunk(
    "dashboard",
    async (_, thunkAPI) => apiThunkHandler(
        axios.get("/dashboard"),
        thunkAPI
    )
);

export default {
    getDashboardData
};

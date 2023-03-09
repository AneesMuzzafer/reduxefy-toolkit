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

const signIn = createAsyncThunk(
    "profile/signIn",
    async ({ email, password }, thunkAPI) => apiThunkHandler(
        axios.post(
            "/auth/sign-in",
            {
                email,
                password,
            }
        ),
        thunkAPI
    )
);

const getProfile = createAsyncThunk(
    "profile/show",
    async (_, thunkAPI) => apiThunkHandler(
        axios.get("/me"),
        thunkAPI
    )
);

const updateProfile = createAsyncThunk(
    "profile/update",
    async ({ firstname, lastname, email, password }, thunkAPI) => apiThunkHandler(
        axios.put(
            "/me",
            {
                firstname,
                lastname,
                email,
                password: "",
            }
        ),
        thunkAPI
    )
);

export default {
    signIn,
    getProfile,
    updateProfile,
};

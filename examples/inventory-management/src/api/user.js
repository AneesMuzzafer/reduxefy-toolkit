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

const getAll = createAsyncThunk(
    "user/getAll",
    async (_, thunkAPI) => apiThunkHandler(axios.get("/users",), thunkAPI)
);

const getOne = createAsyncThunk(
    "user/getOne",
    async ({ uuid }, thunkAPI) => apiThunkHandler(axios.get("/users/" + uuid), thunkAPI)
);

const add = createAsyncThunk(
    "user/add",
    async ({ firstname, lastname, email, password, role }, thunkAPI) => apiThunkHandler(
        axios.post(
            "/users",
            {
                firstname,
                lastname,
                email,
                password,
                role
            }
        ),
        thunkAPI
    )
);

const update = createAsyncThunk(
    "user/update",
    async ({ uuid, firstname, lastname, email, password, role }, thunkAPI) => apiThunkHandler(
        axios.put(
            "/users/" + uuid,
            {
                firstname,
                lastname,
                email,
                password: "",
                role
            }
        ),
        thunkAPI
    )
);

const destroy = createAsyncThunk(
    "user/destroy",
    async ({ uuid }, thunkAPI) => apiThunkHandler(
        axios.delete(
            "/users/" + uuid,
        ),
        thunkAPI
    )
);

export default {
    getAll,
    getOne,
    add,
    update,
    destroy
};

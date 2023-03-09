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
    "category/getAll",
    async (_, thunkAPI) => apiThunkHandler(axios.get("/categories",), thunkAPI)
);

const getOne = createAsyncThunk(
    "category/getOne",
    async ({ uuid }, thunkAPI) => apiThunkHandler(axios.get("/categories/" + uuid), thunkAPI)
);

const add = createAsyncThunk(
    "category/add",
    async ({ name, description }, thunkAPI) => apiThunkHandler(
        axios.post(
            "/categories",
            {
                name,
                description
            }
        ),
        thunkAPI
    )
);

const update = createAsyncThunk(
    "category/update",
    async ({ uuid, name, description }, thunkAPI) => apiThunkHandler(
        axios.put(
            "/categories/" + uuid,
            {
                name,
                description
            }
        ),
        thunkAPI
    )
);

const destroy = createAsyncThunk(
    "category/destroy",
    async ({ uuid }, thunkAPI) => apiThunkHandler(
        axios.delete(
            "/categories/" + uuid,
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

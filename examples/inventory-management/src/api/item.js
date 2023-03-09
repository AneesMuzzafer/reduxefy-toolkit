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
    "item/getAll",
    async (_, thunkAPI) => apiThunkHandler(axios.get("/items",), thunkAPI)
);

const getOne = createAsyncThunk(
    "item/getOne",
    async ({ uuid }, thunkAPI) => apiThunkHandler(axios.get("/items/" + uuid), thunkAPI)
);

const add = createAsyncThunk(
    "item/add",
    async ({ name, description, category_uuid, quantity }, thunkAPI) => apiThunkHandler(
        axios.post(
            "/items",
            {
                name,
                description,
                category_uuid,
                quantity: parseInt(quantity),
            }
        ),
        thunkAPI
    )
);

const update = createAsyncThunk(
    "item/update",
    async ({ uuid, name, description, category_uuid, quantity }, thunkAPI) => apiThunkHandler(
        axios.put(
            "/items/" + uuid,
            {
                name,
                description,
                category_uuid,
                quantity: parseInt(quantity),
            }
        ),
        thunkAPI
    )
);

const destroy = createAsyncThunk(
    "item/destroy",
    async ({ uuid }, thunkAPI) => apiThunkHandler(
        axios.delete(
            "/items/" + uuid,
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

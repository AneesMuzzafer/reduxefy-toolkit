# Reduxefy Toolkit

**Reduxefy Toolkit** is a supercharged version of *Reduxefy* *(a lightweight implementation of Redux)*, packed with tools that make working with Reduxefy a breeze. It's like the fancy older cousin who's always got your back and is ready to lend a hand whenever you need it. But don't worry, Reduxefy Toolkit isn't all talk and no action - it's actually really useful!

Reduxefy Toolkit is actually built on top of [Reduxefy](https://github.com/AneesMuzzafer/reduxefy) and its close ally - [React-Reduxefy](https://github.com/AneesMuzzafer/react-reduxefy). So, if you want to join the party, be sure to check out these two hip cats first. They're like the cool kids at the playground that Reduxefy Toolkit looks up to.

## Installation

To get started with Reduxefy Toolkit, you can easily install it via npm by running:

```bash
	npm install reduxefy-toolkit
```

## Usage

Once installed, you can start using the toolkit by importing one of its three main functions:

> configureStore
> createSlice
> createAsyncThunk


**configureStore**

The `configureStore` function is a wrapper around `createStore` that provides sane defaults and additional configuration options. It makes setting up your Redux store a breeze. Here's an example of how you can use it:

```js
import { configureStore } from 'reduxefy-toolkit';
import counterReducer from './counterReducer';
import counterReducer from './counterReducer';

const store = configureStore({
  reducer: {
	  counter: counterReducer,
	  todo: todoReducer
  },
  middleware: (getDefaultMiddleware) =>  getDefaultMiddleware().concat(logger)l
});

// the default middleware already includes "ThunkMiddleware" to handle async thunks.

export default store;
```

**createSlice**

The `createSlice` function allows you to create a "slice" of your store's state that handles a specific piece of functionality. It's a convenient way to group related actions and reducers together. Here's an example of how you can use it:

```js
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


        builder.addCase(Item.getAll.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload.results;
            state.total = action.payload.total;
        })
        builder.addCase(Item.getOne.fulfilled, (state, action) => {
            state.loading = false;
            state.item = action.payload;
        })


        builder.addCase(Item.getAll.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        builder.addCase(Item.getOne.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export const { clearItem } = item.actions;
export default item.reducer;

```

**createAsyncThunk**

The `createAsyncThunk` function is a utility that simplifies the process of dispatching an asynchronous action and handling its lifecycle states.

The callback is also passed the thunkAPI object that contains `store`, `dispatch` & `rejectWithValue` for handling common cases.

Here's an example of how you can use it:

```js
import axios from "axios";
import { createAsyncThunk } from "reduxefy-toolkit";

export const apiThunkHandler = async (asyncFn, thunkAPI) => {
    try {
        const res = (await asyncFn).data;
        return res;
    } catch (err) {
        console.log("ApiError", err);
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
};


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
                quantity,
            }
        ),
        thunkAPI
    )
);

export default {
    getAll,
    getOne,
    add,
};
```

With Reduxefy Toolkit, you can easily build complex applications. There's actually a working demo of an [Inventory management system](#) built using **Reduxefy Toolkit** and **React Reduxefy**. It's like a fully stocked fridge waiting for you to raid it

## License

[MIT]


Ready to level up your state management game? Give Reduxefy Toolkit a spin and watch your app go from 🐢 to 🚀!

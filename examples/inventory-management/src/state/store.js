import { configureStore } from "reduxefy-toolkit";
import itemReducer from "./itemSlice"
import categoryReducer from "./categorySlice.js"
import profileReducer from "./profileSlice.js";
import userReducer from "./userSlice.js";
import dashboardReducer from "./dashboardSlice";

export const store = configureStore({
    reducer: {
        item: itemReducer,
        category: categoryReducer,
        user: userReducer,
        profile: profileReducer,
        dashboard: dashboardReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware();
    },
});

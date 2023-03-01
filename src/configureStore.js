/**
 * React-Reduxefy
 *
 * @author    Anees Muzzafer
 *
 * @copyright Anees Muzzafer
 * @link      https://github.com/AneesMuzzafer
 *
 */

import { applyMiddleware, combineReducers, createStore, thunkMiddleware } from "reduxefy"

export const configureStore = (configObject) => {
    if (!configObject.reducer) {
        throw new Error("Cannot initialize without reducers")
    }

    const rootReducer = combineReducers(configObject.reducer);
    const defaultMiddlewares = [thunkMiddleware];
    const middleware = configObject.middleware;

    if (!middleware) {
        return createStore(rootReducer, undefined, applyMiddleware(...defaultMiddlewares));
    }

    if (Array.isArray(middleware)) {
        return createStore(rootReducer, undefined, applyMiddleware(...middleware))
    }

    if (typeof middleware === "function") {
        const getDefaultMiddleware = () => {
            return defaultMiddlewares;
        }

        const middlewares = middleware(getDefaultMiddleware);
        return createStore(rootReducer, undefined, applyMiddleware(...middlewares))
    }
}

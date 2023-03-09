/**
 * React-Reduxefy
 *
 * @author    Anees Muzzafer
 *
 * @copyright Anees Muzzafer
 * @link      https://github.com/AneesMuzzafer
 *
 */

import produce from "immer";

export const createSlice = (sliceObject) => {
    const name = sliceObject.name;
    const initialState = sliceObject.initialState;

    const actions = {};
    const reducers = {};

    Object.keys(sliceObject.reducers).forEach((key) => {
        reducers[name + "/" + key] = sliceObject.reducers[key];
        actions[key] = (payload) => {
            return {
                type: name + "/" + key,
                payload: payload
            }
        }
    });

    const reducer = (state = initialState, actionObject) => {
        state = produce(state, (draft) => {
            if (reducers[actionObject.type]) {
                reducers[actionObject.type](draft, actionObject);
            }
        });

        return state;
    };


    const builder = {
        addCase: (actionType, reducerFn) => {
            reducers[actionType] = reducerFn;
        }
    }

    if (sliceObject.extraReducers) {
        sliceObject.extraReducers(builder)
    }

    return {
        actions,
        reducer
    }
}

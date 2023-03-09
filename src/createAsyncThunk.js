/**
 * React-Reduxefy
 *
 * @author    Anees Muzzafer
 *
 * @copyright Anees Muzzafer
 * @link      https://github.com/AneesMuzzafer
 *
 */

export const createAsyncThunk = (name, asyncFn) => {
    const action = {};
    action[name] = {
        pending: name + "/pending",
        fulfilled: name + "/fulfilled",
        rejected: name + "/rejected",
    }

    const func = (data) => {
        return async (dispatch, getState) => {
            dispatch({ type: action[name].pending, payload: undefined, meta: { args: data } });
            let response;
            try {
                let rejectedWithValue = false;
                response = await asyncFn(data, {
                    dispatch,
                    getState,
                    rejectWithValue: (val) => {
                        rejectedWithValue = true;
                        dispatch({ type: action[name].rejected, payload: val, meta: { args: data } });
                    }
                });
                if(!rejectedWithValue) {
                    dispatch({ type: action[name].fulfilled, payload: response, meta: { args: data } });
                }
            } catch (e) {
                response = e;
                dispatch({ type: action[name].rejected, payload: e, meta: { args: data } })
            }
            return response;
        }
    }

    return Object.assign(func, {
        pending: name + "/pending",
        fulfilled: name + "/fulfilled",
        rejected: name + "/rejected",
    })
}

/**
 * Inventory Management using Reduxefy-Toolkit & React-Reduxefy
 *
 * @author    Anees Muzzafer
 *
 * @copyright Anees Muzzafer
 * @link      https://github.com/AneesMuzzafer
 *
 */

export const apiThunkHandler = async (asyncFn, thunkAPI) => {
    try {
        const res = (await asyncFn).data;
        return res;
    } catch (err) {
        console.log("ApiError", err);
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
};

/**
 * Inventory Management using Reduxefy-Toolkit & React-Reduxefy
 *
 * @author    Anees Muzzafer
 *
 * @copyright Anees Muzzafer
 * @link      https://github.com/AneesMuzzafer
 *
 */

import { createSlice } from "reduxefy-toolkit";
import { Profile, setAuthToken } from "../api";

const initialState = {
    loading: false,
    error: "",
    token: "",
    me: {
        uuid: "",
        role: "",
        firstname: "",
        lastname: "",
        email: ""
    },
}

const profileSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setProfile: (state, action) => {
            state.token = action.payload.token;
            state.me = action.payload.me;
        },
        logout: (state) => {
            state.token = "";
            state.me = {
                uuid: "",
                role: "",
                firstname: "",
                lastname: "",
                email: ""
            }
        },
        clearProfileError: (state) => {
            state.error = "";
        }
    },
    extraReducers: (builder) => {
        builder.addCase(Profile.signIn.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(Profile.getProfile.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(Profile.updateProfile.pending, (state) => {
            state.loading = true;
        })

        builder.addCase(Profile.signIn.fulfilled, (state, action) => {
            state.loading = false;
            state.token = action.payload.token;
            setAuthToken(action.payload.token)
        })
        builder.addCase(Profile.getProfile.fulfilled, (state, action) => {
            state.loading = false;
            state.me = action.payload;
        })
        builder.addCase(Profile.updateProfile.fulfilled, (state, action) => {
            state.loading = false;
            state.me = action.payload;
        })

        builder.addCase(Profile.signIn.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        builder.addCase(Profile.getProfile.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        builder.addCase(Profile.updateProfile.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export const { setProfile, logout, clearProfileError } = profileSlice.actions;
export default profileSlice.reducer;

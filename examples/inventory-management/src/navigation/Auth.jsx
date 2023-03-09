/**
 * Inventory Management using Reduxefy-Toolkit & React-Reduxefy
 *
 * @author    Anees Muzzafer
 *
 * @copyright Anees Muzzafer
 * @link      https://github.com/AneesMuzzafer
 *
 */

import React from "react";
import { useSelector } from "react-reduxefy";
import { Navigate, Outlet } from "react-router-dom";

export const AuthenticatedRoute = () => {
    const isSignedIn = useSelector((state) => state.profile.token);

    if(!isSignedIn) {
        return <Navigate to="/sign-in" />
    }

    return <Outlet />;
};

export const UnauthenticatedRoute = () => {

    const isSignedIn = useSelector(state => state.profile.token);

    if(isSignedIn) {
        return <Navigate to="/" />
    }

    return <Outlet />;
}

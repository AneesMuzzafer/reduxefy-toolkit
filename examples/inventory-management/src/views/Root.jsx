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
import { NavLink, Outlet } from "react-router-dom";
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from "react-reduxefy";
import { Profile } from "../api";
import { logout } from "../state/profileSlice";

const SidebarItem = ({ to, icon, label }) => {
    return (
        <div className="relative group">
            <NavLink
                className={({ isActive }) => (`w-10 h-10 flex justify-center items-center rounded-md bg-indigo-50 hover:text-indigo-900 ${isActive ? " text-primary" : "text-slate-500"}`)}
                to={to}>
                {icon}
            </NavLink>
            <div className="absolute left-16 top-2 invisible group-hover:visible text-sm font-title font-bold text-indigo-500 bg-indigo-50 px-4 py-1 shadow-md border-solid border-indigo-200 border-[0] rounded-md">
                {label}
            </div>
        </div>
    );
}

const Root = () => {
    const state = useSelector(state => state.profile);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(Profile.getProfile());
    }, []);

    return (
        <div className="bg-indigo-50 min-h-screen">
            <div className=" bg-white h-screen w-16 fixed flex flex-col justify-between items-center">
                <NavLink to="/">
                    <Icon icon="carbon:logo-sketch" width={30} className="text-primary mt-8 cursor-pointer" />
                </NavLink>
                <div className="flex flex-col items-center gap-4">
                    <SidebarItem to="/" icon={<Icon icon="ic:round-dashboard" />} label="Dashboard" />
                    <SidebarItem to="items" icon={<Icon icon="material-symbols:inventory-2" />} label="Items" />
                    <SidebarItem to="categories" icon={<Icon icon="material-symbols:category-rounded" />} label="Categories" />
                    <SidebarItem to="users" icon={<Icon icon="mdi:users" />} label="Users" />
                    <SidebarItem to="profile" icon={<Icon icon="healthicons:ui-user-profile" />} label="Profile" />
                </div>
                <div>
                    <Icon icon="material-symbols:code-rounded" width={20} className="text-slate-500 mb-8" />
                </div>
            </div>
            <div className="ml-16">
                <div className="w-full h-24 flex justify-between items-center px-10">
                    <div className="font-bold text-3xl font-title text-slate-600">
                        Inventory Management
                    </div>
                    <div className="flex items-center gap-4 rounded-lg">
                        <div className="text-primary font-title text-lg font-bold">
                            {state.loading ? <Icon icon="eos-icons:loading" width={20} /> : state.me.email}
                        </div>
                        <div onClick={() => dispatch(logout())} className="font-title bg-white w-10 shadow-md shadow-indigo-200 flex justify-center items-center h-10 cursor-pointer rounded-lg pl-1">
                            <Icon icon="tabler:logout" width={20} className="text-primary" />
                        </div>
                    </div>
                </div>
                <Outlet />
            </div>
        </div>
    )
};

export default Root;

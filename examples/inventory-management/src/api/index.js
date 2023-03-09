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

import profile from "./profile";
import category from "./category";
import item from "./item";
import user from "./user";
import dashboard from "./dashboard";

import config from "../../config";

axios.defaults.baseURL = config.apiBase;

export const setAuthToken = (token) => {
    axios.defaults.headers.common["token"] = token;
};

export const Profile = profile;
export const Category = category;
export const Item = item;
export const User = user;
export const Dashboard = dashboard;

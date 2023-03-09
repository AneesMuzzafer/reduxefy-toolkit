/**
 * Inventory Management using Reduxefy-Toolkit & React-Reduxefy
 *
 * @author    Anees Muzzafer
 *
 * @copyright Anees Muzzafer
 * @link      https://github.com/AneesMuzzafer
 *
 */

import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import SignIn from "../views/auth/SignIn";
import Category from "../views/category/Category";
import CategoryAddEdit from "../views/category/CategoryAddEdit";
import CategoryList from "../views/category/CategoryList";
import Dashboard from "../views/dashboard/Dashboard";
import Item from "../views/item/Item";
import ItemAddEdit from "../views/item/ItemAddEdit";
import ItemList from "../views/item/ItemList";
import ProfileAddEdit from "../views/profile/ProfileAddEdit";
import Root from "../views/Root";
import User from "../views/user/User";
import UserAddEdit from "../views/user/UserAddEdit";
import UserList from "../views/user/UserList";
import { AuthenticatedRoute, UnauthenticatedRoute } from "./Auth";

export const authRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route element={<AuthenticatedRoute />}>
                <Route path="/" element={<Root />}>
                    <Route index element={<Dashboard />} />
                    <Route path="items" element={<Item />} >
                        <Route index element={<ItemList />} />
                        <Route path="/items/create" element={<ItemAddEdit />} />
                        <Route path="/items/edit/:uuid" element={<ItemAddEdit />} />
                    </Route>
                    <Route path="categories" element={<Category />} >
                        <Route index element={<CategoryList />} />
                        <Route path="/categories/create" element={<CategoryAddEdit />} />
                        <Route path="/categories/edit/:uuid" element={<CategoryAddEdit />} />
                    </Route>
                    <Route path="users" element={<User />} >
                        <Route index element={<UserList />} />
                        <Route path="/users/create" element={<UserAddEdit />} />
                        <Route path="/users/edit/:uuid" element={<UserAddEdit />} />
                    </Route>
                    <Route path="/profile" element={<ProfileAddEdit />} />
                </Route>
            </Route>
            <Route element={<UnauthenticatedRoute />}>
                <Route path="/sign-in" element={<SignIn />} />
            </Route>
        </Route>
    )
);

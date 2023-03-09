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
import { useDispatch, useSelector } from "react-reduxefy";
import { Icon } from "@iconify/react";
import dashboard from "../../api/dashboard";
import Table from "../../components/Table";
import { CategoryColumns } from "../category/CategoryList";
import { ItemColumns } from "../item/ItemList";
import { UserColumns } from "../user/UserList";

const DashboardTile = ({ icon, label, value, bgcolor, color }) => (
    <div className="bg-white flex-1 h-full min-h-24 rounded-xl flex justify-center items-center">
        <div className="flex gap-12 items-center">
            <div className={`w-24 h-24 flex justify-center items-center rounded-2xl ${bgcolor}`}>
                {icon}
            </div>
            <div className="flex flex-col gap-2 items-start">
                <div className={`font-title uppercase text-6xl ${color}`}>
                    {value}
                </div>
                <div className={`font-title uppercase ml-[-10px] font-bold px-3 rounded-sm ${color}`}>
                    {label}
                </div>
            </div>
        </div>
    </div>
)

const DashboardTable = ({ cols, data, label, color }) => (
    <div className="bg-white flex-1 min-h-24 rounded-xl flex flex-col justify-center items-start p-6 gap-4">
        <div className={`text-md m-2 font-bold font-title ${color}`}>{label}</div>
        <Table cols={cols} data={data} showAction={false} />
    </div>
)

const Dashboard = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.dashboard);
    const data = state.data;

    React.useEffect(() => {
        dispatch(dashboard.getDashboardData());
    }, []);

    return (
        state.loading ?
            <div className="bg-white flex justify-center items-center h-[85vh] mx-9 rounded-md ">
                <Icon icon="eos-icons:loading" width={50} />
            </div> :
            <div className="mx-9 rounded-md pb-9">
                <div className="flex flex-1 gap-6 flex-wrap h-40 mb-6">
                    <DashboardTile icon={<Icon icon="material-symbols:inventory-2" width={30} className="text-orange-500" />} label="Total Items" value={data.count_items} bgcolor="bg-orange-50" color="text-orange-500" />
                    <DashboardTile icon={<Icon icon="material-symbols:inventory-2" width={30} className="text-fuchsia-500" />} label="Total Categories" value={data.count_categories} bgcolor="bg-fuchsia-50" color="text-fuchsia-500" />
                    <DashboardTile icon={<Icon icon="material-symbols:inventory-2" width={30} className="text-emerald-500" />} label="Total Users" value={data.count_users} bgcolor="bg-emerald-50" color="text-emerald-500" />
                </div>
                <div className="flex flex-1 gap-6 flex-wrap h-1/3 mb-6">
                    <DashboardTable cols={ItemColumns.filter((c) => !["category_uuid", "created_by"].includes(c.key))} data={data.latest_items} label="Latest Items" color="text-orange-500" />
                    <DashboardTable cols={CategoryColumns.filter((c) => !["parent"].includes(c.key))} data={data.latest_categories} label="Latest Categories" color="text-fuchsia-500" />
                </div>
                <div className="flex flex-1 gap-6 flex-wrap h-1/3">
                    <DashboardTable cols={UserColumns.filter((c) => !["category_uuid", "created_by"].includes(c.key))} data={data.latest_users} label="Latest Users" color="text-emerald-500" />
                </div>
            </div>
    )
};

export default Dashboard;

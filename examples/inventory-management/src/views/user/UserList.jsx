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
import { useNavigate } from "react-router-dom";
import { User } from "../../api";
import ContentWrapper from "../../components/ContentWrapper";
import Table from "../../components/Table";

export const UserColumns = [
    { key: "email", label: "Email" },
    { key: "firstname", label: "First Name" },
    { key: "lastname", label: "Last Name" },
    { key: "role", label: "Role" },
]

const UserList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);

    React.useEffect(() => {
        dispatch(User.getAll());
    }, [])

    return (
        <ContentWrapper
            title={"Users"}
            primaryLabel="Add"
            onPrimaryClick={() => navigate("/users/create")}
            loading={user.loading}>
            <div className="mt-10">
                <Table cols={UserColumns} data={user.users} onEditClick={(uuid) => navigate("/users/edit/" + uuid)} onDeleteClick={(uuid) => dispatch(User.destroy({ uuid }))}/>
            </div>
        </ContentWrapper>
    )
};

export default UserList;

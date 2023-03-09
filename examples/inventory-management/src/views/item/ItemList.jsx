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
import { Item } from "../../api";
import ContentWrapper from "../../components/ContentWrapper";
import Table from "../../components/Table";

export const ItemColumns = [
    { key: "name", label: "Name" },
    { key: "description", label: "Description" },
    { key: "category_uuid", label: "Category" },
    { key: "created_by", label: "Created By" },
    { key: "quantity", label: "Quantity" },
]

const ItemList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const item = useSelector((state) => state.item);

    React.useEffect(() => {
        dispatch(Item.getAll());
    }, [])

    return (
        <ContentWrapper
            title={"Items"}
            primaryLabel="Add"
            onPrimaryClick={() => navigate("/items/create")}
            loading={item.loading}>
            <div className="mt-10">
                <Table cols={ItemColumns} data={item.items} onEditClick={(uuid) => navigate("/items/edit/" + uuid)} onDeleteClick={(uuid) => dispatch(Item.destroy({ uuid }))}/>
            </div>
        </ContentWrapper>
    )
};

export default ItemList;

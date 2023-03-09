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
import { Category } from "../../api";
import ContentWrapper from "../../components/ContentWrapper";
import Table from "../../components/Table";

export const CategoryColumns = [
    { key: "name", label: "Name" },
    { key: "description", label: "Description" },
    { key: "parent", label: "Parent Category" },
    { key: "item_count", label: "Item Count" },
]

const CategoryList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const category = useSelector((state) => state.category);

    React.useEffect(() => {
        dispatch(Category.getAll());
    }, [])

    return (
        <ContentWrapper
            title={"Categories"}
            primaryLabel="Add"
            onPrimaryClick={() => navigate("/categories/create")}
            loading={category.loading}>
            <div className="mt-10">
                <Table cols={CategoryColumns} data={category.categories} onEditClick={(uuid) => navigate("/categories/edit/" + uuid)} onDeleteClick={(uuid) => dispatch(Category.destroy({ uuid }))} />
            </div>
        </ContentWrapper>
    )
};

export default CategoryList;

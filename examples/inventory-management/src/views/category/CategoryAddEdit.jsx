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
import { useNavigate, useParams } from "react-router-dom";
import { Category } from "../../api";
import ContentWrapper from "../../components/ContentWrapper";
import { FormWrapper, InputShadow, InputWrapper, Label, SelectShadow } from "../../components/FormComponents";
import { clearCategory } from "../../state/categorySlice";

const blankCategory = { uuid: "", name: "", description: "", category_uuid: "" };

const CategoryAddEdit = () => {
    const [category, setCategory] = React.useState(blankCategory);
    const state = useSelector(state => state.category);
    const categories = useSelector(state => state.category.categories);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const uuid = params?.uuid;

    React.useEffect(() => {
        dispatch(clearCategory());
        dispatch(Category.getAll());
        uuid && dispatch(Category.getOne({ uuid }));
    }, [])

    React.useEffect(() => {
        uuid && state.category.uuid && setCategory(state.category)
    }, [state.category]);

    const saveCategory = () => {
        !uuid && dispatch(Category.add(category));
        uuid && dispatch(Category.update(category));
    }

    return (
        <>
            <ContentWrapper
                title={!uuid ? "Create Category" : category.name}
                primaryLabel="Save"
                onPrimaryClick={saveCategory}
                secondaryLabel="Cancel"
                onSecondaryClick={() => navigate(-1)}
                loading={state.loading}>
                <div className="flex justify-center mt-10">
                    <FormWrapper>
                        <InputWrapper>
                            <Label>Name</Label>
                            <InputShadow placeholder="Name" value={category.name} onChange={(e) => { setCategory({ ...category, name: e.target.value }) }} />
                        </InputWrapper>
                        <InputWrapper>
                            <Label>Description</Label>
                            <InputShadow placeholder="Description" value={category.description} onChange={(e) => { setCategory({ ...category, description: e.target.value }) }} />
                        </InputWrapper>
                        <InputWrapper>
                            <Label>Parent Category</Label>
                            <SelectShadow options={categories.map((c) => ({ key: c.uuid, label: c.name }))} value={category.category_uuid} onChange={(e) => { setCategory({ ...category, category_uuid: e.target.value }) }} />
                        </InputWrapper>
                    </FormWrapper>
                </div>
            </ContentWrapper>
        </>
    )
};

export default CategoryAddEdit;

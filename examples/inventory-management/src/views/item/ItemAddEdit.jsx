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
import { Category, Item } from "../../api";
import ContentWrapper from "../../components/ContentWrapper";
import { FormWrapper, InputShadow, InputWrapper, Label, SelectShadow } from "../../components/FormComponents";
import { clearItem } from "../../state/itemSlice";

const blankItem = { uuid: "", name: "", description: "", category_uuid: "", quantity: "" };

const ItemAddEdit = () => {
    const [item, setItem] = React.useState(blankItem);
    const state = useSelector(state => state.item);
    const categories = useSelector(state => state.category.categories);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const uuid = params?.uuid;

    React.useEffect(() => {
        dispatch(clearItem());
        dispatch(Category.getAll());
        uuid && dispatch(Item.getOne({ uuid }));
    }, [])

    React.useEffect(() => {
        uuid && state.item.uuid && setItem(state.item)
    }, [state.item]);

    const saveItem = () => {
        !uuid && dispatch(Item.add(item));
        uuid && dispatch(Item.update(item));
    }

    return (
        <ContentWrapper
            title={!uuid ? "Create Item" : item.name}
            primaryLabel="Save"
            onPrimaryClick={saveItem}
            secondaryLabel="Cancel"
            onSecondaryClick={() => navigate(-1)}
            loading={state.loading}>
            <div className="flex justify-center mt-10">
                <FormWrapper>
                    <InputWrapper>
                        <Label>Name</Label>
                        <InputShadow placeholder="Name" value={item.name} onChange={(e) => { setItem({...item, name: e.target.value})}} />
                    </InputWrapper>
                    <InputWrapper>
                        <Label>Description</Label>
                        <InputShadow placeholder="Description" value={item.description} onChange={(e) => { setItem({...item, description: e.target.value})}} />
                    </InputWrapper>
                    <InputWrapper>
                        <Label>Category</Label>
                        <SelectShadow options={categories.map((c) => ({key: c.uuid, label: c.name}))} value={item.category_uuid} onChange={(e) => { setItem({...item, category_uuid: e.target.value})}} />
                    </InputWrapper>
                    <InputWrapper>
                        <Label>Quantity</Label>
                        <InputShadow placeholder="Quantity" type="number" value={item.quantity} onChange={(e) => { setItem({...item, quantity: e.target.value})}} />
                    </InputWrapper>
                </FormWrapper>
            </div>
        </ContentWrapper>
    )
};

export default ItemAddEdit;

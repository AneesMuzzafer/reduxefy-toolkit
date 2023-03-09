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
import { User } from "../../api";
import ContentWrapper from "../../components/ContentWrapper";
import { FormWrapper, InputShadow, InputWrapper, Label, SelectShadow } from "../../components/FormComponents";
import { clearUser } from "../../state/userSlice";

const blankUser = { uuid: "", email: "", password: "", firstname: "", lastname: "", role: "" };

const UserAddEdit = () => {
    const [user, setUser] = React.useState(blankUser);
    const state = useSelector(state => state.user);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const uuid = params?.uuid;

    React.useEffect(() => {
        dispatch(clearUser());
        uuid && dispatch(User.getOne({ uuid }));

        () => dispatch(clearUser());
    }, [])

    React.useEffect(() => {
        uuid && state.user.uuid && setUser(state.user)
    }, [state.user]);

    const saveUser = () => {
        !uuid && dispatch(User.add(user));
        uuid && dispatch(User.update(user));
    }

    return (
        <ContentWrapper
            title={!uuid ? "Create User" : "Edit User"}
            primaryLabel="Save"
            onPrimaryClick={saveUser}
            secondaryLabel="Cancel"
            onSecondaryClick={() => navigate(-1)}
            loading={state.loading}>
            <div className="flex justify-center mt-10">
                <FormWrapper>
                    <InputWrapper>
                        <Label>First Name</Label>
                        <InputShadow placeholder="First Name" value={user.firstname} onChange={(e) => { setUser({ ...user, firstname: e.target.value }) }} />
                    </InputWrapper>
                    <InputWrapper>
                        <Label>Last Name</Label>
                        <InputShadow placeholder="Last Name" value={user.lastname} onChange={(e) => { setUser({ ...user, lastname: e.target.value }) }} />
                    </InputWrapper>
                    <InputWrapper>
                        <Label>Email</Label>
                        <InputShadow placeholder="Email" value={user.email} onChange={(e) => { setUser({ ...user, email: e.target.value }) }} />
                    </InputWrapper>
                    <InputWrapper>
                        <Label>Password</Label>
                        <InputShadow type="password" placeholder="Password" value={user.password} onChange={(e) => { setUser({ ...user, password: e.target.value }) }} />
                    </InputWrapper>
                    <InputWrapper>
                        <Label>Role</Label>
                        <SelectShadow options={[{key: "admin", label: "Admin"}, {key: "user", label: "User"}]} value={user.role} onChange={(e) => { setUser({ ...user, role: e.target.value }) }} />
                    </InputWrapper>
                </FormWrapper>
            </div>
        </ContentWrapper>
    )
};

export default UserAddEdit;

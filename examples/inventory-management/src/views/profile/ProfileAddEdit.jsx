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
import { Profile } from "../../api";
import ContentWrapper from "../../components/ContentWrapper";
import { FormWrapper, InputShadow, InputWrapper, Label } from "../../components/FormComponents";

const blankProfile = { email: "", password: "", firstname: "", lastname: "" };

const ProfileAddEdit = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const state = useSelector((state) => state.profile);

    const [profile, setProfile] = React.useState(blankProfile);

    React.useEffect(() => {
        dispatch(Profile.getProfile());
    }, []);

    React.useEffect(() => {
        state.me?.email && setProfile(state.me)
    }, [state.me]);

    const saveProfile = () => {
        dispatch(Profile.update(profile));
    }

    return (
        <ContentWrapper
            title={"Edit Profile"}
            primaryLabel="Save"
            onPrimaryClick={saveProfile}
            secondaryLabel="Cancel"
            onSecondaryClick={() => navigate(-1)}
            loading={state.loading}>
            <div className="flex justify-center mt-10">
                <FormWrapper>
                    <InputWrapper>
                        <Label>First Name</Label>
                        <InputShadow placeholder="First Name" value={profile.firstname} onChange={(e) => { setProfile({ ...profile, firstname: e.target.value }) }} />
                    </InputWrapper>
                    <InputWrapper>
                        <Label>Last Name</Label>
                        <InputShadow placeholder="Last Name" value={profile.lastname} onChange={(e) => { setProfile({ ...profile, lastname: e.target.value }) }} />
                    </InputWrapper>
                    <InputWrapper>
                        <Label>Email</Label>
                        <InputShadow placeholder="Email" value={profile.email} onChange={(e) => { setProfile({ ...profile, email: e.target.value }) }} />
                    </InputWrapper>
                    <InputWrapper>
                        <Label>Password</Label>
                        <InputShadow type="password" placeholder="Password" value={profile.password} onChange={(e) => { setProfile({ ...profile, password: e.target.value }) }} />
                    </InputWrapper>
                </FormWrapper>
            </div>
        </ContentWrapper>
    )
};

export default ProfileAddEdit;

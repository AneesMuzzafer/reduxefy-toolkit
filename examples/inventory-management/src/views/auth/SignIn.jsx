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
import { Profile } from "../../api";
import ButtonPrimary from "../../components/ButtonPrimary";
import { InputShadow, Label } from "../../components/FormComponents";
import { clearProfileError } from "../../state/profileSlice";

export const CategoryColumns = [
    { key: "name", label: "Name" },
    { key: "description", label: "Description" },
    { key: "parent", label: "Parent Category" },
    { key: "item_count", label: "Item Count" },
]

const SignIn = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const dispatch = useDispatch();
    const state = useSelector(state => state.profile);

    React.useEffect(() => {
        if (state.error) {
            setTimeout(() => {
                dispatch(clearProfileError())
            }, 2000)
        }
    }, [state.error])

    return (
        <div className="bg-indigo-50 min-h-screen flex justify-center items-center">
            <div  className="bg-white p-10 rounded-xl flex flex-col gap-6">
                <div className="flex items-center gap-6">
                    <Icon icon="carbon:logo-sketch" width={40} className="text-primary" />
                    <div className="font-bold text-3xl font-title text-primary">
                        Inventory Management
                    </div>
                </div>
                <div>
                    <Label className="text-slate-600 flex-row-reverse">Email</Label>
                    <InputShadow onKeyUp={(e) => {e.key === "Enter" && dispatch(Profile.signIn({ email, password }))}} placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <Label className="text-slate-600 flex-row-reverse">Password</Label>
                    <InputShadow onKeyUp={(e) => {e.key === "Enter" && dispatch(Profile.signIn({ email, password }))}} placeholder="password" value={password} type="password" onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="relative">
                    <ButtonPrimary label={state.loading ? <Icon icon="eos-icons:loading" width={20} /> : "Sign In"} className="w-full mt-6" onClick={() => dispatch(Profile.signIn({ email, password }))} />
                    {
                        state.error &&
                        <div className="text-red-600 flex justify-center absolute bottom-12 left-0 w-full">
                            {state.error}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
};

export default SignIn;

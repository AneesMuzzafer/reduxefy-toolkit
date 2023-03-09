/**
 * Inventory Management using Reduxefy-Toolkit & React-Reduxefy
 *
 * @author    Anees Muzzafer
 *
 * @copyright Anees Muzzafer
 * @link      https://github.com/AneesMuzzafer
 *
 */

import React from 'react';

export const FormWrapper = ({ children }) => {
    return (
        <div className="flex shadow-indigo-50 shadow-lg rounded-lg py-20 p-4 w-1/2 flex-col gap-8">
            {children}
        </div>
    )
}
export const InputWrapper = ({ children }) => {
    return (
        <div className="flex gap-4 w-full">
            {children}
        </div>
    )
}

export const Label = ({ children, className = "" }) => {
    return (
        <div className={`flex-[1] justify-end font-bold h-12 flex items-center font-title text-md text-slate-600 ${className}`}>
            {children}
        </div>
    )
}

export const InputShadow = (props) => {
    return (
        <input
            {...props}
            value={props.value}
            onChange={props.onChange}
            className={`px-4 flex-[2] bg-white shadow-md rounded-md h-12 w-full focus-visible:outline-indigo-400 mr-20 ${props.className}`} />
    )
}

export const SelectShadow = ({ value, onChange, options }) => {
    return (
        <select
            value={value}
            onChange={onChange}
            className="px-4 flex-[2] bg-white shadow-md rounded-md h-12 w-full focus-visible:outline-indigo-400 mr-20" >
            <option>Select</option>
            {
                options?.map(({ key, label }) => (
                    <option key={key} value={key}>{label}</option>
                ))
            }
        </select>
    )
}

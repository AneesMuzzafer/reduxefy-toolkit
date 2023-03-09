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

const ButtonPrimary = ({ label, onClick, className = "" }) => {
    return <button onClick={onClick} className={`bg-primary flex rounded-md justify-center text-white px-4 py-2 min-w-[100px] shadow-lg shadow-indigo-400 ${className}`}> {label}</button >;
}

export default ButtonPrimary;

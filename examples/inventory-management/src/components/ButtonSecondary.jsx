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

const ButtonSecondary = ({ label, onClick }) => {
    return <button onClick={onClick} className="bg-white rounded-md text-indigo-500 px-4 py-2 min-w-[100px] shadow-lg shadow-indigo-100">{label}</button>;
}

export default ButtonSecondary;

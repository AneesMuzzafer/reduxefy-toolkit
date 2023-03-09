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
import { Icon } from '@iconify/react';

const Table = ({ cols, data, onEditClick, onDeleteClick, showAction = true }) => {
    return (
        <table className="w-full text-left shadow-lg shadow-indigo-50 rounded-lg">
            <thead>
                <tr className="h-16 align-middle border-b-[1px] border-slate-300 border-solid">
                    {
                        cols?.map((c, i) => (
                            <th key={i} className="font-thin font-title uppercase px-6">{c.label}</th>
                        ))
                    }
                    {showAction && <th className="font-thin font-title uppercase px-6 text-right">Actions</th>}
                </tr>
            </thead>
            <tbody>
                {
                    data?.map((row, r_i) => (
                        <tr key={r_i} className="h-16 align-middle border-b-[1px] border-slate-200 border-solid text-slate-500">
                            {
                                cols?.map((c, c_i) =>
                                    <td key={c_i} className="px-6">{row[c.key] ?? <span className="font-thin italic text-slate-400">No Data here</span>}</td>
                                )
                            }
                            {showAction &&
                                <td className="px-6 text-right">
                                    <div className="flex h-full justify-end gap-4">
                                        <Icon onClick={() => onEditClick(row.uuid)} icon="material-symbols:edit" width={24} className="text-slate-500 cursor-pointer" />
                                        <Icon onClick={() => onDeleteClick(row.uuid)} icon="ic:round-delete" width={24} className="text-red-500 cursor-pointer" />
                                    </div>
                                </td>
                            }
                        </tr>
                    ))}
            </tbody>
        </table>
    );
}

export default Table;

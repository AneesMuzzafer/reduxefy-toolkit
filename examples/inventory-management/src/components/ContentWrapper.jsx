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
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';

const ContentWrapper = ({ children, title, loading, primaryLabel, secondaryLabel, onPrimaryClick, onSecondaryClick }) => {
    return (
        <div className="flex flex-col flex-1 bg-white min-h-[85vh] mx-9 rounded-md p-8 shadow-xl">
            <div className="flex justify-between">
                <div className="font-title text-2xl font-bold text-slate-700" >{title}</div>
                <div className="flex gap-4">
                    {secondaryLabel && <ButtonSecondary label={secondaryLabel} onClick={onSecondaryClick} />}
                    {primaryLabel && <ButtonPrimary label={primaryLabel} onClick={onPrimaryClick} />}
                </div>
            </div>
            {
                loading ?
                    <div className="w-full flex flex-1 justify-center items-center">
                        <Icon icon="eos-icons:loading" width={50} />
                    </div> :
                    <div>
                        {children}
                    </div>
            }
        </div>
    );
}

export default ContentWrapper;

import React, { MouseEventHandler } from 'react';

interface TabButtonProps {
    selectTab: MouseEventHandler<HTMLButtonElement>,
    active: boolean,
    children: string,
}

export const TabButton: React.FC<TabButtonProps> = ({ selectTab, active, children }) => {
    const buttonClass = active ? 'text-white border-b-[3px] border-color-blue-300 ' : 'text-[#ADB7BE]';

    return <>
        <button onClick={selectTab} className='relative'>
            <p className={`relative inline-block mr-4 mb-2 ${buttonClass} text-gray hover:text-white`}
            >{children}</p>
        </button>
    </>
}
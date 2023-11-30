import React from 'react'
import { useTranslation } from 'react-i18next';

export const Footer = () => {
    return (
        <footer className='border-t-2 border-[gray] py-8 bg-[#121212]'>
            <div className='flex justify-between items-center py-5 px-[3rem]' >
                <span className='text-[gray] cursor-pointer ml-2 hover:text-white'>LOGO</span>
                <p className='text-[gray] cursor-pointer mr-2 hover:text-white'></p>
            </div>
        </footer>
    )
}

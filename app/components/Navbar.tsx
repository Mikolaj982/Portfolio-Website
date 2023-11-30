'use client'
import React, { useState } from "react";
import NavLink from "./NavLink";
import { MenuOverlay } from "./MenuOverlay";
import { Bars3Icon, XCircleIcon } from "@heroicons/react/20/solid";

export const Navbar = () => {
    const [isOverlay, setOverlay] = useState<boolean>(false)
    const navLinks = [
        {
            title: 'About',
            path: 'about-me',
        },
        {
            title: 'Projects',
            path: 'projects',
        },
        {
            title: 'Contact',
            path: 'contacts',
        },
    ]

    return <>
        <nav>
            <div className='md:hidden h-0'>
                <button>
                    {isOverlay ?
                        <XCircleIcon onClick={() => setOverlay(false)} className='h-[35px] text-gray-300 absolute top-[30px] right-[30px] z-20' />
                        :
                        <Bars3Icon onClick={() => setOverlay(true)} className='h-[35px] text-gray-300 absolute top-[30px] right-[30px]' />
                    }
                </button>
            </div>
            <div className='hidden md:h-[100px] md:bg-[#121212] md:border-b-2 md:flex md:border-[gray] md:items-center md:justify-end md:fixed md:w-fill z-10'>
                <ul className='flex text-gray-500 justify-end md:mr-28 xl:mr-8'>
                    {navLinks.map((link, index) => {
                        return (
                            <li key={index} className='ml-12 hover:text-white text-lg cursor-pointer'>
                                <NavLink path={link.path} title={link.title} />
                            </li>
                        )
                    })}
                </ul>
            </div>
            {isOverlay ? <MenuOverlay navLinks={navLinks} /> : ''}
        </nav>
    </>
}

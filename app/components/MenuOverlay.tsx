import React from 'react';
import NavLink, { NavLinkProps } from './NavLink';

type MenuOverlayProps = {
    navLinks: NavLinkProps[];
}

export const MenuOverlay: React.FC<MenuOverlayProps> = ({ navLinks }) => {
    return <>
        <div className='fixed flex bg-[#121212] bg-opacity-[0.95] top-0 left-0 right-0 justify-center h-[300px] z-10'>
            <ul className='flex justify-center flex-col mt-[20px]'>
                {navLinks.map((link, index) => {
                    return <>
                        <li key={index} className='text-white mb-[15px] text-center text-2xl'>
                            <NavLink path={link.path} title={link.title} />
                        </li>
                    </>
                })}
            </ul>
        </div>
    </>
}
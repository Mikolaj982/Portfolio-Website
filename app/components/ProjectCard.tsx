import React from 'react'
import { EyeIcon } from '@heroicons/react/24/outline';
import { CodeBracketIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

interface ProjectCardProps {
    image: string,
    title: string,
    description: string,
    github: string,
    websiteLink: string,
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, github, websiteLink }) => {
    return <>
        <div>
            <div className='h-52 w-[16rem] md:h-72 md:w-[26rem] rounded-t-xl relative group'
                style={{
                    background: `url(${image})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    border: 'solid 2px gray',
                }}>
                <div className='items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80'>
                    <Link
                        href={websiteLink}
                        className='h-14 w-14 border-2 m-3 relative rounded-full border-[#ADB7BE] hover:border-white group/link' >
                        <EyeIcon className='h-10 w-10  text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white'
                        />
                    </Link>
                    <Link
                        href={github}
                        className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>
                        <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white' />
                    </Link>
                </div>
            </div>
            <div className='text-white rounded-b-xl py-6 px-4 w-[16rem] md:w-[24rem] mb-2'>
                <h3 className='font-extrabold'>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    </>
}

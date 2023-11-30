'use client'
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import codeImg from '../../public/images/code.jpg'
import { TabButton } from './TabButton';

const TAB_DATA = [
    {
        title: 'Skills',
        id: 'skills',
        content: (
            <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Css: Scss</li>
                <li>Tailwind</li>
                <li>Html</li>
                <li>Git</li>
            </ul>
        )
    },
    {
        title: 'Education',
        id: 'education',
        content: (
            <ul>
                <li>
                    BA in Physical Education In Uniformed
                    Services - Academy Of Physical Education In
                    Cracow
                </li>
            </ul>
        )
    },
    {
        title: 'Certifications',
        id: 'certifications',
        content: (
            <ul>
                <li>JavaScript & React - Future Collars</li>
                <li>Html & Css - Future Collars</li>
            </ul>
        )
    }
]


export const AboutSection = () => {
    const [tab, setTab] = useState<string>('');
    const [isPending, startTransition] = useTransition();
    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return <>
        <section className='mt-10 p-5' id='about-me'>
            <div className='flex md:flex flex-col-reverse lg:flex-row-reverse lg:justify-evenly '>
                <div className='lg:flex lg:flex-col lg:ml-5 lg:w-[40%]'>
                    <h2 className='text-3xl font-extrabold mb-6  text-white mt-10 lg:mt-0'>About me</h2>
                    <p className='font-medium mb-6 text-white'>
                        I am an ambitious and determined young programmer looking for development opportunities as a Junior Frontend Developer.
                        I have a solid foundation in web technologies and a strong passion for creating modern, responsive user interfaces.
                        I value effective communication, the team and I strive to constantly improve my skills in a dynamic IT environment.
                    </p>
                    <div>
                        <TabButton
                            selectTab={() => handleTabChange('skills')}
                            active={tab === 'skills'}
                        >
                            Skills
                        </TabButton >
                        <TabButton
                            selectTab={() => handleTabChange('certifications')}
                            active={tab === 'certifications'}
                        >
                            Certifications
                        </TabButton >
                        <TabButton
                            selectTab={() => handleTabChange('education')}
                            active={tab === 'education'}
                        >
                            Education
                        </TabButton >
                    </div>
                    <div className='mb-5 md:mb-0 text-white'>{TAB_DATA.find((t) => t.id === tab)?.content}</div>
                </div>
                <Image
                    className='m-auto w-fit lg:w-[40%] lg:m-0 lg:h-fit'
                    src={codeImg}
                    alt='computer'
                    width={500}
                    height={500}
                />
            </div>
        </section>
    </>
}
'use client'
import React from 'react'
import Image from 'next/image';
import memojiImage from '../../public/images/memoji-image.svg';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const IntroductionSection = () => {

    const handleDownload = async () => {
        try {
            const response = await fetch('/api/downloadFile');
            const fileBlob = await response.blob();

            const url = window.URL.createObjectURL(fileBlob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'example.pdf';
            a.click();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section className='pl-1 text-center sm:block sm:text-left'>
            <div className='flex flex-col items-center sm:flex sm:flex-row sm:justify-between'>
                <div>
                    <h1 className='mb-4 text-6xl font-extrabold bg-main-gradient text-transparent bg-clip-text'>
                        Hi, I&apos;m
                    </h1>
                    <TypeAnimation
                        sequence={[
                            'Mikołaj',
                            1000,
                            'Front-end developer',
                            1000,
                        ]}
                        wrapper='h1'
                        cursor={true}
                        speed={20}
                        repeat={Infinity}
                        className='text-3xl font-extrabold mb-6 text-white lg:text-6xl'
                    />
                    <p className='text-white mb-6 sm:w-[318px] lg:w-[400px]'>
                        I have practical experience in creating responsive interfaces using technologies such as HTML, CSS and JavaScript.
                    </p>
                    <div className='flex flex-col mb-4 sm:flex-row lg:w-[400px]'>
                        <button className='py-3 px-6 sm:px-5 w-fill rounded-full mb-2 sm:mb-0 self-center bg-main-gradient hover:bg-gradient-to-tl from-white via-indigo-300 to-indigo-700'><Link href='/'>Hire me</Link></button>
                        <button onClick={handleDownload} className='py-3 px-6 w-fill text-white rounded-full border-2 sm:ml-1 hover:bg-indigo-300 hover:text-black'>Download CV</button>
                    </div>
                </div>
                <div className='clip-heptagon bg-gradient-to-tl from-white via-indigo-300 to-indigo-700 h-[270px] w-[330px] mb-4 xl:mr-28 flex justify-center relative' style={{ clipPath: 'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)' }}>
                    <Image
                        src={memojiImage}
                        alt='programmer image'
                        className='h-fit absolute bottom-0'
                        width={250}
                        height={250}
                    />
                </div>
            </div>
        </section >
    )
}

export default IntroductionSection
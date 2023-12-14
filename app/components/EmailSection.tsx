'use client';
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FormEvent } from 'react';
import githubIcon from '../../public/images/github.png';
import linkedin from '../../public/images/linkedin.png';
import ErrorHandler from './ErrorHandler';

type ErrorMsgProps = {
    message: string,
    success: boolean
}

export const EmailSection = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [Error, setError] = useState<boolean>(false);
    const [ErrorMsg, setErrorMsg] = useState<ErrorMsgProps>({
        message: 'Błąd',
        success: false,
    });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            email: { value: string };
            subject: { value: string };
            message: { value: string };
        };

        const data = {
            email: target.email.value,
            subject: target.subject.value,
            message: target.message.value,
        }

        const JSONdata = JSON.stringify(data);
        const endpoint = '/pages/api';
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }
        try {
            const response = await fetch(endpoint, options);
            const resData = await response.json();
            if (!response.ok) {
                setErrorMsg({
                    message: resData.message,
                    success: resData.success,
                });
                setError(true);
            }
            setErrorMsg({
                message: resData.message,
                success: resData.success,
            });
            setError(true);
            setIsOpen(true);
        } catch (e) {
            setErrorMsg({
                message: `${e}`,
                success: false,
            });
            setError(true);
        }
    }

    return (<>
        {Error ? <ErrorHandler message={ErrorMsg.message} success={ErrorMsg.success} isOpen={isOpen} setIsOpen={setIsOpen} /> : ''}
        <section className='flex flex-col mt-10 px-5 mb-16 lg:px-20 sm:flex-row' id='contacts'>
            <div className='sm:w-[50%] sm:mr-2'>
                <h3 className='text-3xl font-bold text-white mb-3'>Let&apos;s Connect</h3>
                <div className='text-white'>
                    <div className='flex'>Email:  <p className='font-bold px-1'> mikolaj982.hi@gmail.com</p></div>
                    <div className='flex'>Phone number: <p className='font-bold px-1'>608852733</p></div>
                </div>
                <div className='flex mt-6'>
                    <Link href='https://github.com/Mikolaj982'>
                        <Image src={githubIcon} alt='github icon' width={50} height={50} />
                    </Link>
                    <Link href='https://www.linkedin.com/in/miko%C5%82aj-kosmala-bb6b4a249/' className='ml-4 bg-white rounded-[6px]'>
                        <Image src={linkedin} alt='linkedin icon' width={50} height={50} />
                    </Link>
                </div>
            </div>
            <div className='sm:w-[50%] sm:ml-3'>
                <form className='flex flex-col' onSubmit={handleSubmit}>
                    <label
                        htmlFor='email'
                        className='text-white mb-1 mt-2 sm:mt-0 font-semibold' >
                        Your email
                    </label>
                    <input
                        name='email'
                        type='email'
                        required
                        placeholder='example@gmail.com'
                        id='email'
                        className='text-white p-[0.30rem] bg-[#434343] rounded'
                    />
                    <label
                        htmlFor='subject'
                        className='text-white mb-1 mt-2 font-semibold'>
                        Subject
                    </label>
                    <input
                        name='subject'
                        type='text'
                        required
                        placeholder='Just saying hi..'
                        id='subject'
                        className='text-white p-[0.30rem] bg-[#434343] rounded'
                    />
                    <label
                        htmlFor='message'
                        className='text-white mb-1 mt-2 font-semibold'>
                        Message
                    </label>
                    <textarea
                        name='message'
                        required
                        placeholder="Let's talk about..."
                        id='message'
                        className='text-white p-[0.30rem] bg-[#434343] rounded'
                    />
                    <button
                        type='submit'
                        className=' font-medium text-white bg-purple-500 rounded mt-2 border-gray-200 border-2 p-[0.25rem] hover:text-black hover:border-gray-500'
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    </>);
}

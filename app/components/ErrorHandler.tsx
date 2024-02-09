import React from 'react';

interface ErrorHandlerProps {
    message: string,
    success: boolean,
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const ErrorHandler: React.FC<ErrorHandlerProps> = ({ message, success, isOpen, setIsOpen }) => {
    const successStyles = 'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
    const failedStyles = 'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
    return <>
        {isOpen ?
            <div className={success ? successStyles : failedStyles} role="alert">
                <strong className="font-bold">Information</strong>
                <span className="block">{message}</span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg className="fill-current h-6 w-6" role="button" viewBox="0 0 20 20" onClick={() => setIsOpen((prev) => !prev)}><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                </span>
            </div>
            :
            ''}
    </>
}

export default ErrorHandler
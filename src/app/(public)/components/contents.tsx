import React, {Suspense} from 'react';

interface Props {
    children: React.ReactNode;
}

export const Contents = ({children}: Props) => {
    return (
        <div className='flex justify-center'>
            <div className='w-1/5 max-md:hidden' />
            <div className='w-full max-w-3xl px-0'>
                <Suspense>{children}</Suspense>
            </div>
            <div className='w-1/5 max-md:hidden' />
        </div>
    );
};

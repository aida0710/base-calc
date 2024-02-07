import React, {Suspense} from 'react';
import {NavigationBar} from '@/src/app/(private)/layout/navigation-bar';

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <div>
            <div className='h-full w-full'>
                <NavigationBar />
                <div className='flex'>
                    <div className='w-2/5 max-md:hidden' />
                    <div className='w-full max-w-3xl px-0'>
                        <Suspense>{children}</Suspense>
                    </div>
                    <div className='w-2/5 max-md:hidden' />
                </div>
            </div>
        </div>
    );
}

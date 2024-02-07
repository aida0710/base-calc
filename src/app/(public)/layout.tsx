import React from 'react';
import {NavigationBar} from '@/src/app/(public)/navigation-bar';

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <div className='h-full w-full'>
            <NavigationBar />
            {children}
        </div>
    );
}

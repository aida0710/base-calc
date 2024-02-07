import {UserProfile} from '@clerk/nextjs';
import React from 'react';
import {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'UserProfile',
};

export default async function Page() {
    return (
        <div className='mr-7 px-5 py-5 max-sm:mr-0 max-sm:px-0 max-sm:py-0'>
            <UserProfile
                path='/user-profile'
                routing='path'
                appearance={{
                    elements: {
                        rootBox: 'w-full bg-[#18181b] dark:bg-default-50 rounded-2xl max-sm:rounded-none',
                        card: 'shadow-none bg-inherit  w-full',
                        navbar: 'hidden',
                        navbarButton: 'mb-2',
                        navbarMobileMenuButton: 'hidden',
                        navbarMobileMenu: 'hidden',
                        profileSection__danger: 'hidden',
                    },
                }}
            />
        </div>
    );
}

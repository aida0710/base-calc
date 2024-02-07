import {SignIn} from '@clerk/nextjs';
import React, {Suspense} from 'react';
import {Metadata} from 'next';
import {SignInCheck} from '@/src/app/(public)/components/sign-in-check';

export const metadata: Metadata = {
    title: 'SignIn',
};

export default async function Page() {
    return (
        <div className='mt-24 flex items-center justify-center'>
            <Suspense>
                <SignInCheck />
            </Suspense>
            <SignIn
                appearance={{
                    elements: {
                        headerSubtitle: 'hidden',
                        rootBox: 'rounded-lg max-sm:rounded-none',
                        card: 'shadow-lg w-full',
                    },
                }}
            />
        </div>
    );
}

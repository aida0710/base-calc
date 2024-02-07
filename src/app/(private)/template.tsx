'use client';

import React, {useEffect, useState} from 'react';
import {useSession} from '@clerk/nextjs';
import {usePathname, useRouter} from 'next/navigation';
import {AppRouterInstance} from 'next/dist/shared/lib/app-router-context.shared-runtime';
import toast from 'react-hot-toast';

export default function Template({children}: {children: React.ReactNode}) {
    const {isLoaded, isSignedIn, session} = useSession();
    const [isLoading, setIsLoading] = useState(true);

    const router: AppRouterInstance = useRouter();
    const pathname: string = usePathname();

    useEffect((): void => {
        if (!isLoaded) return;
        if (!isSignedIn) {
            if (pathname === '/') {
                router.push('/home');
                return;
            } else {
                toast.error('指定したページはログインが必要です。');
                router.push('/sign-in');
                return;
            }
        }
    }, [isSignedIn, isLoaded, session, pathname, router]);

    if (!(isSignedIn || isLoaded)) return <></>;
    if (isLoading) return <></>;
    if (!session) return <></>;

    return <div>{children}</div>;
}

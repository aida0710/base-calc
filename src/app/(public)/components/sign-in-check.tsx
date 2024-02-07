'use client';

import {useRouter} from 'next/navigation';
import {AppRouterInstance} from 'next/dist/shared/lib/app-router-context.shared-runtime';
import {useSession} from '@clerk/nextjs';
import {useEffect} from 'react';
import toast from 'react-hot-toast';

export const SignInCheck = () => {
    const {isSignedIn} = useSession();
    const router: AppRouterInstance = useRouter();

    useEffect(() => {
        if (isSignedIn) {
            toast.success('既にログインしている為、ホームへ移動しました。');
            router.push('/');
        }
    }, [isSignedIn, router]);

    return <></>;
};

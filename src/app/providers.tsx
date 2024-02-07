'use client';

import {NextUIProvider} from '@nextui-org/react';
import {useRouter} from 'next/navigation';
import {ThemeProvider} from 'next-themes';
import React, {Suspense} from 'react';
import {dark} from '@clerk/themes';
import {ClerkProvider} from '@clerk/nextjs';
import {AppRouterInstance} from 'next/dist/shared/lib/app-router-context.shared-runtime';
import {jaJP} from '@clerk/localizations';

export function Providers({children}: {children: React.ReactNode}) {
    const router: AppRouterInstance = useRouter();

    return (
        <ThemeProvider
            defaultTheme='dark'
            attribute='class'>
            <NextUIProvider navigate={router.push}>
                <Suspense>
                    <ClerkProvider
                        localization={jaJP}
                        appearance={{baseTheme: dark}}>
                        {children}
                    </ClerkProvider>
                </Suspense>
            </NextUIProvider>
        </ThemeProvider>
    );
}

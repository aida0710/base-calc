import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './style/globals.css';
import {NextFont} from 'next/dist/compiled/@next/font';
import React from 'react';
import {CheckIcon, XIcon} from 'lucide-react';
import {Toaster} from 'react-hot-toast';
import {Providers} from '@/src/app/providers';

const inter: NextFont = Inter({subsets: ['latin']});

export const metadata: Metadata = {
    title: 'Base Calculator',
    description: 'A simple calculator for base conversion',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='ja'>
            <body className={inter.className}>
                <Toaster
                    position='bottom-right'
                    reverseOrder={false}
                    toastOptions={{
                        className: 'border border-default-200 bg-white dark:bg-default-50 dark:text-white',
                        success: {
                            icon: <CheckIcon color='#22c55e' />,
                        },
                        error: {
                            icon: <XIcon color='#ef4444' />,
                        },
                    }}
                />
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}

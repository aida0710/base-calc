import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './style/globals.css';
import {NextFont} from 'next/dist/compiled/@next/font';
import React from 'react';

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
            <body className={inter.className}>{children}</body>
        </html>
    );
}

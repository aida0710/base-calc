import type {Metadata} from 'next';
import React from 'react';
import {ContentsCard} from '@/src/app/(private)/components/contentsCard';

export const metadata: Metadata = {
    title: 'Home',
};

export default async function Page() {
    return (
        <div>
            testes
            <ContentsCard title='Hello, World!'>
                <p>Contents</p>
            </ContentsCard>
        </div>
    );
}

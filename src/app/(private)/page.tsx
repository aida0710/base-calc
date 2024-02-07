import type {Metadata} from 'next';
import React from 'react';
import {ContentsCard} from '@/src/app/(private)/components/contents-card';
import {StartSettings} from '@/src/app/(private)/index/components/start-settings';

export const metadata: Metadata = {
    title: 'Home',
};

export default async function Page() {
    return (
        <div>
            <h2 className='mt-16 text-2xl font-semibold'>学習を始める</h2>
            <ContentsCard title='設定項目'>
                <StartSettings />
            </ContentsCard>
        </div>
    );
}

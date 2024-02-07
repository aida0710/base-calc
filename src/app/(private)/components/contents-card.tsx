import React from 'react';

interface Props {
    children: React.ReactNode;
    title: string;
}

export const ContentsCard = ({children, title}: Props) => {
    return (
        <div className='mt-3 rounded-2xl border border-default-200 p-4 shadow-lg'>
            <h2 className='text-lg font-semibold'>{title}</h2>
            <div>{children}</div>
        </div>
    );
};

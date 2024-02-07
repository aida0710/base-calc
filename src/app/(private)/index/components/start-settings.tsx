'use client';

import {Button, Input, Select, SelectItem} from '@nextui-org/react';
import React from 'react';

export const StartSettings = () => {
    const [baseSelected, setBaseSelected] = React.useState('2進数');

    return (
        <div>
            <Select
                size='lg'
                className='mt-3'
                variant='underlined'
                label="問われる基数"
                onChange={(e) => setBaseSelected(e.target.value)}
                defaultSelectedKeys={[baseSelected]}>
                <SelectItem
                    value='2進数'
                    key='2進数'>
                    2進数
                </SelectItem>
                <SelectItem
                    value='10進数'
                    key='10進数'>
                    10進数
                </SelectItem>
            </Select>
            <div className='flex justify-center'>
                <p className='my-3 text-lg'>から</p>
            </div>
            <Input
                size='lg'
                variant='underlined'
                disabled={true}
                label="答える基数"
                value={baseSelected === '2進数' ? '10進数' : '2進数'}
            />
            <div className='flex justify-center'>
                <p className='my-3 text-lg'>に計算する</p>
            </div>
            <div className='flex justify-end'>
                <Button
                    size='lg'
                    variant="flat"
                    onPress={() => console.log('start')}>
                    問題を開始
                </Button>
            </div>
        </div>
    );
};

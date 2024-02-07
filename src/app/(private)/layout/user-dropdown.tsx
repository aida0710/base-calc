'use client';

import {Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger, NavbarItem} from '@nextui-org/react';
import React from 'react';
import {usePathname, useRouter} from 'next/navigation';
import {useClerk, useUser} from '@clerk/nextjs';
import {BookOpenTextIcon, Code2Icon, DoorOpenIcon, HomeIcon, LogOutIcon, OrbitIcon, UserIcon} from 'lucide-react';
import {AppRouterInstance} from 'next/dist/shared/lib/app-router-context.shared-runtime';
import toast from 'react-hot-toast';

export const UserDropdown = () => {
    const router: AppRouterInstance = useRouter();
    const pathname: string = usePathname();
    const {user} = useUser();
    const {signOut} = useClerk();

    const handleLogout = async () => {
        try {
            await signOut();
            toast.success('正常にログアウトしました。');
            router.push('/home');
        } catch (e: any) {
            console.log(e.message);
            toast.error('ログアウトに失敗しました。');
        }
    };

    const PrivatePage = [
        {
            Display: 'Home',
            Link: '/',
            Icon: (
                <HomeIcon
                    size={16}
                    color='currentColor'
                    strokeWidth={3}
                />
            ),
        },
        {
            Display: 'Account',
            Link: '/user-profile',
            Icon: (
                <UserIcon
                    size={16}
                    color='currentColor'
                    strokeWidth={3}
                />
            ),
        },
    ];

    const PublicPages = [
        {
            Display: 'Home Page',
            Link: '/home',
            Icon: (
                <DoorOpenIcon
                    size={16}
                    color='currentColor'
                    strokeWidth={3}
                />
            ),
        },
        {
            Display: 'About',
            Link: '/about',
            Icon: (
                <BookOpenTextIcon
                    size={16}
                    color='currentColor'
                    strokeWidth={3}
                />
            ),
        },
    ];

    return (
        <Dropdown>
            <NavbarItem>
                <DropdownTrigger>
                    <Avatar
                        as='button'
                        color='default'
                        size='md'
                        src={user?.imageUrl}
                    />
                </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
                disabledKeys={pathname === '/initial-setting' ? ['/', '/profile', '/favorite-user', '/settings', '/feedback'] : []}
                aria-label='user menu'>
                <DropdownSection
                    title='Private Pages'
                    aria-label='Private Pages'
                    showDivider>
                    {PrivatePage.map((item) => (
                        <DropdownItem
                            key={item.Link}
                            startContent={item.Icon}
                            className='flex items-center'
                            title={item.Display}
                            href={item.Link}
                            aria-label={item.Link}
                        />
                    ))}
                </DropdownSection>
                <DropdownSection
                    title='Public Pages'
                    aria-label='Public Pages'
                    showDivider>
                    {PublicPages.map((item) => (
                        <DropdownItem
                            key={item.Link}
                            startContent={item.Icon}
                            title={item.Display}
                            aria-label={item.Link}
                            href={item.Link}
                            className='flex items-center'
                        />
                    ))}
                </DropdownSection>
                <DropdownSection
                    title='Account Action'
                    aria-label='Account Action'>
                    <DropdownItem
                        key='logout'
                        startContent={
                            <LogOutIcon
                                size={16}
                                color='currentColor'
                                strokeWidth={3}
                            />
                        }
                        title='Logout'
                        color='danger'
                        className='flex items-center text-danger'
                        aria-label='Logout'
                        onClick={handleLogout}
                    />
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    );
};

'use client';

import {Avatar, Navbar, NavbarBrand, NavbarContent, NavbarItem} from '@nextui-org/react';
import React from 'react';
import {UserDropdown} from '@/src/app/(private)/layout/user-dropdown';
import {Link} from '@nextui-org/link';
import {ThemeButton} from '@/src/components/layout/theme-button';
import {usePathname} from 'next/navigation';
import {PhoneMenu} from '@/src/components/layout/phone-menu';
import {HomeIcon, LayoutDashboardIcon, LibraryBigIcon} from 'lucide-react';

export const NavigationBar = () => {
    const pathname: string = usePathname();

    const MenuItems: {
        Link: string;
        Display: string;
        Icon: React.ReactNode;
    }[] = [
        {
            Display: 'Home',
            Link: '/',
            Icon: (
                <HomeIcon
                    size={32}
                    color='currentColor'
                    strokeWidth={3}
                />
            ),
        },
        {
            Display: 'Dashboard',
            Link: '/dash',
            Icon: (
                <LayoutDashboardIcon
                    size={32}
                    color='currentColor'
                    strokeWidth={3}
                />
            ),
        },
        {
            Display: 'Results',
            Link: '/results',
            Icon: (
                <LibraryBigIcon
                    size={32}
                    color='currentColor'
                    strokeWidth={3}
                />
            ),
        },
    ];

    function isActive(link: string): boolean {
        return pathname === link;
    }

    return (
        <Navbar
            isBordered
            classNames={{
                item: [
                    'flex',
                    'relative',
                    'h-full',
                    'items-center',
                    "data-[active=true]:after:content-['']",
                    'data-[active=true]:after:absolute',
                    'data-[active=true]:after:bottom-0',
                    'data-[active=true]:after:left-0',
                    'data-[active=true]:after:right-0',
                    'data-[active=true]:after:h-[2px]',
                    'data-[active=true]:after:rounded-[2px]',
                    'data-[active=true]:after:bg-primary-300',
                    'data-[active=true]:after:dark:bg-primary-400',
                ],
            }}>
            <NavbarContent>
                <PhoneMenu NavItems={MenuItems} />
                <NavbarBrand>
                    <Link
                        color='foreground'
                        className='font-bold text-inherit'
                        href='/'>
                        <Avatar
                            size='md'
                            className='mr-2 bg-opacity-0'
                            src='/icon-512x512.png'
                        />
                        Base Calc
                    </Link>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent
                className='hidden gap-4 sm:flex'
                justify='center'>
                {MenuItems.map((item, index) => (
                    <NavbarItem
                        key={index}
                        isActive={isActive(item.Link)}>
                        <Link
                            color='foreground'
                            href={`${item.Link}`}>
                            {item.Display}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent justify='end'>
                <ThemeButton />
                <UserDropdown />
            </NavbarContent>
        </Navbar>
    );
};

'use client';

import {Avatar, Button, Navbar, NavbarBrand, NavbarContent, NavbarItem} from '@nextui-org/react';
import React from 'react';
import {Link} from '@nextui-org/link';
import {ThemeButton} from '@/src/components/layout/theme-button';
import {useSession} from '@clerk/nextjs';
import {UserDropdown} from '@/src/app/(private)/layout/user-dropdown';
import {usePathname, useRouter} from 'next/navigation';
import {PhoneMenu} from '@/src/components/layout/phone-menu';
import {BookOpenTextIcon, HomeIcon} from 'lucide-react';
import {AppRouterInstance} from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const PublicMenuItems: {
    Link: string;
    Display: string;
    Icon: React.ReactNode;
}[] = [
    {
        Display: 'Home',
        Link: '/home',
        Icon: (
            <HomeIcon
                size={32}
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
                size={32}
                color='currentColor'
                strokeWidth={3}
            />
        ),
    },
];

export const NavigationBar = () => {
    const router: AppRouterInstance = useRouter();
    const pathname: string = usePathname();

    const {isSignedIn} = useSession();

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
                <PhoneMenu NavItems={PublicMenuItems} />
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
                        Catsial
                    </Link>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent
                className='hidden gap-4 sm:flex'
                justify='center'>
                {PublicMenuItems.map((item) => (
                    <NavbarItem
                        key={item.Link}
                        isActive={pathname === `${item.Link}`}>
                        <Link
                            color='foreground'
                            href={`${item.Link}`}>
                            {item.Display}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent justify='end'>
                <NavbarItem>
                    <ThemeButton />
                </NavbarItem>
                {isSignedIn ? (
                    <UserDropdown />
                ) : (
                    <NavbarItem>
                        <Button
                            variant='light'
                            color='default'
                            className='-ml-3 mr-3'
                            onPress={() => router.push('/sign-in')}>
                            Sign in
                        </Button>
                        <Button
                            variant='bordered'
                            color='default'
                            className='hover:bg-default-100 max-sm:hidden'
                            onPress={() => router.push('/sign-up')}>
                            Sign up
                        </Button>
                    </NavbarItem>
                )}
            </NavbarContent>
        </Navbar>
    );
};

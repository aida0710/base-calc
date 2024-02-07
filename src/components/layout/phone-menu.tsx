import React from 'react';
import {Avatar, Button, Modal, ModalContent, ModalHeader, useDisclosure} from '@nextui-org/react';
import {MenuIcon, XIcon} from 'lucide-react';
import {Link} from '@nextui-org/link';
import {Divider} from '@nextui-org/divider';
import {ModalBody, ModalFooter} from '@nextui-org/modal';
import clsx from 'clsx';
import {usePathname} from 'next/navigation';

interface Props {
    NavItems: {
        Link: string;
        Display: string;
        Icon: React.ReactNode;
    }[];
}

export const PhoneMenu = ({NavItems}: Props) => {
    const {isOpen, onOpen, onClose, onOpenChange} = useDisclosure();
    const pathname = usePathname();

    function onDisabled(): boolean {
        return pathname === '/initial-setting';
    }

    function isActive(link: string): boolean {
        return pathname === link;
    }

    return (
        <div>
            <MenuIcon
                className='h-8 w-8 sm:hidden'
                onClick={onOpen}
            />
            <Modal
                hideCloseButton
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className='sm:hidden'
                backdrop={'blur'}
                size='full'
                motionProps={{
                    variants: {
                        enter: {
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.3,
                                ease: 'easeOut',
                            },
                        },
                        exit: {
                            y: -20,
                            opacity: 0,
                            transition: {
                                duration: 0.2,
                                ease: 'easeIn',
                            },
                        },
                    },
                }}>
                <ModalContent className='bg-opacity-70'>
                    <ModalHeader className='flex items-center'>
                        <XIcon
                            className='mr-4 h-8 w-8 sm:hidden'
                            onClick={onClose}
                        />
                        <Link
                            color='foreground'
                            className='font-bold text-inherit'
                            isDisabled={onDisabled()}
                            href='/'>
                            <Avatar
                                size='md'
                                className='mr-2 bg-opacity-0 '
                                src='/icon-512x512.png'
                            />
                            Base Calc
                        </Link>
                    </ModalHeader>
                    <Divider />
                    <ModalBody>
                        {NavItems.map((item) => (
                            <div
                                className='flex w-full items-center'
                                key={item.Link}>
                                <Link
                                    color='foreground'
                                    className={clsx('m-3 flex w-full text-4xl', {
                                        'font-semibold text-red-300 dark:text-red-400': isActive(item.Link),
                                    })}
                                    onPress={onClose}
                                    isDisabled={onDisabled()}
                                    href={item.Link}>
                                    {item.Icon}
                                    <span className='ml-4 text-4xl'>{item.Display}</span>
                                </Link>
                            </div>
                        ))}
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            variant='ghost'
                            color='danger'
                            onPress={onClose}>
                            閉じる
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
};

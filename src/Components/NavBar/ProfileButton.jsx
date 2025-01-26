import { useAccount } from '@/lib/features/user/hooks';
import { Button, Menu, MenuDivider } from '@mantine/core';
import React, { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { CiLogout } from "react-icons/ci";
import { userLogout } from '@/lib/features/user/actions';
import { useSnackbar } from 'notistack';

export default function ProfileButton() {

    const userSession = useAccount();
    const [opened, setOpened] = useState(false);
    const { enqueueSnackbar } = useSnackbar();

    const handleLogout = () => {
        userLogout();
        enqueueSnackbar('You have been logged out successfully.', { variant: 'info' });
    };

    return (
        <Menu opened={opened} onChange={setOpened}>
            <Menu.Target>
                <Button
                    classNames={
                        {
                            root: '!rounded-xl !bg-coalBlue/80 !px-4 !py-2 !text-sm !text-white !shadow !hover:bg-coalBlue !transition-colors ',
                            label: '!flex !items-center !gap-2'
                        }
                    }
                >
                    <FaUserCircle className="size-4" />
                    <span>My Account</span>
                </Button>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Label>
                    {userSession.username}
                </Menu.Label>
                <Menu.Item>
                    <Link to={'/profile'}>
                        Profile
                    </Link>
                </Menu.Item>
                <MenuDivider />
                <Menu.Item
                    color='red'
                    leftSection={<CiLogout className='size-4' />}
                    onClick={handleLogout}
                >
                    Logout
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>


    )
}

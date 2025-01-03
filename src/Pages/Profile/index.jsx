import { UserUpdateRequest } from '@/api'
import React, { useState } from 'react'
import { Tabs } from '@mantine/core';
import { useAccount } from '@/lib/features/user/hooks';

export default function ProfilePage() {

    const userSession = useAccount()

    const [userDetails, setUserDetails] = useState({
        name: userSession.username || '',
        email: userSession.email || '',
        password: '',
    })
    const [activeTab, setActiveTab] = useState('user');

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserDetails({
            ...userDetails,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await UserUpdateRequest(userDetails)
            console.log('User updated successfully:', response)
        } catch (error) {
            console.error('Error updating user:', error)
        }
    }

    return (
        <div className='w-full p-4'>
            <Tabs value={activeTab} onChange={setActiveTab} orientation="vertical" variant="pills">
                <Tabs.List >
                    <Tabs.Tab value="user">My User Informations</Tabs.Tab>
                    <Tabs.Tab value="address">My Address Informations  </Tabs.Tab>
                    <Tabs.Tab value="favorites">My Favorites  </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="user">
                    <h1 className='text-black text-2xl mb-4'>Profile Settings</h1>
                    <form className='bg-white p-4 rounded shadow-md' onSubmit={handleSubmit}>
                        <div className='mb-4'>
                            <label className='block text-gray-700'>Username</label>
                            <input
                                type='text'
                                name='name'
                                value={userDetails.name}
                                onChange={handleChange}
                                className='w-full p-2 border border-gray-300 rounded mt-1'
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-gray-700'>Email</label>
                            <input
                                type='email'
                                name='email'
                                value={userDetails.email}
                                onChange={handleChange}
                                className='w-full p-2 border border-gray-300 rounded mt-1'
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-gray-700'>Password</label>
                            <input
                                type='password'
                                name='password'
                                value={userDetails.password}
                                onChange={handleChange}
                                className='w-full p-2 border border-gray-300 rounded mt-1'
                            />
                        </div>
                        <button type='submit' className='bg-blue-500 text-white p-2 rounded'>Save</button>
                    </form>
                </Tabs.Panel>
            </Tabs>
        </div>
    )
}

import Footer from '@/Components/Footer'
import NavBar from '../Components/NavBar'
import React from 'react'
import { Outlet } from 'react-router-dom'


export default function MainLayout() {
    return (
        <div className='w-full min-h-screen'>
            <NavBar />
            <div className='w-full min-h-full bg-red-500'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

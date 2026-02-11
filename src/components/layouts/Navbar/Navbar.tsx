import NavbarTitle from '@/components/common/NavbarTitle/NavbarTitle'
import { ThemeController } from '@/components/common/ThemeController/ThemeController'
import React from 'react'

function Navbar() {
    return (
        <header className="border-b-2 border-gray-200 px-6 py-4 flex items-center justify-between ">
            <NavbarTitle />
            <ThemeController />
        </header>
    )
}

export default Navbar
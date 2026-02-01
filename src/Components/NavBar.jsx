import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="bg-blue-700 shadow-md w-full">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col sm:flex-row items-center h-auto sm:h-16 py-3 sm:py-0">
                    {/* Branding */}
                    <div className="text-xl font-bold text-white font-mono tracking-wide mb-2 sm:mb-0 sm:mr-8">
                        PASTE APP
                    </div>
                    {/* Navigation Links */}
                    <div className="flex gap-4">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `text-base font-semibold px-4 py-2 rounded transition ${
                                    isActive
                                        ? "bg-blue-900 text-white"
                                        : "text-blue-100 hover:bg-blue-800 hover:text-white"
                                }`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/pastes"
                            className={({ isActive }) =>
                                `text-base font-semibold px-4 py-2 rounded transition ${
                                    isActive
                                        ? "bg-blue-900 text-white"
                                        : "text-blue-100 hover:bg-blue-800 hover:text-white"
                                }`
                            }
                        >
                            All Pastes
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
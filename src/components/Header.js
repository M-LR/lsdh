"use client";
import { Switch } from '@headlessui/react'
import { useState } from "react";
import Link from 'next/link';
import { Raleway } from "next/font/google";

const raleway = Raleway({ weight: ['300','500', '700'], subsets: ["latin"]});

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle('dark');
        setIsDarkMode(!isDarkMode);
      };

    const menuItems = [
         {
            title : 'Qui sommes-nous ?',
             link : '/about'},
         {
            title : 'Nous soutenir',
             link : 'https://www.helloasso.com/associations/les-studios-du-heron'
         }   
    ];

    return (
    <nav className="bg-violet-200 dark:bg-violet-950 z-50">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <button
                    type="button"
                    className="relative inline-flex items-center justify-center rounded-md p-2 text-violet-950 dark:text-indigo-200 hover:bg-violet-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                        <svg
                            className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                        <Link className={`${raleway.className} text-2xl text-violet-950 dark:text-indigo-100 font-extrabold`} href="/">
                            L.S.H
                        </Link>
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                            <Link href="/about" className="rounded-md text-violet-950 dark:text-indigo-100 hover:bg-violet-700 hover:text-indigo-100 px-3 py-2 text-sm font-medium" aria-current="page">
                            Qui sommes-nous ?
                            </Link>

                            <Link href="https://www.helloasso.com/associations/les-studios-du-heron" className="rounded-md text-violet-950 dark:text-indigo-100 hover:bg-violet-700 hover:text-indigo-100 px-3 py-2 text-sm font-medium">
                            Nous soutenir
                            </Link>
                            
                        </div>
                    </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <div className="flex items-center">
                        <div className="flex items-center gap-2">
                        {isDarkMode ? (
                            <i className="text-violet-500 ri-sun-line"></i>
                        ) : (
                            <i className="text-violet-950 ri-sun-fill text-xl"></i>
                        )}
                        <Switch
                            onChange={toggleDarkMode}
                            checked={isDarkMode}
                            className={`${isDarkMode ? 'bg-violet-500' : 'bg-violet-950'} mx-1 group inline-flex h-6 w-11 items-center rounded-full transition`}
                        >
                            <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
                        </Switch>
                        {isDarkMode ? (
                            <i className="text-violet-500 ri-moon-fill text-xl"></i>
                        ) : (
                            <i className="text-violet-950 ri-moon-line"></i>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Mobile menu, show/hide based on menu state */}
        <div className={`${isMenuOpen ? "block" : "hidden"} sm:hidden`} id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
                {menuItems.map((item, index) => (
                <Link key={index} href={item.link}>
                    <span className='block rounded-md px-3 py-2 text-base font-medium text-violet-950 dark:text-indigo-100 hover:bg-violet-700 hover:text-indigo-100'>
                    {item.title}
                    </span>
                </Link>
                ))}
            </div>
        </div>
    </nav>  
    )
};

export default Header;
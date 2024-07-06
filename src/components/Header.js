"use client";
import { Switch } from '@headlessui/react'
import { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import Link from 'next/link';
import { Raleway } from "next/font/google";

const raleway = Raleway({ weight: ['300','500', '700'], subsets: ["latin"]});

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle('dark');
        setIsDarkMode(!isDarkMode);
      };
    return (
       <>
            <Navbar shouldHideOnScroll className='columns-3 h-16 p-4'>
                <NavbarBrand className='w-full'>
                    <Link className={`${raleway.className} text-2xl text-violet-950 dark:text-indigo-100 font-extrabold`} href="/">
                            L.S.H
                    </Link>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4 w-full justify-center">
                    <NavbarItem >
                        <Link className='text-violet-950 dark:text-indigo-100' href="/about">
                        Qui sommes-nous ?
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent className='w-full justify-end'>
                    
                    <NavbarItem>
                        {isDarkMode ? <i className="text-violet-500 ri-sun-line"></i> : <i className="text-violet-950 ri-sun-fill text-xl"></i>}

                        <Switch
                            onChange={toggleDarkMode}
                            className={`${isDarkMode ? 'bg-violet-500' : 'bg-violet-950'} mx-1 group inline-flex h-6 w-11 items-center rounded-full transition`}
                        >
                            <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />

                        </Switch>

                        {isDarkMode ? <i className="text-violet-500 ri-moon-fill text-xl"></i> : <i className="text-violet-950 ri-moon-line"></i>}
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
          </>
    )
};

export default Header;
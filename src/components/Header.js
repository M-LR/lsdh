"use client";

import Link from 'next/link';
import { useState, useEffect } from "react";
import { Switch, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { Raleway } from "next/font/google";
import { IoOpenOutline } from "react-icons/io5";
import { useTheme } from "next-themes";

const raleway = Raleway({ weight: ['300', '500', '700'], subsets: ["latin"] });

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedDarkMode = JSON.parse(localStorage.getItem('isDarkMode'));
            setIsDarkMode(storedDarkMode);
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        if (theme !== 'dark') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
        setIsDarkMode(!isDarkMode);
    };

    const menuItems = [
        {
            title: 'L\'association',
            link: '/about'
        },
        {
            title: 'Nous soutenir',
            link: 'https://www.helloasso.com/associations/les-studios-du-heron'
        },
        {
            title: 'Contacts',
            link: '#'
        }
    ];

    return (
        <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen} className={`${raleway.className}`}>
            <NavbarContent justify="start">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Link href="/" aria-current="page">
                        <p className="font-bold text-inherit text-violet-950 dark:text-violet-600">{process.env.NEXT_PUBLIC_SITE_NAME}</p>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex" justify='center'>
                <NavbarItem>
                    <Link href="/about">
                        L&apos;association
                    </Link>
                </NavbarItem>
                <NavbarItem className='text-center flex items-center justify-center space-x-2'>
                    <Link href="https://www.helloasso.com/associations/les-studios-du-heron" target='blank'>
                        <span>Nous soutenir</span>
                    </Link>
                    <IoOpenOutline />
                </NavbarItem>
                <NavbarItem className='flex-1'>
                    <Link href="#">
                        Contacts
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <label className="flex cursor-pointer gap-2">
                    {isDarkMode ? (
                        <i className="ri-sun-line"></i>
                    ) : (
                        <i className="ri-sun-fill text-xl"></i>
                    )}
                    <Switch
                        color="primary"
                        checked={isDarkMode}
                        onChange={toggleDarkMode}
                    />
                    {isDarkMode ? (
                        <i className="ri-moon-fill text-xl"></i>
                    ) : (
                        <i className="primary ri-moon-line"></i>
                    )}
                </label>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={index}>
                        <Link
                            className="w-full"
                            href={item.link}
                            size="lg"
                        >
                            {item.title}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
};

export default Header;

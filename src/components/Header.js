/**
 * @file Header.js
 * @description Composant Header pour l'application. Gère la navigation, le changement de thème et l'ouverture de la modal de contact.
 */

"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Switch, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, useDisclosure, Button } from "@nextui-org/react";
import { Raleway } from "next/font/google";
import { IoOpenOutline } from "react-icons/io5";
import { useTheme } from "next-themes";
import TheModal from "@/components/TheModal";
import "remixicon/fonts/remixicon.css";  // Ajoutez cette ligne si ce n'est pas déjà importé ailleurs

const raleway = Raleway({ weight: ['300', '500', '700'], subsets: ["latin"] });

/**
 * @component
 * @description Le composant Header gère la navigation principale du site, y compris l'ouverture d'une modal de contact et la gestion du thème sombre/clair.
 */
const Header = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();
    
    // Initialiser isDarkMode avec le thème stocké dans le localStorage ou par défaut à false
    const initialTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const [isDarkMode, setIsDarkMode] = useState(initialTheme === 'dark');
    
    // Synchroniser le thème et l'état du Switch
    useEffect(() => {
        if (resolvedTheme) {
            setIsDarkMode(resolvedTheme === 'dark');
        }
    }, [resolvedTheme]);

    /**
     * @function toggleDarkMode
     * @description Bascule entre le mode sombre et le mode clair
     */
    const toggleDarkMode = () => {
        if (resolvedTheme !== 'dark') {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light');
            localStorage.setItem('theme', 'light');
        }
    };

    // Éléments du menu de navigation
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
        <>
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
                        <Link href="https://www.helloasso.com/associations/les-studios-du-heron" target='_blank'>
                            <span>Nous soutenir</span>
                        </Link>
                        <IoOpenOutline />
                    </NavbarItem>
                    <NavbarItem className='flex-1'>
                        <Button onPress={onOpen}>
                            Contacts
                        </Button>
                    </NavbarItem>
                </NavbarContent>

                <NavbarContent justify="end">
                    <label className="flex cursor-pointer gap-2">
                        {resolvedTheme === 'dark' ? (
                            <i className="ri-sun-line"></i>
                        ) : (
                            <i className="ri-sun-fill text-xl"></i>
                        )}
                        <Switch
                            color="primary"
                            isSelected={isDarkMode}
                            onChange={toggleDarkMode}
                        />
                        {resolvedTheme === 'dark' ? (
                            <i className="ri-moon-fill text-xl"></i>
                        ) : (
                            <i className="primary ri-moon-line"></i>
                        )}
                    </label>
                </NavbarContent>

                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        item.title !== 'Contacts' ?

                        <NavbarMenuItem key={index}>
                            <Link
                                className="w-full"
                                href={item.link}
                                size="lg"
                            >
                                {item.title}
                            </Link>
                        </NavbarMenuItem>
                        :

                        <NavbarMenuItem key={index}>
                            <Button onPress={onOpen}>
                                 {item.title}
                            </Button>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
            <TheModal isOpen={isOpen} onOpenChange={onOpenChange} />
        </>
    );
};

export default Header;

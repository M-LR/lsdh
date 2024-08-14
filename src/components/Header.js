/**
 * @file Header.js
 * @description Composant Header pour l'application. Gère la navigation, le changement de thème et l'ouverture de la modal de contact.
 */

"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Switch, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, useDisclosure, Button } from "@nextui-org/react";
import { Raleway } from "next/font/google";
import { useTheme } from "next-themes";
import TheModal from "@/components/TheModal";
import "remixicon/fonts/remixicon.css";

const raleway = Raleway({ weight: ['300', '500', '700'], subsets: ["latin"] });

const ThemeSwitcher = ({ isDarkMode, toggleDarkMode, theme }) => (
    <label className="flex cursor-pointer gap-2">
        {theme === 'dark' ? (
            <i className="ri-sun-line"></i>
        ) : (
            <i className="ri-sun-fill text-xl"></i>
        )}
        <Switch
            color="primary"
            isSelected={isDarkMode}
            onChange={toggleDarkMode}
        />
        {theme === 'dark' ? (
            <i className="ri-moon-fill text-xl"></i>
        ) : (
            <i className="primary ri-moon-line"></i>
        )}
    </label>
);

const Header = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (resolvedTheme) {
            setIsDarkMode(resolvedTheme === 'dark');
        }
    }, [resolvedTheme]);

    const toggleDarkMode = () => {
        const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        setIsDarkMode(newTheme === 'dark'); // Mise à jour immédiate de l'état pour éviter le décalage
        localStorage.setItem('theme', newTheme);
    };

    const menuItems = [
        { title: 'L\'association', link: '/about' },
        { title: 'Nous soutenir', link: 'https://www.helloasso.com/associations/les-studios-du-heron' },
        { title: 'Contacts', link: '#' }
    ];

    return (
        <>
            <Navbar onMenuOpenChange={setIsMenuOpen} className={`${raleway.className}`}>
                <NavbarContent justify="start">
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                    <NavbarBrand>
                        <Link href="/" aria-current="page">
                            <p className="font-bold text-inherit text-violet-950 dark:text-violet-600">
                                {process.env.NEXT_PUBLIC_SITE_NAME}
                            </p>
                        </Link>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex flex-1" justify='center'>
                    {menuItems.slice(0, 2).map((item, index) => (
                        <NavbarItem key={index}>
                            <Link href={item.link} target={item.title === 'Nous soutenir' ? '_blank' : undefined}>
                            
                            {item.title !== 'Nous soutenir' && item.title}
                            </Link>
                            
                        </NavbarItem>
                    ))}
                    <NavbarItem className='flex-1'>
                        <Link href="https://www.helloasso.com/associations/les-studios-du-heron" target='_blank'>
                                <p>Nous soutenir <i class="ri-external-link-line"></i></p>
                        </Link>
                        
                    </NavbarItem>
                    <NavbarItem className='flex-1'>
                        <Button onPress={onOpen}>
                            Contacts
                        </Button>
                    </NavbarItem>
                </NavbarContent>

                <NavbarContent justify="end">
                    <ThemeSwitcher
                        isDarkMode={isDarkMode}
                        toggleDarkMode={toggleDarkMode}
                        theme={theme}
                    />
                </NavbarContent>

                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={index}>
                            {item.title !== 'Contacts' ? (
                                <Link className="w-full" href={item.link} size="lg">
                                    {item.title}
                                </Link>
                            ) : (
                                <Button onPress={onOpen}>{item.title}</Button>
                            )}
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
            <TheModal isOpen={isOpen} onOpenChange={onOpenChange} />
        </>
    );
};

export default Header;

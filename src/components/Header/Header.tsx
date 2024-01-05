"use client";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useEffect, useState } from 'react';
import { useTheme } from '../ThemeContex/ThemeContext';
import '@/app/globals.css';
import styles from './Header.module.css';
import GridViewIcon from '@mui/icons-material/GridView';
import CloseIcon from '@mui/icons-material/Close';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined';
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined';
import CropOriginalOutlinedIcon from '@mui/icons-material/CropOriginalOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


export default function Header() {
    const [darkMode, setDarkMode] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme() || {};

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        }
        else {
            setIsSmallScreen(false);
        }
    }, []);

    return (
        <>
            {!isSmallScreen ?
                <div className='sticky top-0 z-10 background'>
                    <header className="bg-white background">
                        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                            <div className="flex lg:flex-1">
                                <a href="#" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Your Company</span>
                                    <h3 className="font-bold">Fida Akhoon</h3>
                                </a>
                            </div>
                            <div className="flex lg:hidden">
                                <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                </button>
                            </div>
                            <div className="hidden lg:flex lg:gap-x-10">
                                <a href="#Home" className="text-xs font-semibold leading-6 background">Home</a>
                                <a href="#About" className="text-xs font-semibold leading-6 background">About</a>
                                <a href="#Skills" className="text-xs font-semibold leading-6 background">Skills</a>
                                <a href="#Qualification" className="text-xs font-semibold leading-6 background">Services</a>
                                <a href="#Portfolio" className="text-xs font-semibold leading-6 background">Portfolio</a>
                                <a href="#Contact" className="text-xs font-semibold leading-6 background">Contactme</a>
                                <button type="button" className="text-xs font-semibold leading-6 background"> {!darkMode ? <DarkModeIcon className="" onClick={() => {
                                    setDarkMode(!darkMode)
                                    if (toggleTheme) {
                                        toggleTheme();
                                    }
                                }} /> : <Brightness7Icon onClick={() => {
                                    setDarkMode(!darkMode)
                                    if (toggleTheme) {
                                        toggleTheme();
                                    }
                                }} />}</button>
                            </div>
                        </nav>
                    </header>

                </div> :
                <div className="sticky z-10 top-0 bg-white background mb-9" >
                    <div className={styles.container1}>
                        <div className="flex lg:flex-1">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <h3 className="font-bold">Fida Akhoon</h3>
                            </a>
                        </div>
                        <div className="container2 flex gap-3">
                            <button type="button" className="text-xs font-semibold leading-6 background"> {!darkMode ? <DarkModeIcon className="" onClick={() => {
                                setDarkMode(!darkMode)
                                if (toggleTheme) {
                                    toggleTheme();
                                }
                            }} /> : <Brightness7Icon onClick={() => {
                                setDarkMode(!darkMode)
                                if (toggleTheme) {
                                    toggleTheme();
                                }
                            }} />}</button>
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                {isMenuOpen ? (<CloseIcon />) : (<GridViewIcon />)}
                            </button>
                        </div>
                    </div>
                    {isMenuOpen && <div className={styles.smallManu1}>
                        <a href="#Home" className="text-xs text-center font-semibold leading-6 background"><HomeOutlinedIcon /><br /> Home</a>
                        <a href="#About" className="text-xs text-center font-semibold leading-6 background"><Person2OutlinedIcon /><br /> About</a>
                        <a href="#Skills" className="text-xs text-center font-semibold leading-6 background"><CastForEducationOutlinedIcon /><br /> Skills</a>
                        <a href="#Qualification" className="text-xs text-center font-semibold leading-6 background"><HomeRepairServiceOutlinedIcon /><br /> Services</a>
                        <a href="#Portfolio" className="text-xs text-center font-semibold leading-6 background"><CropOriginalOutlinedIcon /><br /> Portfolio</a>
                        <a href="#Contact" className="text-xs text-center font-semibold leading-6 background"><SendOutlinedIcon /><br /> Contactme</a>
                    </div>}
                </div>}
        </>
    );
};

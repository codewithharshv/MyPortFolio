import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const links = [
        { id: 1, link: 'home' },
        { id: 2, link: 'about' },
        { id: 3, link: 'skills' },
        { id: 4, link: 'projects' },
        { id: 5, link: 'education' },
        { id: 6, link: 'certifications' },
        { id: 7, link: 'contact' },
    ];

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-black dark:text-white bg-white dark:bg-black fixed nav z-50 glass dark:glass transition-colors duration-500">
            <div>
                <h1 className="text-5xl font-signature ml-2 cursor-pointer font-bold font-poppins text-neon">
                    Harsh
                </h1>
            </div>

            <ul className="hidden md:flex items-center">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="px-4 cursor-pointer capitalize font-medium text-gray-500 dark:text-gray-300 hover:scale-105 duration-200 hover:text-neon dark:hover:text-neon"
                    >
                        <Link to={link} smooth duration={500}>
                            {link}
                        </Link>
                    </li>
                ))}
                <li onClick={handleThemeSwitch} className="px-4 cursor-pointer text-gray-500 dark:text-gray-300 hover:scale-110 duration-200">
                    {theme === 'dark' ? <FaSun size={25} className="text-yellow-400" /> : <FaMoon size={25} />}
                </li>
            </ul>

            <div className="md:hidden flex items-center">
                <div onClick={handleThemeSwitch} className="px-4 cursor-pointer text-gray-500 dark:text-gray-300 mr-4">
                    {theme === 'dark' ? <FaSun size={25} className="text-yellow-400" /> : <FaMoon size={25} />}
                </div>
                <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 dark:text-gray-500">
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-white to-gray-200 dark:from-black dark:to-gray-800 text-gray-500">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl"
                        >
                            <Link
                                onClick={() => setNav(!nav)}
                                to={link}
                                smooth
                                duration={500}
                            >
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Navbar;

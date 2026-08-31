import React, { useEffect, useState } from 'react'
import { IoSunny } from 'react-icons/io5';
import { PiMoonFill } from 'react-icons/pi';
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
    const [activeNav, setActiveNav] = useState<string>("#");
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
    const [scrollingDown, setScrollingDown] = useState<boolean>(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            
            if (scrollTop > 0 && !scrollingDown) {
                setScrollingDown(true);
            } else if (scrollTop === 0 && scrollingDown) {
                setScrollingDown(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollingDown]);

    return (
        <nav className={`block w-full transition-all duration-300 sticky top-0 z-50
        ${scrollingDown ? "-translate-y-full absolute" : ""}`}
        >
            {/* Nav for Big Screen */}
            <div className={`flex flex-wrap items-center justify-between px-9 md:py-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md transition-shadow duration-300 border-b border-slate-200/50 dark:border-slate-800/50
            ${scrollingDown ? "shadow-lg" : ""}`}
            >
                <a href='#' onClick={() => setActiveNav("#")}>
                    <div className='transition-all duration-500 motion-reduce:transition-none opacity-1 blur-0'>
                        <div className='flex items-center space-x-2 py-4 md:py-1 drop-shadow-lg 
                        bg-gradient-to-r from-[#fa3205] to-[#5301c5] bg-clip-text text-transparent'>
                            <p>&lt;</p>
                            <p className='text-5xl md:text-7xl' id='custom-logo'>
                                O.D.P
                            </p>
                            <p>/&gt;</p>
                        </div>
                    </div>
                </a>

                <button 
                    onClick={() => setIsNavOpen(!isNavOpen)}
                    aria-label="Toggle navigation menu"
                    className='inline-flex items-center p-2 ml-3 text-slate-800 dark:text-slate-200 transition-all duration-500 xl:hidden motion-reduce:transition-none'
                >
                    {isNavOpen ? (
                        <RxCross2 className='w-8 h-8'/>
                    ) : (
                        <RxHamburgerMenu className='w-8 h-8'/>
                    )}
                </button>

                <div className='items-center hidden w-full xl:block xl:w-auto'>
                    <ul className='flex flex-col p-4 mt-4 font-medium xl:p-0 xl:flex-row xl:space-x-8 xl:mt-0 items-center'>
                        <li className='transition-all motion-reduce:transition-none duration-500 delay-[50ms] translate-y-0 opacity-1'>
                            <a href='#about'
                            onClick={() => setActiveNav("#about")}
                            className={`block py-2 pl-3 pr-4 text-slate-700 dark:text-slate-300 hover:text-[#4305ba] dark:hover:text-[#fa3205] transition-colors ${
                                activeNav === "#about" ? "text-[#4305ba] dark:text-[#fa3205] font-bold" : ""
                            }`}>
                                About Me
                            </a>
                        </li>
                        <li className='transition-all motion-reduce:transition-none duration-500 delay-[100ms] translate-y-0 opacity-1'>
                            <a href='#skills'
                            onClick={() => setActiveNav("#skills")}
                            className={`block py-2 pl-3 pr-4 text-slate-700 dark:text-slate-300 hover:text-[#4305ba] dark:hover:text-[#fa3205] transition-colors ${
                                activeNav === "#skills" ? "text-[#4305ba] dark:text-[#fa3205] font-bold" : ""
                            }`}
                            >
                                Skills
                            </a>
                        </li>
                        <li className='transition-all motion-reduce:transition-none duration-500 delay-[150ms] translate-y-0 opacity-1'>
                            <a href='#work'
                            onClick={() => setActiveNav("#work")}
                            className={`block py-2 pl-3 pr-4 text-slate-700 dark:text-slate-300 hover:text-[#4305ba] dark:hover:text-[#fa3205] transition-colors ${
                                activeNav === "#work" ? "text-[#4305ba] dark:text-[#fa3205] font-bold" : ""
                            }`}
                            >
                                Work
                            </a>
                        </li>
                        <li className='transition-all motion-reduce:transition-none duration-500 delay-[200ms] translate-y-0 opacity-1'>
                            <a href='#contact'
                            onClick={() => setActiveNav("#contact")}
                            className={`block py-2 pl-3 pr-4 text-slate-700 dark:text-slate-300 hover:text-[#4305ba] dark:hover:text-[#fa3205] transition-colors ${
                                activeNav === "#contact" ? "text-[#4305ba] dark:text-[#fa3205] font-bold" : ""
                            }`}>
                                Contact
                            </a>
                        </li>
                        <li className='transition-all motion-reduce:transition-none duration-500 delay-[250ms] translate-y-0 opacity-1'>
                            <a href='https://drive.google.com/file/d/1G_tdBYMhlokcGUxibJ-GCfbnrKUHzTKp/view?usp=drive_link'
                            target='_blank'
                            rel='noreferrer'>
                                <button className='block px-6 py-2 transition duration-300 ease-in-out bg-transparent border shadow-sm
                                border-button-color shadow-button-color text-button-color hover:bg-button-color hover:text-white 
                                hover:dark:text-white focus:bg-button-color focus:text-white active:text-white rounded-md'>
                                    Resume
                                </button>
                            </a>
                        </li>
                        <li className='transition-all motion-reduce:transition-none duration-500 delay-[250ms] translate-y-0 opacity-1'>
                            <button 
                                className='p-2 rounded-lg transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center' 
                                onClick={toggleTheme}
                                title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
                                aria-label={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
                            >
                                {theme === "light" ? (
                                    <PiMoonFill className='h-6 w-6 text-slate-700 hover:text-[#4305ba] transition-transform duration-300 hover:-rotate-12'/>
                                ) : (
                                    <IoSunny className='h-6 w-6 text-amber-400 hover:text-amber-300 transition-transform duration-300 hover:rotate-45'/>
                                )}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Nav For Small Screen */}
            <div className={`block w-full absolute xl:hidden px-9 pb-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-xl transition-all duration-300
            ${isNavOpen ? "dropdown-enter-active" : "dropdown-enter-from pointer-events-none opacity-0"}`}>
                <ul className='space-y-1 pt-2'>
                    <li>
                        <a href='#about'
                        onClick={() => { setIsNavOpen(false); setActiveNav("#about"); }}
                        className='block py-3 text-slate-800 dark:text-slate-200 font-medium hover:text-[#4305ba] dark:hover:text-[#fa3205]'
                        >
                            😎 About
                        </a>
                    </li>
                    <li>
                        <a href='#skills'
                        onClick={() => { setIsNavOpen(false); setActiveNav("#skills"); }}
                        className='block py-3 text-slate-800 dark:text-slate-200 font-medium hover:text-[#4305ba] dark:hover:text-[#fa3205]'
                        >
                            🛡️ Skills
                        </a>
                    </li>
                    <li>
                        <a href='#work'
                        onClick={() => { setIsNavOpen(false); setActiveNav("#work"); }}
                        className='block py-3 text-slate-800 dark:text-slate-200 font-medium hover:text-[#4305ba] dark:hover:text-[#fa3205]'
                        >
                            💻 Work
                        </a>
                    </li>
                    <li>
                        <a href='#contact'
                        onClick={() => { setIsNavOpen(false); setActiveNav("#contact"); }}
                        className='block py-3 text-slate-800 dark:text-slate-200 font-medium hover:text-[#4305ba] dark:hover:text-[#fa3205]'
                        >
                            📭 Contact
                        </a>
                    </li>
                    <li className='pt-2'>
                        <a href='https://drive.google.com/file/d/1G_tdBYMhlokcGUxibJ-GCfbnrKUHzTKp/view?usp=drive_link'
                        target='_blank'
                        rel='noreferrer'>
                            <button className='block w-full px-6 py-2.5 text-center text-white shadow-sm bg-button-color shadow-button-color rounded-md
                            focus:bg-button-color focus:text-white active:bg-button-color active:text-white font-medium'>
                                Resume
                            </button>
                        </a>
                    </li>
                    <li className='pt-3 border-t border-slate-200 dark:border-slate-800 mt-3'>
                        <button 
                            onClick={toggleTheme}
                            className='flex items-center justify-between w-full py-2 px-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium'
                        >
                            <span>{theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}</span>
                            {theme === "light" ? (
                                <PiMoonFill className='h-6 w-6 text-slate-700'/>
                            ) : (
                                <IoSunny className='h-6 w-6 text-amber-400'/>
                            )}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
import React, { useState } from 'react'
import { MdDarkMode } from 'react-icons/md';

const Navbar: React.FC = () => {

    const [activeNav, setActiveNav] = useState<string>("#");
    const [darkMode, setDarkMode] = useState<boolean>(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };



  return (
    <>
    <nav className='top-0 z-10 block w-full transition-all duration-300'>
        <div className='flex flex-wrap items-center justify-between px-9 md:px-4 bg-white/[.9]
        dark:bg-slate-900 backdrop-blur-sm transition-shadow duration-300'>
            <a href='#' onClick={() => setActiveNav("#")}>
                <div className='transition-all duration-500 motion-reduce:transition-none opacity-1 blur-0'>
                    <div>
                        <div className='flex items-center space-x-2 py-4 md:py-4 drop-shadow-lg 
                        bg-gradient-to-r from-[#fa3205] to-[#5301c5] bg-clip-text text-transparent'>
                            <p>&lt;</p>
                            <p className='text-5xl md:text-7xl' id='custom-logo'>
                                O.D.P
                            </p>
                            <p>/&gt;</p>
                        </div>
                    </div>
                </div>
            </a>

            <div className='items-center hidden w-full xl:block xl:w-auto'>
                <ul className='flex flex-col p-4 mt-4 font-medium xl:p-0 xl:flex-row xl:space-x-8 xl:mt-0'>
                    <li className='transition-all motion-reduce:transition-none duration-500 delay-[50ms] translate-y-0 opacity-1'>
                        <a className='block py-2 pl-3 pr-4 router-link-active router-link-exact-active hover:text-[#4305ba]'>
                            About Me
                        </a>
                    </li>
                    <li className='transition-all motion-reduce:transition-none duration-500 delay-[100ms] translate-y-0 opacity-1'>
                        <a href='#skills'
                        onClick={() => setActiveNav("#skills")}
                        className='router-link-active router-link-exact-active block py-2 pl-3 pr-4 hover:text-[#4305ba]'
                        >
                            Skills
                        </a>
                    </li>
                    <li className='transition-all motion-reduce:transition-none duration-500 delay-[150ms] translate-y-0 opacity-1'>
                        <a href='#work'
                        className='router-link-active router-link-exact-active block py-2 pl-3 pr-4 hover:text-[#4305ba]'>
                            Work
                        </a>
                    </li>
                    <li className='transition-all motion-reduce:transition-none duration-500 delay-[200ms] translate-y-0 opacity-1'>
                        <a href='#contact'
                        className='router-link-active router-link-exact-active block py-2 pl-3 pr-4 hover:text-[#4305ba]'>
                            Contact
                        </a>
                    </li>
                    <li className='transition-all motion-reduce:transition-none duration-500 delay[250ms] translate-y-0 opacity-1'>
                        <button className='block py-2' onClick={toggleDarkMode}>
                            <MdDarkMode className="h-7 w-7 text-slate-300 hover:text-button-color"/>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    </>
  )
}

export default Navbar;
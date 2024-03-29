import React from 'react'
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { SiGmail } from 'react-icons/si'

const Main: React.FC = () => {
  return (
    <>
    <div className='min-h-full mx-10'>
        <div className='flex flex-col min-h-full md:grid mg:grid-cols-6'>
            <div className='relative flex-initial order-2 col-span-1 mx-auto md:mx-0 md:order-none'>
                <ul className='flex items-center space-x-8 md:fixed md:bottom-0 mb-7 md:flex-col md:space-y-4 md:space-x-0'>

                    <li className='transition-all duration-500 translate-y-0 motion-reduce:transition-none opacity-1'>
                        <a href='https://github.com/Omkar-Potphode' target='_blank'> 
                            <FaGithub className='w-8 h-8 text-black transition duration-300 ease-out svg-inline--fa fa-linkedin
                            md:h-12 md:w-12 hover:-translate-y-1 motion-reduce:hover:translate-y-0 dark:text-slate-300'/>
                        </a>
                    </li>
                    <li className='transition-all duration-500 translate-y-0 motion-reduce:transition-none opacity-1'>
                        <a href='https://www.linkedin.com/in/omkar-potphode-497b63237/' target='_blank'>
                            <FaLinkedin className='w-8 h-8 text-black transition duration-300 ease-out svg-inline--fa fa-linkedin
                            md:h-12 md:w-12 hover:-translate-y-1 motion-reduce:hover:translate-y-0 dark:text-slate-300'/>
                        </a>
                    </li>
                    <li className='transition-all duration-500 translate-y-0 motion-reduce:transition-none opacity-1'>
                        <a href='https://www.linkedin.com/in/omkar-potphode-497b63237/' target='_blank'>
                            <FaXTwitter className='w-8 h-8 text-black transition duration-300 ease-out svg-inline--fa fa-linkedin
                            md:h-12 md:w-12 hover:-translate-y-1 motion-reduce:hover:translate-y-0 dark:text-slate-300'/>
                        </a>
                    </li>
                    <li className='transition-all duration-500 translate-y-0 motion-reduce:transition-none opacity-1'>
                        <a href='mailto:omkar03potphode@gmail.com' target='_blank'>
                            <SiGmail className='w-8 h-8 text-black transition duration-300 ease-out svg-inline--fa fa-linkedin
                            md:h-12 md:w-12 hover:-translate-y-1 motion-reduce:hover:translate-y-0 dark:text-slate-300'/>
                        </a>
                    </li>

                </ul>

                <div className='flex-col flex-1 order-1 col-span-4 md:order-none'></div>
                <div className='relative flex-initial order-2 hidden col-span-1 text-center md:flex md:order-none'>
                    <p className='fixed transition-all duration-500 origin-top-right rotate-90 translate-y-0 bottom-2 right-10
                    motion-reduce:transition-none opacity-1'>
                        📍 Based in Thane, India
                    </p>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Main;
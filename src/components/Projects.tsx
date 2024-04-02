import React from 'react'
import { FaGithub } from 'react-icons/fa6';
import { LuExternalLink } from 'react-icons/lu';
import AdminImg from '../assets/images/Admin-Panel.png';
import NotesImg from '../assets/images/notes-app.png';
import QuizImg from '../assets/images/Quiz-game.png';

const Projects: React.FC = () => {
  return (
    <>
    <section id='skills' className='w-full min-h-screen flex justify-center mt-10 mb-5'>

        <div className='max-w-5xl'>
            <div className='relative flex items-center py-5 transition-all duration-500 translate-y-0 opacity-1 blur-0 motion-reduce:transition-none'>
                <h1 className='pr-2 text-3xl font-bold'>
                    💻 Projects and Work
                </h1>
                <div className='flex-grow border-t border-black dark:border-white border-1'></div>
                <a href='https://github.com/Omkar-Potphode'
                className='pl-2 text-sm text-right sm:pl-5 hover:text-link-color'>
                    Visit Archive
                </a>
            </div>

            <div className='flex flex-col mt-12 space-y-12 transition-all duration-500 delay-300 translate-y-0 motion-reduce:transition-none opacity-1 blur-0'>
                <div className='flex flex-col transition-opacity duration-500 lg:grid lg:grid-cols-2 lg:gap-x-4 motion-reduce:transition-none opacity-1'>
                    <div className='flex flex-col space-y-4 text-left'>
                        <h3 className='pb-2 text-xl font-extrabold'>
                            Admin Panel
                        </h3>
                        <p className='text-slate-500 dark:text-slate-300'>
                        Developed an intuitive admin panel project using ReactJS and Material-UI, 
                        delivering a seamless user experience for efficient management and control. 
                        Streamlined navigation, responsive design, and modular components ensure smooth 
                        functionality across various devices. Empowered with powerful features, this project exemplifies 
                        a modern approach to administrative interfaces.
                        </p> 
                        <p className='text-slate-600'>
                            React, Material UI, chart.js
                        </p>
                        <div className='flex items-center space-x-6 text-slate-400'>
                            <a href='https://github.com/Omkar-Potphode/React-Admin-Panel'
                            className='flex items-center space-x-2 hover:text-[#4305ba] focus:text-link-color active:text-link-color'
                            target='_blank'>
                                <span className='flex items-center space-x-2'>
                                    <FaGithub className='svg-inline--fa fa-github h-7 w-7'/>
                                </span>
                            </a>
                            <a href='https://react-admin-panel-amber.vercel.app/'
                            className='flex items-center space-x-2 hover:text-[#4305ba] focus:text-link-color active:text-link-color'
                            target='_blank'>
                                <span className='flex items-center space-x-2'>
                                    <LuExternalLink className='h-7 w-7'/>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className='order-first pb-4 lg:pb-0 lg:order-none lg:block'>
                        <a href='https://react-admin-panel-amber.vercel.app/' target='_blank'>
                            <img
                            src={AdminImg}
                            alt='Admin panel'
                            loading='lazy'
                            className='mb-32 transition-transform duration-300 ease-in-out rounded-md shadow-md hover:scale-105'
                            />
                        </a>
                    </div>
                </div>

                <div className='flex flex-col transition-opacity duration-500 lg:grid lg:grid-cols-2 lg:gap-x-4 motion-reduce:transition-none opacity-1'>
                    <div className='order-first pb-4 lg:pb-0 lg:order-none lg:block'>
                        <a href='https://notes-app-ty2x.vercel.app/' target='_blank'>
                            <img
                            src={NotesImg}
                            alt='Notes App'
                            className='mb-32 transition-transform duration-300 ease-in-out rounded-md shadow-md hover:scale-105'
                            />
                        </a>
                    </div>
                    <div className='flex flex-col space-y-4 lg:text-right'>
                        <h3 className='pb-2 text-xl font-extrabold'>
                            Notes App
                        </h3>
                        <p>
                        Crafted a dynamic Notes App using ReactJS, leveraging local storage for 
                        seamless data persistence. This project offers a user-friendly interface 
                        for creating, editing, and organizing notes effortlessly. With its intuitive design 
                        and efficient storage management, it exemplifies the power of React in building practical 
                        applications tailored for everyday use.
                        </p>
                        <p className='text-slate-600'>React, JavaScript, HTML, CSS</p>
                        <div className='flex items-center space-x-6 text-slate-400 justify-end'>
                            <a href='https://github.com/Omkar-Potphode/Notes-App'
                            target='_blank'
                            className='flex items-center space-x-2 hover:text-[#4305ba] focus:text-link-color active:text-link-color'
                            >
                                <span className='flex items-center space-x-2'>
                                    <FaGithub className='svg-inline--fa fa-github h-7 w-7'/>
                                </span>
                            </a>
                            <a href='https://notes-app-ty2x.vercel.app/'
                            target='_blank'
                            className='flex items-center space-x-2 hover:text-[#4305ba] focus:text-link-color active:text-link-color'
                            >
                                <span className='flex items-center space-x-2'>
                                    <LuExternalLink className='h-7 w-7'/>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col transition-opacity duration-500 lg:grid lg:grid-cols-2 lg:gap-x-4 motion-reduce:transition-none opacity-1'>
                    <div className='flex flex-col space-y-4 text-left'>
                        <h3 className='pb-2 text-xl font-extrabold'>
                            Quiz Game
                        </h3>
                        <p className='text-slate-500 dark:text-slate-300'>
                        "Crafted an engaging quiz game project using HTML, CSS, and JavaScript, 
                        offering interactive entertainment and educational value. Seamlessly blending 
                        design and functionality, this project showcases dynamic question generation, 
                        responsive layout, and intuitive user interface. Designed with simplicity and 
                        elegance, it exemplifies creativity and technical proficiency in web development."
                        </p>
                        <p className='text-slate-600'>
                            HTML, CSS, JavaScript
                        </p>
                        <div className='flex items-center space-x-6 text-slate-400'>
                            <a href='https://github.com/Omkar-Potphode/Quiz_Game'
                            target='_blank'
                            className='flex items-center space-x-2 hover:text-[#4305ba] focus:text-link-color active:text-link-color'
                            >
                                <span className='flex items-center space-x-2'>
                                    <FaGithub className='svg-inline--fa fa-github h-7 w-7'/>
                                </span>
                            </a>
                            <a href='https://quiz-game-xi-gilt.vercel.app/'
                            target='_blank'
                            className='flex items-center space-x-2 hover:text-[#4305ba] focus:text-link-color active:text-link-color'
                            >
                                <span className='flex items-center space-x-2'>
                                    <LuExternalLink className='h-7 w-7'/>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className='order-first pb-4 lg:pb-0 lg:order-none lg:block'>
                        <a href='https://quiz-game-xi-gilt.vercel.app/'
                        target='_blank'
                        >
                            <img
                            src={QuizImg}
                            alt='Quiz App'
                            loading='lazy'
                            className='mb-32 transition-transform duration-300 ease-in-out rounded-md shadow-md hover:scale-105'
                            />
                        </a>
                    </div>
                </div>

                <button className='px-6 py-2 mx-auto mt-10 block transition duration-300 ease-in-out bg-transparent border shadow-sm
                            border-button-color shadow-button-color text-button-color hover:bg-button-color hover:text-white 
                            hover:dark:text-slate-300 focus:bg-button-color focus:text-white active:text-white'>
                    <a href='https://github.com/Omkar-Potphode' target='_blank'>
                        Show More
                    </a>
                </button>
            </div>
        </div>
    </section>
    </>
  )
}

export default Projects;
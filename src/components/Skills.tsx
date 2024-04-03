import React from 'react'
import { motion } from 'framer-motion';
import { techStack } from '../utils/constants';

const Skills: React.FC = () => {
  return (
    <>
    <section id='skills' className='w-full min-h-screen flex justify-center'>

        <div className='max-w-5xl'>
        <div className='relative flex items-center py-5 transition-all duration-500 translate-y-0 opacity-1 blur-0 motion-reduce:transition-none'>
            <h1 className='pr-5 text-3xl font-bold'>
                🥷 Skills and Technologies
            </h1>
            <div className='flex-grow border-t border-black dark:border-white border-1'></div>
        </div>

        <div className='transition-all duration-500 delay-300 translate-y-0 gap-y-4 xl:gap-x-5 xl:gap-y-0
        text-slate-500 dark:text-slate-300 motion-reduce:transition-none opacity-1 blur-0'>
            <p>
            In my skill set, I leverage a blend of innovative technologies and trusted open-source tools to develop user-centric, high-performing applications and websites. My focus lies in crafting seamless experiences tailored for smartphones, tablets, and desktops, ensuring optimal functionality and performance across all devices.
            </p>

            <motion.div className='flex flex-wrap justify-between mt-8 text-sm font-medium text-black md:text-lg'>
                {techStack.map((tech, index) => (
                    <motion.div 
                    key={index}
                    initial="hidden"
                    whileInView={"visible"}
                    variants={{
                        visible: {
                            y: 0,
                            opacity: 1,
                            transition: {
                                type: "spring",
                            },
                        },
                        hidden: {opacity: 1, y: 80},
                    }}
                    >
                        {/* Big Screen */}
                        <div className='items-center hidden px-4 py-2 mx-2 mt-6 rounded-lg cursor-pointer 
                        md:flex w-52 bg-gray-50 md:m-4 hover:scale-125 md:w-48'>
                            <img alt='' src={tech.link} className='w-12'/>
                            <h4 className='ml-4 text-md'>{tech.name}</h4>
                        </div>

                        {/* Small Screen */}
                        <div className='flex flex-col items-center w-32 px-4 py-2 mt-6 rounded-lg cursor-pointer
                        md:hidden bg-gray-50 hover:scale-125'>
                            <img alt='' src={tech.link} className='w-12'/>
                            <h4 className='ml-4 text-md'>{tech.name}</h4>
                        </div>

                    </motion.div>
                ))}
            </motion.div>
        </div>
        </div>

    </section>
    </>
  )
}

export default Skills;
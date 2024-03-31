import React from 'react';
import Avatar from '../assets/images/Avatar.png';
import { devInfo } from '../utils/constants';

const About: React.FC = () => {
  return (
    <>
    <section id='about' className='min-h-[calc(100vh*0.08)] flex mb-52 justify-center'>
        <div className='flex flex-col items-center m-auto space-x-0 space-y-7 md:space-y-0 md:space-x-7 lg:flex-row'>
            <img
            src={Avatar}
            alt='Avatar Image'
            className='w-64 md:mb-6 h-63 md:w-96 md:h-96 lg:w-96 lg:h-96 rounded-full shadow-sm transition-all
            motion-reduce:transition-none duration-500 delay-[400ms] translate-y-0 opacity-1 object-cover'
            />

            <div className='order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]'>
                <div></div>
                <code className='font-mono text-sm text-gray-400 md:text-lg'>
                    <div>
                        <span className='ml-3 mr-2 text-pink-400'>const</span>
                        <span className='mr-2 text-white'>Programmer</span>
                        <span className='mr-2 text-pink-400'>=</span>
                        <span className="text-gray-400">{'{'}</span>
                    </div>
                    
                    <div>
                        <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                        <span className="text-gray-400">{`'`}</span>
                        <span className="text-amber-300">{devInfo.name}</span>
                        <span className="text-gray-400">{`',`}</span>
                    </div>

                    <div className='ml-4 lg:ml-8 mr-2'>
                        <span className="text-white">Skills:</span>
                        <span className='text-gray-400'>{'['}</span>
                        {devInfo.technologies.map((tech, index) => (
                            <span key={index} className='text-gray-400'>
                                "{tech}"{index === devInfo.technologies.length -1 ? "" : ","}
                            </span>
                        ))}
                        <span className='text-gray-400'>{'],'}</span>
                    </div>

                    <div>
                        <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
                        <span className="text-orange-400">
                            {devInfo.hardWorker.toString()}
                        </span>
                        <span className="text-gray-400">,</span>
                    </div>
                    
                    <div>
                        <span className="ml-4 lg:ml-8 mr-2 text-white">quickLeaner:</span>
                        <span className="text-orange-400">
                            {devInfo.quickLeaner.toString()}
                        </span>
                        <span className="text-gray-400">,</span>
                    </div>

                    <div>
                        <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
                        <span className="text-orange-400">
                            {devInfo.problemSolver.toString()}
                        </span>
                        <span className="text-gray-400">,</span>
                    </div>

                    <div>
                        <span className='ml-4 lg:ml-8 mr-2 text-green-400'>hireable:</span>
                        <span className='text-orange-400'>function</span>
                        <span className='text-amber-300'>{'(){'}</span>
                    </div>

                    <div>
                        <span className='ml-8 lg:ml-16 mr-2 text-orange-400'>return</span>
                        <span className='text-gray-400'>{'('}</span>
                    </div>

                    <div>
                        <span className='ml-12 lg:ml-24 text-cyan-400'>this.</span>
                        <span className='mr-2 text-white'>hardWorker</span>
                        <span className='text-amber-300'>&amp;&amp;</span>
                    </div>

                    <div>
                        <span className='ml-12 lg:ml-24 text-cyan-400'>this.</span>
                        <span className='mr-2 text-white'>problemSolver</span>
                        <span className='text-amber-300'>&amp;&amp;</span>
                    </div>

                    <div>
                        <span className='ml-12 lg:ml-24 text-cyan-400'>this.</span>
                        <span className='mr-2 text-white'>skills.length</span>
                        <span className='mr-2 text-amber-300'>&gt;=</span>
                        <span className='text-orange-400'>4</span>
                    </div>

                    <div>
                        <span className='ml-8 lg:ml-16 mr-2 text-gray-400'>{');'}</span>
                    </div>

                    <div>
                        <span className='ml-4 lg:ml-8 text-gray-400'>{'};'}</span>
                    </div>

                    <div>
                        <span className='ml-3 text-gray-400'>{'};'}</span>
                    </div>

                </code>
            </div>

            
        </div>
    </section>
    </>
  )
}

export default About;
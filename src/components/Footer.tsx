import React from 'react'
import { CgGitFork } from 'react-icons/cg'
import { IoStar } from 'react-icons/io5'

const Footer: React.FC = () => {
  return (
    <>
    <footer>

        <div className='flex-grow border-t border-black dark:border-white border-1'></div>
        <div className='flex flex-col md:flex-row items-center justify-between mt-10 mb-10'>
            <p>
                © Developer Portfolio by 
                <a href='https://www.linkedin.com/in/omkar-potphode-497b63237/' target='_blank'>
                    {" "}Omkar Potphode 👾
                </a>
            </p>

            <div className='flex items-center gap-5'>
                <a 
                href='https://github.com/Omkar-Potphode'
                target='_blank'
                className='flex items-center gap-2 uppercase hover:text-[#4305ba]'
                >
                    <IoStar/>
                    <span>Star</span>
                </a>

                <a 
                href='https://github.com/Omkar-Potphode'
                target='_blank'
                className='flex items-center gap-2 uppercase hover:text-[#4305ba]'
                >
                    <CgGitFork/>
                    <span>Fork</span>
                </a>
            </div>
        </div>

    </footer>
    </>
  )
}

export default Footer
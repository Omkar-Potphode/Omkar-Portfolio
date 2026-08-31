import React, { useState } from 'react';
import FormImg from '../assets/images/personal_email.svg';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { TbMailForward } from 'react-icons/tb';
import 'react-toastify/dist/ReactToastify.css';
import { useTheme } from '../context/ThemeContext';


interface InputState{ 
    name: string;
    email: string;
    message: string;
}

interface ErrorState{
    email: boolean;
    required: boolean;
}

const Contact: React.FC = () => {
    const { theme } = useTheme();

    const [input, setInput] = useState<InputState>({
        name: '',
        email: '',
        message: '',
    });

    const [error, setError] = useState<ErrorState>({
        email: false,
        required: false,
    });

    const checkRequired = () => {
        if(input.email && input.message && input.name) {
            setError({...error, required: false});
        }
    };

    const handleSendMail = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
        e.preventDefault();
        if (!input.email || !input.message || !input.name) {
            setError({ ...error, required: true });
            return;
        } else if (error.email) {
            return;
        } else {
            setError({ ...error, required: false });
        }
    
        const serviceID: string = import.meta.env.VITE_PUBLIC_EMAILJS_SERVICE_ID || '';
        const templateID: string = import.meta.env.VITE_PUBLIC_EMAILJS_TEMPLATE_ID || '';
        const options = { publicKey: import.meta.env.VITE_PUBLIC_EMAILJS_PUBLIC_ID };

        const templateParams = {
            from_name: input.name,
            from_email: input.email,
            to_name: "Omkar Potphode",
            message: input.message,
        }
    
        try {
            const res = await emailjs.send(serviceID, templateID, templateParams, options);
    
            if (res.status === 200) {
                toast.success('Message sent successfully!',{
                    position:"top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    theme: theme === "dark" ? "dark" : "light",
                });
                setInput({
                    name: '',
                    email: '',
                    message: '',
                });
            }
        } catch (error) {
            toast.error('Failed to send message: Unexpected response status.',{
                position:"top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                theme: theme === "dark" ? "dark" : "light",
            });
        }
    };
    

  return (
    <>
    <section id='contact' className='flex flex-col w-full min-h-screen'>

        <div className='relative flex items-center py-5 transition-all duration-500 translate-y-0 opacity-1 blur-0 motion-reduce:transition-none'>
            <div className='flex-grow border-t border-black dark:border-white border-1'></div>
            <h1 className='px-5 text-3xl font-bold'>📭 Contact</h1>
            <div className='flex-grow border-t border-black dark:border-white border-1'></div>
        </div>

        <div className='flex flex-col my-16 transition-all duration-500 delay-300 translate-y-0 motion-reduce:transition-none opacity-1 blur-0'>
            <div className='mx-auto space-y-8'>
                <h1 className='text-3xl font-extrabold text-center'>Get in Touch</h1>
                <p className="text-slate-500 dark:text-slate-300">
                    Feel free to reach out with any inquiries or opportunities. Open to collaborations that match my skills and interests.
                </p>
            </div>

            <div className='flex flex-col transition-opacity mt-5 duration-500 lg:grid lg:grid-cols-2 lg:gap-x-4 motion-reduce:transition-none opacity-1 gap-12'>

                <div className='max-w-3xl rounded-lg border-2 border-slate-300 dark:border-slate-700 p-4 lg:p-6 bg-slate-50/50 dark:bg-slate-800/50 backdrop-blur-sm'>
                    <form>
                        <div className='mt-2 flex flex-col gap-6'></div>
                        <div className="flex flex-col gap-2 mb-5">
                            <label className="text-slate-700 dark:text-slate-300 font-medium">Your Name: </label>
                            <input
                            className="bg-white text-slate-800 dark:bg-slate-800 dark:text-slate-100 w-full border-2 rounded-md border-slate-300 dark:border-slate-600 focus:border-[#4305ba] dark:focus:border-[#fa3205] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                            type="text"
                            required={true}
                            onChange={(e) => setInput({ ...input, name: e.target.value })}
                            onBlur={checkRequired}
                            value={input.name}
                            />
                        </div>       

                        <div className="flex flex-col gap-2 mb-5">
                            <label className="text-slate-700 dark:text-slate-300 font-medium">Your mail: </label>
                            <input
                            className="bg-white text-slate-800 dark:bg-slate-800 dark:text-slate-100 w-full border-2 rounded-md border-slate-300 dark:border-slate-600 focus:border-[#4305ba] dark:focus:border-[#fa3205] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                            type="text"
                            required={true}
                            onChange={(e) => setInput({ ...input, email: e.target.value })}
                            onBlur={checkRequired}
                            value={input.email}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-slate-700 dark:text-slate-300 font-medium">Your Message: </label>
                            <textarea
                            className="bg-white text-slate-800 dark:bg-slate-800 dark:text-slate-100 w-full border-2 rounded-md border-slate-300 dark:border-slate-600 focus:border-[#4305ba] dark:focus:border-[#fa3205] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                            name="message"
                            rows={4}
                            required={true}
                            onChange={(e) => setInput({ ...input, message: e.target.value })}
                            onBlur={checkRequired}
                            value={input.message}
                            />
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            {error.required &&
                            <p className="text-sm text-red-400">
                                Email and Message are required!
                            </p>
                            }
                        <button
                        className="mt-5 flex items-center gap-4 px-6 py-2.5 transition duration-300 ease-in-out bg-transparent border shadow-sm rounded-md
                        border-button-color shadow-button-color text-button-color hover:bg-button-color hover:text-white 
                        hover:dark:text-white focus:bg-button-color focus:text-white active:text-white font-medium"
                        role="button"
                        onClick={handleSendMail}
                        >
                            Send Message
                            <TbMailForward className='' size={25} />
                        </button>

                        </div>
                    </form>
                </div>
                <div className='lg:text-right'>
                    <img src={FormImg} alt='FormImg'/>
                </div>

            </div>
        </div>
    </section>
    </>
  )
}

export default Contact;
import { useEffect, useState } from 'react'
import './App.css'
import {Loading, Main, Navbar} from './components'

function App() {

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() =>{

    //Simulate asynchronous initialization
    const initializeApp =  async () =>{
      try{
        //Set loading to true before initialization
        setIsLoading(true);

        //Simulate initialization process
        await new Promise((res) => setTimeout(res, 2000));

        //Set loading to false after initialization
      } catch (err) {
        console.error("Error initializing App:", err);
      } finally {
        setIsLoading(false);
      }
    };

    initializeApp();
  }, []);

  return (
    <>
      <div className='min-h-screen text-base bg-white overscroll-contain 
      dark:bg-slate-900 dark:text-slate-300 md:text-xl'>
        {isLoading ? (
          <Loading/>
        ) : (
          <>
            <Navbar/>
            <Main/>
          </>
        )}
      </div>
    </>
  );
}

export default App

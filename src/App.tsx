import { useEffect, useState } from 'react'
import './App.css'
import {Loading, Main, Navbar} from './components'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function PortfolioApp() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { theme } = useTheme();

  useEffect(() => {
    const initializeApp = async () => {
      try {
        setIsLoading(true);
        await new Promise((res) => setTimeout(res, 2000));
      } catch (err) {
        console.error("Error initializing App:", err);
      } finally {
        setIsLoading(false);
      }
    };

    initializeApp();
  }, []);

  return (
    <div className='min-h-screen text-base bg-white text-slate-900 overscroll-contain transition-colors duration-300 dark:bg-slate-900 dark:text-slate-300 md:text-xl'>
      {isLoading ? (
        <Loading/>
      ) : (
        <>
          <Navbar/>
          <Main/>
          <ToastContainer theme={theme === 'dark' ? 'dark' : 'light'} />
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}

export default App


import React from 'react';
import { ClimbingBoxLoader } from 'react-spinners';

const Loading: React.FC = () => {
  return (
    <>
    <div className='flex items-center justify-center h-screen'>
        <ClimbingBoxLoader color="#df2050" size={25} />
    </div>
    </>
  )
}

export default Loading;
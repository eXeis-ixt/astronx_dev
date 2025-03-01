import Navbar from '@/components/Navigation/Navbar';
import React, { PropsWithChildren } from 'react';

const Default = ({children}: PropsWithChildren) => {
  return (
    <div>

        <div className='max-w-[80%] mx-auto'>
            <Navbar />
        </div>
    <div className=''>
    {children}
    </div>

    </div>
  )
}

export default Default
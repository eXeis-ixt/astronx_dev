import Navbar from '@/components/Navigation/Navbar'
import React, { PropsWithChildren } from 'react'

const DefaultLayout = ({children}: PropsWithChildren) => {
  return (
    <div>
        <Navbar />

        <div>
            {children}
        </div>

    </div>
  )
}

export default DefaultLayout
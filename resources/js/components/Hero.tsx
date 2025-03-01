import React from 'react'
import { Spotlight } from "@/components/ui/spotlight-new";


const Hero = () => {


  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center  antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-600 to-blue-400 bg-opacity-50">
          Hello <br /> I'm Fahad Bhuiyan
        </h1>
        <p className="mt-4 font-normal text-base  max-w-lg text-center mx-auto">
          I'm a passionate web developer who is dedicated to creating user-friendly and visually appealing websites.
        </p>
      </div>
    </div>
  )
}

export default Hero
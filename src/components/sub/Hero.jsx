import React from 'react'
import { RiSearch2Line } from 'react-icons/ri'

const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto flex flex-col md:flex-row px-4 sm:px-8 justify-center items-center h-[85%]">
        <div className="md:w-1/2">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl text-white text-center md:text-start font-bold w-full font-Inter">
                The Most Affordable Place To Stay In The San Francisco Bay Area
            </h1>
        </div>
        <div className="grid lg:w-1/2 md:justify-items-end mt-4">
            <img src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg" className="sm:w-full sm:h-[340px] w-[350px] h-[300px] rounded-lg mb-4 object-cover lg:w-[408px]" />
            <div className="w-[350px] sm:w-[408px] h-[88px] bg-white rounded-lg">
                <form className='flex items-center w-full justify-center h-full'>
                    <select className='px-4 sm:px-6 py-5 border border-[#E6E6E6] font-Poppins font-medium text-sm'>
                        <option value="">All Type</option>
                    </select>
                    <select className='px-4 sm:px-6 py-5 border border-[#E6E6E6] font-Poppins font-medium text-sm'>
                        <option value="">Neighborhood</option>
                    </select>
                    <button className='px-4 sm:px-6 py-6 border border-[#E6E6E6] bg-[#23A6F0] font-Poppins font-medium text-lg'><RiSearch2Line /></button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Hero
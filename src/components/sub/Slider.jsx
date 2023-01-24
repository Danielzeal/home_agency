import React from 'react'
import { useState } from 'react'
import { testimonials } from '../../data'
import { RxDot, RxDotFilled } from 'react-icons/rx'
import { RiDoubleQuotesL } from 'react-icons/ri'

const Slider = () => {
    const [slide, setSlide] = useState(0)

    const handleNextSlide = (index) => {
        setSlide(index)
    }

    return (
        <div className='sm:w-1/2 w-full font-Inter relative'>
            <RiDoubleQuotesL className='absolute -top-10 -left-12 -z-30 text-[#f4501e4b]' size={80}/>
            <h1 className='text-sm md:text-xl mb-6 text-center sm:text-start'>
            {testimonials[slide].text} 
            </h1>
            <div className='flex gap-5 items-center justify-center sm:justify-start'>
                <img src={testimonials[slide].profileImg} alt={testimonials[slide].name} className='w-16 h-16 rounded-full object-cover object-top border-2 border-[#F4511E]' />
                <div>
                    <h3 className='font-bold text-[#F4511E] sm:text-lg text-base'>
                        {testimonials[slide].name}
                    </h3>
                    <p className='text-base'>
                        {testimonials[slide].owner}
                    </p>
                </div>
            </div>
            <div className='flex justify-center md:justify-start text-[#F4511E] text-3xl mt-6'>
                {testimonials.map((_, index) => (
                    <div key={index} className='cursor-pointer' onClick={() => handleNextSlide(index)}>
                        {slide === index ? <RxDotFilled /> : <RxDot />}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Slider
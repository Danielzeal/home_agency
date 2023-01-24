import React from 'react'
import { Slider, Video } from './sub'

const Testimonial = () => {
  return (
    <section className='bg-[#f4501e14] h-[600px] p-4'>
        <div className='max-w-6xl mx-auto h-full flex flex-col-reverse sm:flex-row items-center justify-center md:gap-10 gap-4'>
            <Slider />
            <div className='sm:w-1/2 w-full relative'>
              <Video />
            </div>
        </div>
    </section>
  )
}

export default Testimonial
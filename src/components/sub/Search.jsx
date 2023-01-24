import React from 'react'

const Search = () => {
  return (
    <section>
        <div className='flex flex-col md:flex-row gap-5 items-center sm:my-24 my-12'>
            <div className='flex flex-col md:w-1/2 gap-4'>
                <div className='flex gap-4 items-end'>
                    <div className='relative'>
                        <img className='w-[250px] h-[334px] object-cover rounded-3xl' src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVkcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                        <p className='absolute text-center inset-x-0 top-7 text-white font-Inter font-semibold'>Flexible Leases</p>
                    </div>
                    <div className='relative'>
                        <img className='w-[270px] h-[270px]  object-cover rounded-3xl' src="https://images.unsplash.com/photo-1542596594-649edbc13630?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                        <p className='absolute inset-x-0 top-7 text-center text-white font-Inter font-semibold'>7-Day Happiness <br />Guaranteed</p>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className='relative'>
                        <img className='w-[212px] h-[285px] object-cover rounded-3xl' src="https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xlYW5pbmclMjBwcm9kdWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                        <p className='absolute inset-x-0 top-7 text-center text-white font-Inter font-semibold'>Monthly House <br />Cleaning</p>
                    </div>
                    <div className='relative'>
                        <img className='w-[338px] h-[354px] object-cover rounded-3xl' src="https://images.unsplash.com/photo-1633113214698-485cdb2f56fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                        <p className='absolute inset-x-0 top-7 text-center text-white font-Inter font-semibold'>Choose Your <br /> Own Roommate</p>
                    </div>
                </div>
            </div>
            <div className='pt-4 md:w-1/2 md:pl-8'>
                <h3 className='font-inter font-extrabold text-2xl sm:text-3xl lg:text-4xl text-center md:text-start'>
                    Flexibility and options to suit your lifestyle.
                </h3>
                <p className='font-inter text-lg pt-4 pb-10 text-center md:text-start'>
                    You need it? We got it. We make finding your next home easy, comfortable, and simle. From our happiness guarantee to our selective roomate finder option. We provide you the flexibility that you most desire.
                </p>
                <div className='flex justify-center md:justify-start'>
                    <button className='bg-[#F4511E] font-Inter text-white rounded-lg text-base sm:text-lg py-4 md:py-6 px-8 sm:px-40 md:px-8'>Search Rooms</button>
                </div>
            </div>
        </div>
        <p className='text-center font-Inter text-xl md:text-2xl font-medium mb-5'>Your Property With Us And Be Confident That Your Room Will Be Filled Out!</p>
    </section>
  )
}

export default Search
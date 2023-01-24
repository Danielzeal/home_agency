import React from 'react'
import { ImFacebook2, ImGoogle, ImLinkedin2, ImLocation, ImPhone, ImPinterest2, ImPrinter, ImRss, ImTwitter, ImYoutube } from 'react-icons/im'
import { FaInstagram } from 'react-icons/fa'

const data = [
    {
        id: 1,
        icon: <ImFacebook2 />
    },
    {
        id: 2,
        icon: <ImTwitter />
    },
    {
        id: 3,
        icon: <ImLinkedin2 />
    },
    {
        id: 4,
        icon: <ImYoutube />
    },
    {
        id: 5,
        icon: <FaInstagram />
    },
    {
        id: 6,
        icon: <ImGoogle />
    },
    {
        id: 7,
        icon: <ImPinterest2 />
    },
    {
        id: 8,
        icon: <ImRss />
    },
]

const Footer = () => {
  return (
    <footer className='max-w-6xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 font-Inter'>
        <div className='pt-20 lg:pt-40'>
            <hr className='border-[#F4511E]'/>
            <div className='flex flex-col sm:flex-row my-10 sm:mx-8 lg:m-24 justify-between sm:items-center'>
                <p className='font-bold text-[50px] text-center cursor-pointer'>Logo</p>
                <div className='text-[#0A142F]'>
                    <p className='flex items-center gap-4 mb-4 text-sm'><ImLocation color='#F4511E' /> Falconer Drive, Suite 4+ Charlottesville, CA, 12345</p>
                    <div className='flex items-center justify-between'>
                        <p className='flex items-center gap-4 '><ImPhone color='#F4511E' /> (123) 456-7890</p>
                        <p className='flex items-center gap-4'><ImPrinter color='#F4511E' /> (123) 456-7890</p>
                    </div>
                    <div className='lg:space-x-10 space-x-4 flex items-center justify-center mt-8'>
                        <span className='text-sm sm:text-base'>Social Media</span>
                        {data.map(icon => (
                            <div key={icon.id} className='text-[#F4511E] cursor-pointer'>
                                {icon.icon}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div>
            <hr />
            <div className='flex flex-col justify-between md:items-center my-6 text-[#0A142F]'>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-between font-Inter text-sm'>
                    <span className=' cursor-pointer'>ABOUT US</span>
                    <span className='text-end sm:text-center cursor-pointer'>CONTACT US</span>
                    <span className='sm:text-end md:text-center cursor-pointer'>HELP</span>
                    <span className='text-end sm:text-start cursor-pointer'>PRIVACY POLICY</span>
                    <span className='sm:text-center cursor-pointer'>DISCLAIMER</span>
                </div>
                <p className='text-[12px] text-center mt-4 '>Copyright &#169; 2020 Minimunlivingcost. All Right reserved</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
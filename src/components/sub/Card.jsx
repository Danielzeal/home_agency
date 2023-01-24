import React from 'react'
import { RiHotelBedLine, RiShowersLine, RiHashtag} from 'react-icons/ri'

export const Card = ({data}) => {
  return (
    <>
        {data.map(d => (
            <div key={d.id} className='w-[340px] bg-white hover:shadow-2xl rounded-3xl flex flex-col gap-4 font-DmSans origin-left animate-menu-animate'>
                <img src={d.img} className='rounded-t-3xl w-full h-[284px] object-cover' />
                <div className='px-4 font-bold text-2xl'>
                    <h3>{d.text}</h3>
                </div>
                <div className='px-4'>
                    <h5 className='text-lg text-[#818181]'>{d.room}</h5>
                    <h3 className='text-[#F4511E] font-bold text-2xl'>{d.price}/Month</h3>
                </div>
                <div className='flex justify-between items-center'>
                    <p className='w-full p-4 flex items-center gap-2 justify-center border-2 border-l-0 border-b-0 border-[#E4E4E4]'><RiHotelBedLine /> 4</p>
                    <p className='border-2 border-[#E4E4E4] w-full flex items-center gap-2 border-l-0 border-b-0 justify-center p-4'><RiShowersLine /> 2</p>
                    <p className='border-t-2 border-[#E4E4E4] w-full flex items-center gap-2 justify-center p-4'><RiHashtag /> 2</p>
                </div>
            </div>
        ))}
    </>
  )
}

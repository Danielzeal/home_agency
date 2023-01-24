import React from 'react'
import { RiMoneyDollarCircleLine, RiCommunityLine, RiStackFill, RiPlantLine, RiShieldStarLine, RiEye2Line } from 'react-icons/ri'

const data = [
  {
    id: 1,
    data: 'Pay As Little As Possible',
    icon: <RiMoneyDollarCircleLine size={38} color='#F4511E' />
  },
  {
    id: 2,
    data: 'Enjoy Wisdom Of Community!',
    icon: <RiCommunityLine size={38} color='#F4511E' />
  },
  {
    id: 3,
    data: 'Let Somebody Else Take Care Of Landlord',
    icon: <RiStackFill size={38} color='#F4511E'  />
  },
  {
    id: 4,
    data: 'Enjoy Peaceful Environment!',
    icon: <RiPlantLine size={38} color='#F4511E' />
  },
  {
    id: 5,
    data: 'Stay Safe! Save Money!',
    icon: <RiShieldStarLine size={38} color='#F4511E' />
  },
  {
    id: 6,
    data: 'Pay For What You Use!',
    icon: <RiEye2Line size={38} color='#F4511E' />
  }
]

const SectionOne = () => {
  return (
    <section className='max-w-6xl mx-auto py-10 px-4 sm:px-8'>
       <div>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl font-extrabold font-Inter'>Minimun Living Cost Takes Care Of Everything</h1>
          <div className='w-[184px] h-1 bg-[#F4511E] mt-2'/>
        </div>
        <div className='w-full mt-10 flex flex-col md:items-center md:flex-row gap-10'>
          <div className='w-full md:w-[387px]'>
            <img src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className='w-full h-[350px] sm:h-[480px] object-cover rounded-tl-[50px] rounded-br-[50px] shadow-2xl' />
          </div>
          <div className='md:w-[70%] grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2'>
            {data.map(d => (
              <div key={d.id} className='flex flex-col items-center lg:items-start justify-center'>
                <div className='w-20 h-20 bg-white flex items-center justify-center shadow-lg rounded-lg'>
                  {d.icon}
                </div>
                <p className='text-center lg:text-start text-lg lg:text-[23px] sm:text-xl md:text-[22px] font-Inter font-semibold py-6'>{d.data}</p>
              </div>
            ))}
          </div>
        </div> 
    </section>
  )
}

export default SectionOne;
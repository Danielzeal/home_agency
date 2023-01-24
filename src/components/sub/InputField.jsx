import React from 'react'

const InputField = ({name, placeholder}) => {
  return (
    <div>
      <label htmlFor="name" className='font-Poppins font-semibold'>{name} <span className='text-[#F45113]'>*</span></label> <br />
      <input type="text" name='name' autoComplete='off' placeholder={placeholder} className='h-12 bg-[#DDD] border border-[#9b9b9b] w-full px-4 outline-none font-Inter rounded-md'/>
    </div>
  )
}

export default InputField
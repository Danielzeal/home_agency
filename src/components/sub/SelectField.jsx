import React from 'react'

const SelectField = ({ title }) => {
  return (
    <div>
      <label htmlFor="city" className='font-Poppins font-semibold'>{title} <span className='text-[#F45113]'>*</span></label>
      <select name="city" id="city" className='h-12 bg-[#DDD] border border-[#9b9b9b] w-full px-4 outline-none font-Inter rounded-md' >
        <option value="">Select {title}</option>
      </select>
    </div>
  )
}

export default SelectField
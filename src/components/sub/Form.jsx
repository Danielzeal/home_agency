import React from 'react'
import InputField from './InputField'
import SelectField from './SelectField'

const Form = () => {

  return (
    <section className='shadow-2xl px-4 sm:px-[63px] mb-24'>
      <h3 className='text-center font-Poppins  text-2xl sm:text-3xl text-[#F4511E] font-bold pt-10 pb-10'>Add A New Property</h3>
      <form>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          <InputField name={'Name'} placeholder={'Enter name'} />
          <InputField name={'Address'} placeholder={'Enter Address'} />
          <InputField name={'Unit Number'} placeholder={'Enter Unit'} />
          <SelectField title={'State'}/>
          <SelectField title={'City'}/>
          <SelectField title={'Room Type'}/>
          <InputField name={'Price'} placeholder={'Enter Price'} />
          <SelectField title={'Room Number'}/>
        </div>
        <div className='my-6'>
          <label htmlFor="message" className='font-Poppins font-semibold'>Description <span className='text-[#F45113]'>*</span></label>
          <textarea name="message" id="message" placeholder='Enter Description' className='bg-[#DDD] border border-[#9b9b9b] w-full h-[151px] rounded-md p-4 outline-none font-Inter'></textarea>
        </div>
        <div>
          <h3 className='font-Poppins font-semibold'>Upload Photos</h3>
          <div className='w-full h-[102px] border border-dashed border-[#F4511E] rounded-lg text-center flex flex-col justify-center'>
            <p className='font-bold'>Drag your image here, or <span className='text-[#F4511E]'>browse</span></p>
            <p className='text-[12px] text-[#00000080]'>Supported: JPG, JPEG, PNG</p>
          </div>
        </div>
        <div className='w-full flex justify-center'>
          <button className='my-14 bg-[#F4511E] font-Inter text-white rounded-lg text-base w-full sm:text-lg py-4 md:py-6 sm:px-20 lg:px-40'>
            Add New Property
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form
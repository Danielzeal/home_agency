import React, { useState } from 'react'
import { Card, Pagination } from './sub'
import { data } from '../data'

const Property = () => {
    const [pageNumber, setPageNumber] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(6)
    const [views, setViews] = useState(false)

    const indexOfLastPost = pageNumber * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPost = data.slice(indexOfFirstPost, indexOfLastPost)

    return (
        <section className='bg-slate-100 min-h-screen w-full px-4 sm:px-8'>
            <div className='py-10 max-w-6xl mx-auto'>
                <div className='flex flex-col sm:flex-row gap-8 sm:gap-8 justify-between mb-8'>
                    <div>
                        <h1 className='font-inter font-extrabold text-2xl sm:text-3xl lg:text-4xl'>List Of Properties</h1>
                     <div className='w-[84px] h-1 bg-[#F4511E] mt-2' />
                    </div>
                    <button className='bg-[#F4511E] text-white font-Inter rounded-lg text-base sm:text-lg py-4 md:py-6 px-8' onClick={() => setViews(prev => !prev)}>{!views ? 'View All Properties' : 'Hide Properties'}</button>
                </div>
                <div className='grid md:grid-cols-2 place-content-center md:even:place-content-end lg:grid-cols-3 gap-y-6 md:gap-y-12 md:gap-x-10 cursor-pointer'>
                    {!views ? <Card data={currentPost} /> : <Card data={data} />}
                </div>
                {!views && <Pagination data={data} postsPerPage={postsPerPage} setPageNumber={setPageNumber} page={pageNumber} />}
            </div>
        </section>
    )
}

export default Property
import React from 'react'

const Pagination = ({data, postsPerPage, setPageNumber, page}) => {

    const pageNumbers = []

    const pageLength = data.length / postsPerPage;
    

    for (let index = 1; index <= Math.ceil(data.length / postsPerPage); index++) {
        pageNumbers.push(index) 
    }

    const handleNextPaginate = () => {
        if (page === pageLength) return;
        setPageNumber(prev => prev + 1)
    }

    const handlePrevPaginate = () => {
        if (page === 1) return;
        setPageNumber(prev => prev - 1)
    }

    return (
        <nav className='flex items-center justify-center pt-10'>
            <ul className='bg-white flex text-[#F4511E]'>
                <li className={`${page === pageLength ? 'cursor-not-allowed bg-[#F3F3F3]' : 'cursor-pointer border-[#E8E8E8]'} p-4 border-2  border-r-0 `} onClick={handleNextPaginate}>Next</li>
                {pageNumbers.map(number => (
                    <li key={number} className={`border-2 border-[#E8E8E8] p-4 border-r-0 cursor-pointer ${number == page ? 'bg-[#F4511E] text-white' : null}`} onClick={() => setPageNumber(number)}>
                        {number}
                    </li>
                ))}
                <li className={`${page === 1 ? 'cursor-not-allowed bg-[#F3F3F3]' : 'border-[#E8E8E8] cursor-pointer'} p-4 border-2`} onClick={handlePrevPaginate}>Prev</li>
            </ul>
        </nav>
    )
}

export default Pagination
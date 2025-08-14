import React from 'react'
// importing the pagination css for styling the page
import './Pagination.css'
const Pagination = ({ value, handlePrev, handleNext }) => {
    // Need to Implement the incresing and decreasing the page numbers
    return (
        <div className='stripe'>
            <div className='left-arrow' onClick={handlePrev}><i class="fa-solid fa-arrow-left-long"></i></div>
            <div><h4 className='heading'>{value}</h4></div>
            <div className='right-arrow' onClick={handleNext}><i class="fa-solid fa-arrow-right"></i></div>
        </div>
    )
}

export default Pagination

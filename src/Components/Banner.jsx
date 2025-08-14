// let's create an BANNER for our website
import React from 'react'
import './Banner.css'
const Banner = () => {
  return (
    <>
      <div className='banner' style={{ backgroundImage: `url("https://i.pinimg.com/1200x/0b/ac/89/0bac898999f616d08e0208933bfed909.jpg")` }}>
        <div className='Stripe'>Avenger's End Game</div>
      </div>
      <div className='Trending-Movies-Heading'>Trending Movies</div>
    </>
  )
}
export default Banner


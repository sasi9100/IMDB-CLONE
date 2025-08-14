// let's create an Header for our website
import React from 'react'
import MovieLogo from './MovieLogo.jpg';
// Import Css File
import './Header.css'
const Header = () => {
    return (
        <>
            <div className='nav-bar'>
                <img src={MovieLogo} alt="Image Not Found 404" className='Logo'></img>
                <a href="/" className='font-extrabold text-red-600 ml-10 mt-2.5'>Home</a>
                <a href="WatchList" className='font-extrabold text-red-600 ml-10 mt-2.5'>Watchlist</a>
                <button className='login-btn'>Login</button>
            </div>
        </>
    )
}

export default Header

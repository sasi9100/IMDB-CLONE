import React from 'react'
import { Link } from 'react-router-dom'
import MovieCards from './MovieCards';
import { useState, useEffect } from 'react';
import axios from 'axios';
// Importing The "CSS" File 
import './Home.css'
import Banner from './Banner';
import Pagination from './Pagination';
import Footer from './Footer';
// let us import an Router 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const Home = () => {
    // let us use an useState to render the component which receving the data from the API
    const [Movies, setMovies] = useState([]);
    // useState for pagination
    const [page, setPage] = useState(1);
    // useState is using to Display the when the user cliked on the emoji and display in the another page
    const [WatchList, setWatchList] = useState([]);
    // let us use an useEffect to Handle the data from the API
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=2e1c5188215a9efccdb37b581cff7496&language=en-US&page=${page}`)
            .then((Response) => {
                setMovies(Response.data.results);
                setPage(Response.data.page);
            })
    }, [page])
    // pagenation logic implementation for previous page navigaitng
    let handlePrev = () => {
        if (page === 1) {
            setPage(page);
        }
        else {
            setPage(page - 1);
        }
    }
    // pagenation logic implementaion for forward page navigation
    let handleNext = () => {
        setPage(page + 1);
    }
    {/* This Function Must Invoked When the User Click upon the Emoji */ }
    let handleMovieWatchList = (MovieObjects) => {
        let handleNewWatchList = [...WatchList, MovieObjects];
        setWatchList(handleNewWatchList);
        console.log(handleNewWatchList);
    }

    // Function to remove the movie from the watchlist 
    let handleRemoveWatchlist = (MovieObjects) => {
        let filterWatchlist = WatchList.filter((moives) => {
            return moives.id != MovieObjects.id
        });
        setWatchList(filterWatchlist);
    }
    return (
        <>
            <div>
                <Link to={"/Home"}></Link>
            </div>
            <Banner />
            {/* Rendering The Movie Card's */}
            <div className='card-container'>
                {Movies.map((MovieObjects) => {
                    return <MovieCards key={MovieObjects.id} poster={MovieObjects.poster_path} name={MovieObjects.original_title} handleMovieWatchList={handleMovieWatchList} MovieObjects={MovieObjects} handleRemoveWatchlist={handleRemoveWatchlist} WatchList={WatchList} />
                })}
            </div>
            <Pagination value={page} handlePrev={handlePrev} handleNext={handleNext} />
            <Footer />
        </>
    )
}
export default Home

import { useContext, useEffect, useState } from 'react';
import { ContextApi } from './ContextApi';
import './Watchlist.css';
import generid from '../Utilities/Geners';

const Watchlist = () => {
    const { WatchListDisplay, setWatchList } = useContext(ContextApi); // Receiving data from context
    console.log("Movies Data In WatchList.jsx :- ", WatchListDisplay);

    // Delete function
    const handleDelete = (id) => {
        const updatedList = WatchListDisplay.filter(movie => movie.id !== id);
        setWatchList(updatedList); // Update context state
    };

    // Search state
    const [search, setSearch] = useState('');

    // Genre State (array instead of string)
    const [generList, setgenerList] = useState(['All Genres']);

    // Handle input change
    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    // Sort ascending
    const ascendingSort = () => {
        let sortedAscending = [...WatchListDisplay].sort((movieA, movieB) => {
            return movieA.vote_average - movieB.vote_average;
        });
        setWatchList(sortedAscending);
    };

    // Sort descending
    const DescendingSort = () => {
        let sortedDescending = [...WatchListDisplay].sort((movieA, movieB) => {
            return movieB.vote_average - movieA.vote_average;
        });
        setWatchList(sortedDescending);
    };

    // UseEffect for genre list
    useEffect(() => {
        let temp = WatchListDisplay.map((movie) => {
            return generid[movie.genre_ids[0]];
        });
        temp = ['All Genres', ...new Set(temp)]; // Remove duplicates & add "All Genres"
        setgenerList(temp);
        console.log("Value of the temp variable is :- ", temp);
    }, [WatchListDisplay]);

    return (
        <>
            {/* Genre Buttons */}
            <div className='Three-Buttons'>
                {generList.map((genre, index) => (
                    <button key={index} className='btn'>{genre}</button>
                ))}
            </div>

            {/* Search Box */}
            <div className='Input-Div'>
                <input
                    onChange={handleSearch}
                    value={search}
                    type="text"
                    className="Input-Box"
                    placeholder='Search For Movies'
                />
            </div>

            {/* Table */}
            <div className='table-div'>
                <table className='table-tag'>
                    <thead>
                        <tr>
                            <th className='table-children-head'>Image</th>
                            <th className='table-children-head'>Name</th>
                            <th className='table-children-head'>
                                <i onClick={ascendingSort} className="fa-solid fa-arrow-up"></i> Rating <i onClick={DescendingSort} className="fa-solid fa-arrow-down"></i>
                            </th>
                            <th className='table-children-head'>Popularity</th>
                            <th className='table-children-head'>Genre</th>
                            <th className='table-children-head'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {WatchListDisplay && WatchListDisplay.length > 0 ? (
                            WatchListDisplay.filter((movie) => {
                                return (movie.title || movie.name || "")
                                    .toLowerCase()
                                    .includes(search.toLowerCase());
                            }).map((movie, index) => (
                                <tr key={index} className="row-2">
                                    <td>
                                        <img
                                            className='Image-1'
                                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                            alt={movie.title || "Image Not Found"}
                                        />
                                    </td>
                                    <td>{movie.title || movie.name}</td>
                                    <td>{movie.vote_average}</td>
                                    <td>{movie.popularity}</td>
                                    <td>{generid[movie.genre_ids[0]]}</td>
                                    <td>
                                        <button
                                            className='delete-btn'
                                            onClick={() => handleDelete(movie.id)}
                                        >
                                            💔 remove
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" style={{ textAlign: "center", padding: "20px" }}>
                                    No movies in the watchlist.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Watchlist;

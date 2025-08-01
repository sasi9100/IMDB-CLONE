import React from 'react'
import { Link } from 'react-router-dom';
// let us import an Watchlist.css file
import './Watchlist.css';
const Watchlist = ({ WatchList }) => {
    console.log(WatchList);
    return (
        <>
            <div>
                <Link to={"Watchlist"}></Link>
            </div>
            {/* Creating all there Buttons */}
            <div className='Three-Buttons'>
                <button className='btn'>All Genres</button>
                <button className='btn'>Actions</button>
                <button className='btn'>Crime</button>
            </div>
            {/* let us Create an Search Box for the Searchiing the Movies */}
            <div className='Input-Div'>
                <input type="text" className="Input-Box" placeholder='Search For Movies' />
            </div>
            {/* Let us Desgin an Table to store the data which is in the Watch list */}
            <div className='table-div'>
                <table className='table-tag'>
                    <thead>
                        <tr>
                            <th className='table-children-head'>Image</th>
                            <th className='table-children-head'>Name</th>
                            <th className='table-children-head'><i class="fa-solid fa-arrow-up"></i> Rating <i class="fa-solid fa-arrow-down"></i></th>
                            <th className='table-children-head'>Popularity</th>
                            <th className='table-children-head'>Genre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {WatchList.map((movie) => {
                            return <tr className="row-2">
                                <img className='Image-1' src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="Krishna Image Is Not Found" />
                                <td>{movie.original_title}</td>
                                <td>{movie.vote_average}</td>
                                <td>{movie.popularity}</td>
                                <td>{movie.id}</td>
                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Watchlist

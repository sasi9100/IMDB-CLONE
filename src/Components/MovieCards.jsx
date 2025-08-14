import React from 'react'
import './MovieCards.css'
const MovieCards = ({ WatchList, MovieObjects, poster, name, handleMovieWatchList, handleRemoveWatchlist }) => {
    let doesContain = () => {
        for (let i = 0; i < WatchList.length; i++) {
            if (WatchList[i].id == MovieObjects.id) {
                return true
            }
        }
        return false
        
    }
    return (
        <>
            <div className="card">
                {doesContain() ?
                    <div onClick={() => (handleRemoveWatchlist(MovieObjects))} className='emojies-div'>&#10060;</div> : <div onClick={() => (handleMovieWatchList(MovieObjects))} className='emojies-div'>&#128150;</div>
                }
                <img
                    className="Image"
                    src={`https://image.tmdb.org/t/p/w500${poster}`}
                    alt="Image Not Found 404"
                />
                <h6 className="strip">{name}</h6>
            </div>

        </>
    )
}

export default MovieCards

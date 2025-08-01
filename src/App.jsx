import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Watchlist from './Components/Watchlist';
import { useState } from 'react';
function App() {
  const [WatchList, setWatchList] = useState([1]);
  console.log("Values Of The WatchList ".WatchList)
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home WatchList={WatchList} setWatchList={setWatchList} />} />
        <Route path="/Watchlist" element={<Watchlist WatchList={WatchList} setWatchList={setWatchList} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



// https://api.themoviedb.org/3/movie/popular?api_key=2e1c5188215a9efccdb37b581cff7496&language=en-US&page=2


// This is my API key 
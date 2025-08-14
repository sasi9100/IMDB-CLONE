import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Watchlist from './Components/Watchlist';
import { ContextApi } from './Components/ContextApi';
import { useState, useEffect } from 'react';

function App() {
  // ✅ Safely parse watchlist from localStorage, default to empty array if not found
  const [WatchListDisplay, setWatchList] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('watchlist') || "[]");
    } catch (error) {
      console.error("Error parsing watchlist from localStorage:", error);
      return [];
    }
  });

  // ✅ Save watchlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(WatchListDisplay));
  }, [WatchListDisplay]);

  return (
    <ContextApi.Provider value={{ WatchListDisplay, setWatchList }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Watchlist" element={<Watchlist />} />
        </Routes>
      </BrowserRouter>
    </ContextApi.Provider>
  );
}

export default App;

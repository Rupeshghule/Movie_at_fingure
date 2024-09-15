import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import MovieDetailPage from './components/MovieDetailPage';
import Navbar from './components/Navbar';
import TopRatedPage from './components/TopRatedPage';
import UpcomingPage from './components/UpcomingPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/top-rated" element={<TopRatedPage />} />
          <Route path="/upcoming" element={<UpcomingPage />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

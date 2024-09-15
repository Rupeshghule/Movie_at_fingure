import React, { useCallback, useEffect, useState } from 'react';
import MovieList from '../MovieList';
import './index.css';

const Loader = () => (
  <div className="loader"></div>
);

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch movies based on page and query
  const getMovies = useCallback(async () => {
    const Api_Key = 'c45a857c193f6302f2b5061c3b85e743';
    let apiEndpoint;

    if (query) {
      apiEndpoint = `https://api.themoviedb.org/3/search/movie?api_key=${Api_Key}&language=en-US&query=${query}&page=${page}`;
    } else {
      apiEndpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${Api_Key}&language=en-US`;
    }

    setLoading(true);

    try {
      const response = await fetch(apiEndpoint);
      const data = await response.json();
      setMovies(data.results);
      setTotalPages(data.total_pages);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching movies:', error);
      setLoading(false);
    }
  }, [page, query]);

  // Fetch movies when page or query changes
  useEffect(() => {
    getMovies();
  }, [page, query, getMovies]);

  // Handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    setPage(newPage);
  };

  // Handle input change for search
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle search submission
  const handleSearch = () => {
    setQuery(searchQuery);
    setPage(1);
    setCurrentPage(1);
  };

  return (
    <div className="container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Show loader when loading, else display movies */}
      {loading ? <Loader /> : <MovieList movies={movies} />}

      <div className="pagination-cont">
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <span>
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

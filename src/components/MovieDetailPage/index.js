import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './index.css';

const MovieDetailPage = () => {
  const { id } = useParams(); // Access the movie ID from the route params
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    // Fetch movie details when the component mounts
    fetchMovieDetails(id);
    fetchMovieCast(id);
  }, [id]);

  const fetchMovieDetails = async (id) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=001a9328866634851582ce672c31e5fd&language=en-US`
      );
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  const fetchMovieCast = async (id) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=001a9328866634851582ce672c31e5fd&language=en-US`
      );
      const data = await response.json();
      setCast(data.cast);
    } catch (error) {
      console.error('Error fetching movie cast:', error);
    }
  };

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-detail-page">
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.overview}</p>
      <h2>Cast</h2>
      <div className="cast-list">
        {cast.map((member) => (
          <div key={member.cast_id} className="cast-member">
            <img
              src={`https://image.tmdb.org/t/p/w500${member.profile_path}`}
              alt={member.name}
            />
            <p>{member.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetailPage;

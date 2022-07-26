import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

//import { getGenre } from "./getGenre";
import "./movie-app.css";
const GetMovies = () => {
  const [movies, setMovie] = useState([]);
  const [genre, setGenre] = useState([]);
  const [genreId, setGenreId] = useState([]);
  const [movieInfo, setMovieInfo] = useState({});
  const [uniqueId, setUniqueId] = useState(0);
  //Get a list of movies by genre
  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=380f962505ebde6dee08b0b646fe05f1&with_genres=${genreId}`
      );
      const data = await res.data;
      console.log(data);
      setMovie(data.results);
    };
    fetchMovies();
  }, [genreId]);

  //Get all the genres
  useEffect(() => {
    const getGenre = async function () {
      const res = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=380f962505ebde6dee08b0b646fe05f1&language=en-US"
      );
      const data = await res?.data;
      setGenre(data.genres);
    };
    getGenre();
  }, []);

  // Get the id from a movie (this will go down as a prop for MovieCard)
  const getMovieId = function (id) {
    let movieId;
    movies.filter((movie) => {
      if (movie.id === id) movieId = movie.id;
      // setUniqueId(movieId);
    });
    console.log(movieId);
    return movieId;
  };
  //console.log(uniqueId);

  useEffect(() => {
    const fetchMovieInfo = async () => {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/507086/release_dates?api_key=<<api_key>>"
      );
      const data = await res.data;
      console.log(data);
      setMovieInfo(data);
    };
    fetchMovieInfo();
  }, [genreId]);
  console.log(movieInfo);
  return (
    <div>
      <div className="movie-app">
        <h1>Pick a movie</h1>
        <select
          onChange={(e) => {
            const movie = genre.filter((item) => item.name === e.target.value);
            const [obj] = movie;
            let movieID = obj.id;
            setGenreId(movieID);
          }}
        >
          {genre.map((item) => (
            <option key={item.id}> {item.name}</option>
          ))}
        </select>
      </div>
      <div>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            imgSrc={movie.backdrop_path}
            title={movie.title}
            description={movie.overview}
            rating={movie.vote_average}
            releaseDate={movie.release_date}
            id={movie.id}
            getMovie={getMovieId}
          />
        ))}
      </div>
    </div>
  );
};
export default GetMovies;

import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieCard from "./MovieCard";
import "./movie-app.css";
//import { GenreContext } from "./GetGenres";
const GetMovies = (props) => {
  const [movies, setMovie] = useState(null);
  const { genreID } = useParams();
  // console.log(genreId);
  // console.log(props.id);
  //Get a list of movies by genre
  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=380f962505ebde6dee08b0b646fe05f1&with_genres=${genreID}`
      );
      const data = await res.data;
      console.log(data);
      setMovie(data.results);
    };
    fetchMovies();
  }, [genreID]);
  return (
    <div>
      {movies?.map((movie) => (
        <MovieCard
          key={movie.id}
          imgSrc={movie.backdrop_path}
          title={movie.title}
          description={movie.overview}
          rating={movie.vote_average}
          releaseDate={movie.release_date}
          id={movie.id}
        />
      ))}
    </div>
  );
};
export default GetMovies;

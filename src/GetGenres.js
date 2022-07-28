import React, { useState, useEffect, createContext } from "react";
import { Link, useParams, onChange } from "react-router-dom";
import axios from "axios";
import GetMovies from "./GetMovies";
import { useNavigate } from "react-router-dom";

//export const GenreContext = createContext();
const GetGenres = () => {
  const [genre, setGenre] = useState([]);
  const [genreId, setGenreId] = useState("");

  let { genreID } = useParams();
  // let id;
  // id = genreID;
  //console.log(id);
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
  console.log(genre);
  //console.log(id);
  // function renderMovie(id) {
  //   return <GetMovies id={id} />;
  // }
  const navigate = useNavigate();
  function handleChange(name, id) {
    navigate(`/movies/${name}/${id}`);
  }
  return (
    <div>
      <div className="movie-app">
        <h1>Pick movies by genre!</h1>
        <select
          onChange={(e) => {
            const movie = genre.filter((item) => item.name === e.target.value);
            const [obj] = movie;
            let genreId = obj.id;
            console.log(genreId);
            setGenreId(genreId);
            handleChange(obj.name, genreId);
          }}
        >
          <option></option>
          {genre.map((item) => (
            <option key={item.id}> {item.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default GetGenres;

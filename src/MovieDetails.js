import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./MovieDetails.css";
const MovieDetails = (props) => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState({});

  useEffect(() => {
    const fetchMovieInfo = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=380f962505ebde6dee08b0b646fe05f1&language=en-US`
      );
      const data = await res.data;
      console.log(data);
      setMovieInfo(data);
    };
    fetchMovieInfo();
  }, []);
  console.log(movieInfo);
  const { cast, crew } = movieInfo;
  console.log(cast, crew);
  return (
    <div>
      <div className="characters-cards-container">
        {cast?.map((item) => (
          <div className="charcacter-card">
            <div className="character-img">
              <img
                src={`https://www.themoviedb.org/t/p/w780/${item.profile_path}`}
              ></img>
            </div>
            <div className="character-names">
              <div>
                {" "}
                <span className="character-real-name">{item.name}</span>
              </div>
              <div>
                <span>{item.character}</span>
              </div>
            </div>
          </div>
        ))}
        ;
      </div>

      <div className="overview">
        <span>{props.title}</span>
        <p>{props.description}</p>
        <small>⭐{props.rating}</small>
        <p>Release date: {props.releaseDate}</p>
      </div>
    </div>
  );
};
export default MovieDetails;

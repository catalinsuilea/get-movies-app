import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./MovieDetails.css";
const MovieDetails = () => {
  const { id } = useParams();
  const [castInfo, setCastInfo] = useState({});
  const [movieInfo, setMovieInfo] = useState({});
  console.log(id);
  useEffect(() => {
    const fetchCastInfo = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=380f962505ebde6dee08b0b646fe05f1&language=en-US`
      );
      const data = await res.data;
      console.log(data);
      setCastInfo(data);
    };
    fetchCastInfo();
  }, []);

  useEffect(() => {
    const fetchMovieInfo = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=380f962505ebde6dee08b0b646fe05f1&language=en-US`
      );
      const data = await res.data;
      console.log(data);
      setMovieInfo(data);
    };
    fetchMovieInfo();
  }, []);
  console.log(movieInfo.name);
  console.log(castInfo);
  const { cast, crew } = castInfo;
  console.log(cast, crew);
  return (
    <div>
      <div
        className="movie-description-container"
        style={{
          backgroundImage: `url(https://www.themoviedb.org/t/p/w780/${movieInfo.poster_path})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",

          backgroundPosition: "center",
          position: "relative",
          zIndex: "-1",
        }}
      >
        <div className="movie-about">
          <div className="img-movie-description">
            <img
              src={`https://www.themoviedb.org/t/p/w780/${movieInfo.backdrop_path}`}
            ></img>
          </div>
          <div className="movie-info">
            <h1>
              {movieInfo.title}{" "}
              {`(${movieInfo.release_date?.split("-").slice(0, 1)})`}{" "}
            </h1>
            <div className="movie-details">
              <span>PG</span>
              <p className="release-date">{movieInfo.release_date} </p>
              {`(${movieInfo.original_language?.toUpperCase()})`}
              <li>
                {movieInfo.genres?.map((genre) => (
                  <span className="genres">{genre.name},</span>
                ))}
              </li>
            </div>
            <span className="tagline space">{movieInfo.tagline}</span>
            <span className="overview-title space">Overview</span>
            <p className="overview-content space">{movieInfo.overview}</p>
            <div className="movie-crew space">
              {crew?.map((member, i) =>
                i >= 4 ? (
                  ""
                ) : (
                  <div className="crew">
                    <span>{member.original_name}</span>
                    <small>{member.job}</small>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="cast-and-others">
        <div class="cast">
          <h2>Top Billed Cast</h2>
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
                    <span className="character-movie-name">
                      {item.character}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            ;
          </div>
        </div>
        <div className="revenue-and-about">
          <div className="data">
            <div>
              <span>Status</span> <p>{movieInfo.status}</p>
            </div>
            <div>
              <span>Original Language</span>{" "}
              <p>{movieInfo.original_language?.toUpperCase()}</p>
            </div>
            <div>
              <span>Release date:</span>
              <p>{movieInfo.release_date}</p>
            </div>
            <div>
              <span>Budget</span>
              <p>{`$${movieInfo.budget}`}</p>
            </div>
            <div>
              <span>Revenue</span>
              <p>{`$${movieInfo.revenue}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetails;

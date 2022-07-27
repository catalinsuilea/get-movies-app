import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
const MovieCard = (props) => {
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisLoading(!isLoading);
    }, 1000);
  }, []);
  return (
    <div className="card-container">
      <Link
        to={`/${props.id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div
          className="card"
          onClick={() => {
            props.getMovie(props.id);
          }}
        >
          <div className="card-content">
            {isLoading ? (
              <Loader />
            ) : (
              <>
                <div className="card-img">
                  {" "}
                  <img
                    src={`https://www.themoviedb.org/t/p/w780/${props.imgSrc}`}
                  ></img>
                </div>
                <div className="overview">
                  <span>{props.title}</span>
                  <p>{props.description}</p>
                  <small>⭐{props.rating}</small>
                  <p>Release date: {props.releaseDate}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};
export default MovieCard;

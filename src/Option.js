import React from "react";
import { Link } from "react-router-dom";
const Option = (props) => {
  return (
    <Link to={`/movies/${props.link}`}>
      {" "}
      <option>{props.text}</option>
    </Link>
  );
};
export default Option;

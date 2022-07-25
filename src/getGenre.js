import axios from "axios";
import React, { useState } from "react";
export const getGenre = async function () {
  const res = await axios.get(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=380f962505ebde6dee08b0b646fe05f1&language=en-US"
  );
  const data = await res.data;
  console.log(data);
  // const id = data.genres.map((genre) => genre.id);
  // const genre = data.genres.map((item) => item.name);
  // console.log(id, genre);
};

import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import GetMovies from "./GetMovies";
import MovieDetails from "./MovieDetails";
import GetGenres from "./GetGenres";
import { GenreContext } from "./GetGenres";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GetGenres />}></Route>
        <Route
          path="/movies/:genreName/:genreID"
          element={<GetMovies />}
        ></Route>
        <Route path="/:movieName/:id" element={<MovieDetails />}></Route>
      </Routes>
    </div>
  );
}
export default App;

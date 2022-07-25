import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import GetMovies from "./GetMovies";
import MovieDetails from "./MovieDetails";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GetMovies />}></Route>
        <Route path="/:id" element={<MovieDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;

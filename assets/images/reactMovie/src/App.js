import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Movies from './views/Movies/Movies'
import Movie from './views/Movies/Movie'
import Contact from "./views/Contact/Contact";

function App() {
  return (
    <Routes>
      <Route path="/"   element={<Home/>}/>
      <Route path="/movies" element={<Movies/>} />
      <Route path="/movies/:id" element={<Movie />} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  );
}

export default App;

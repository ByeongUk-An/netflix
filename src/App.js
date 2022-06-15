import {Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import SearchMovie from "./pages/SearchMovie";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" index element={<Home/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/movies/:id"  element={<MovieDetail/>}/>
      <Route path="/searchmovie/:searchname"  element={<SearchMovie/>}/>
    </Routes>
    </>
  );
}

export default App;

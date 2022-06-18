import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import SearchMovie from "./pages/SearchMovie";
import Layout from "./components/Layout";


function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" index element={<Home/>}/>
                <Route path="/movies" element={<Movies/>}/>
                <Route path="/movies/:id" element={<MovieDetail/>}/>
                <Route path="/searchmovie/:searchname" element={<SearchMovie/>}/>
            </Routes>
        </Layout>
    );
}

export default App;

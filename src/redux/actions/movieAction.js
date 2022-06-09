import api from "../api"


const API_KEY = process.env.REACT_APP_API_KEY;
function getMovies() {

    return async (dispatch) => {
    const popularMovieApi =  api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);

    const topRatedApi =  api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);

    const upComingApi =  api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);

    // Api를 동시에 부르기 위해 사용 -> 각각의 변수에 await를 안써주고 한번만 사용
    const [popularMovies,topRatedMovies,upComingMovies] = await Promise.all([popularMovieApi,topRatedApi,upComingApi]);



    }
}

export const movieAction = {
    getMovies,
};
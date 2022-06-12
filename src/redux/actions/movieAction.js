import api from "../api"


const API_KEY = process.env.REACT_APP_API_KEY;

function getMovies() {

    return async (dispatch) => {
        
        try {
            dispatch({type:"GET_MOVIES_REQUEST"})  // 데이터 도착전 로딩 스피너 값 바꿔주기
            const popularMovieApi = api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);

            const topRatedApi = api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);

            const upComingApi = api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);

            const genreApi = api.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`)

            // Api를 동시에 부르기 위해 사용 -> 각각의 변수에 await를 안써주고 한번만 사용
            const [popularMovies, topRatedMovies, upcomingMovies,genreList] = await Promise.all([popularMovieApi, topRatedApi, upComingApi,genreApi]);

            //도착후
            console.log("장르리스트",genreList)

            dispatch({
                type: "GET_MOVIES_SUCCESS",
                payload: {
                    popularMovies: popularMovies.data,
                    topRatedMovies: topRatedMovies.data,
                    upcomingMovies: upcomingMovies.data,
                    genreList:genreList.data.genres
                }
            })
        }catch(error) {
            dispatch({type: "GET_MOVIES_FAILURE"})
        }


    }
}

export const movieAction = {
    getMovies,
};
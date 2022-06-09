import api from "../api"

function getMovies() {

    return async (dispatch) => {
    const popularMovieApi = await api.get(`/movie/popular?api_key=f3341ae37fe392613293736e7f266ef5&language=en-US&page=1`)

        // const url = `/movie/popular?api_key=f3341ae37fe392613293736e7f266ef5&language=en-US&page=1`;
        // const response = await fetch(url);
        // const data = await response.json()
        //
        // const url2 = `/movie/top_rated?api_key=f3341ae37fe392613293736e7f266ef5&language=en-US&page=1`;
        // const response2 = await fetch(url2);
        // const data2 = await response2.json()
        //
        // const url3 = `/movie/upcoming?api_key=f3341ae37fe392613293736e7f266ef5&language=en-US&page=1`;
        // const response3 = await fetch(url3);
        // const data3 = await response3.json()
    }
}

export const movieAction = {
    getMovies,
};
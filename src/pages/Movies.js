import React from 'react';
import Navigation from "../components/Navigation";
import styled from "styled-components";
import {useSelector} from "react-redux";
import Sort from "../components/Sort"
import MovieItem from "../components/MovieItem";

const Wrapper = styled.div`
  max-width: 1760px;
  margin: 50px auto 0;
  display: flex;
  & .right-movie {
    width: 80%;
    //border: 1px solid #fff;
    display: flex;
    flex-wrap: wrap;
    //justify-content: space-between;
  }
`;

const Movies = (props) => {
    const {popularMovies, topRatedMovies, upcomingMovies, loading} = useSelector(state => state.movie);
    console.log(popularMovies)
    return (
        <>
            <Navigation/>
            <Wrapper>
            <Sort movies={popularMovies}/>
                <div className="right-movie">

                    {/*{popularMovies&& popularMovies.results.sort((a, b) => b.vote_average - a.vote_average).map((item,index)=> {*/}
                    {/*    return<MovieItem key={index} item={item}/>*/}
                    {/*})}*/}
                    {popularMovies?.results.map((item,index)=> {
                        return <MovieItem key={index} item={item}/>
                    })}


                </div>
            </Wrapper>
        </>
    )
}

export default Movies;
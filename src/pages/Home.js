import React,{useEffect,useState} from 'react';
import Navigation from "../components/Navigation";
import {movieAction} from "../redux/actions/movieAction";
import {useDispatch, useSelector} from "react-redux";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import styled,{css} from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";


const Wrapper = styled.div`
  //margin-left: 100px;
`;

const Title = styled.h2`
  font-size: 40px;
  margin-bottom: 10px;
  margin-left: 10px;

  @media only screen and (max-width: 768px) {
    text-align: center;
    
  }
`;

const override = css`
  border-color: red;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Home = (props) => {
    const dispatch = useDispatch();
    const {popularMovies,topRatedMovies,upcomingMovies,loading} = useSelector(state => state.movie);

    const random = Math.floor(Math.random()*20+1);



    useEffect(() => {
        dispatch(movieAction.getMovies());
    }, []);
    // loading 이 true => loading 스피너 활성화
    // loading이 false => 데이터를 뷰

    // true : 데이터 받기전
    // false : 데이터 도착 후 , 에러 났을떄

    if(loading) {
        return <ClipLoader color={"#fff"} loading={loading} css={override}  size={150} />
    }


    return(
        <>
        <Navigation/>
            <Banner movie={popularMovies.results[random]}/>
            <Wrapper>
                <Title>Popular Movie</Title>
                <MovieSlide movies={popularMovies && popularMovies}/>
                <Title>Top rated Movie</Title>
                <MovieSlide movies={topRatedMovies && topRatedMovies}/>
                <Title>Upcoming Movie</Title>
                <MovieSlide movies={upcomingMovies && upcomingMovies}/>
            </Wrapper>
        </>
    )
}

export default Home;
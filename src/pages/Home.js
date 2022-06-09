import React,{useEffect,useState} from 'react';
import Navigation from "../components/Navigation";
import {movieAction} from "../redux/actions/movieAction";
import {useDispatch, useSelector} from "react-redux";

const Home = (props) => {
    const dispatch = useDispatch();
    const {popularMovies,topRatedMovies,upComingMovies} = useSelector(state => state.movie);
    console.log(upComingMovies);

    useEffect(() => {
        dispatch(movieAction.getMovies());
    }, []);


    return(
        <>
        <Navigation/>
        </>
    )
}

export default Home;
import React,{useEffect,useState} from 'react';
import Navigation from "../components/Navigation";
import {movieAction} from "../redux/actions/movieAction";
import {useDispatch} from "react-redux";

const Home = (props) => {
    const dispatch = useDispatch();

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
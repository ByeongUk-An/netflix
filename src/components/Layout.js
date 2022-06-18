import React,{useEffect} from 'react';
import {movieAction} from "../redux/actions/movieAction";
import {useDispatch, useSelector} from "react-redux";

const Layout = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(movieAction.getMovies());
    }, []);

    return props.children
}

export default Layout;
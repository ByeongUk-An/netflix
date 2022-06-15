import React, {useEffect, useState} from 'react';
import Navigation from "../components/Navigation";
import styled from "styled-components";
import {useSelector} from "react-redux";
import Sort from "../components/Sort"
import MovieItem from "../components/MovieItem";
import api from "../redux/api";

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
    const API_KEY = process.env.REACT_APP_API_KEY;
    const {popularMovies, topRatedMovies, upcomingMovies, loading} = useSelector(state => state.movie);
    const [url,setUrl] = useState('/movie/popular');
    const [list,setList] = useState();
    const [range,setRange] = useState(2022);

    useEffect(()=> {
        (async() => {
            const list = await api.get(`${url}?api_key=${API_KEY}&language=en-US&page=1`)
            const {data} = list;
            setList(data);
        })();
    },[url,range])

    const isRange = (item) => {
        const release = item.release_date.substr(0,4);
        if(range == release) {
            return true;
        }
    }

    return (
        <>
            <Navigation/>
            <Wrapper>
            <Sort setUrl={setUrl} setRange={setRange}/>
                <div className="right-movie">

                    {list?.results.filter(isRange).map((item,index) => {
                        return <MovieItem key={index} item={item}/>
                    })}
                </div>
            </Wrapper>
        </>
    )
}

export default Movies;
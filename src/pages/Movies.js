import React, {useEffect, useState} from 'react';
import Navigation from "../components/Navigation";
import styled, {css} from "styled-components";
import {useSelector} from "react-redux";
import Sort from "../components/Sort"
import MovieItem from "../components/MovieItem";
import api from "../redux/api";
import ClipLoader from "react-spinners/ClipLoader";

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
  @media only screen and (max-width: 1600px) {
    & .right-movie {
      justify-content: center;
    }
  }
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    & .right-movie {
      margin: 0 auto;
    }
  }
`;
const override = css`
  border-color: red;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Movies = (props) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const {popularMovies, topRatedMovies, upcomingMovies} = useSelector(state => state.movie);
    const [url, setUrl] = useState('/movie/popular');
    const [list, setList] = useState();
    const [range, setRange] = useState(2022);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // setLoading(true);
        (async () => {
            const list = await api.get(`${url}?api_key=${API_KEY}&language=en-US&page=1`)
            const {data} = list;
            setList(data);
            // setLoading(false);
        })();
    }, [url, range])

    const isRange = (item) => {
        const release = item.release_date.substr(0, 4);
        if (range == release) {
            return true;
        }
    }

    if (loading) {
        return <ClipLoader color={"#fff"} loading={loading} css={override} size={150}/>
    }

    return (
        <>
            <Navigation/>
            <Wrapper>
                <Sort setUrl={setUrl} setRange={setRange}/>
                <div className="right-movie">

                    {list?.results.filter(isRange).map((item, index) => {
                        return <MovieItem key={index} item={item}/>
                    })}
                </div>
            </Wrapper>
        </>
    )
}

export default Movies;
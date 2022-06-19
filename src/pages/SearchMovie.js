import React, {useEffect, useState} from "react";
import Navigation from "../components/Navigation";
import SearchItem from "../components/SearchItem";
import styled from "styled-components";
import {useParams} from "react-router-dom";
import api from "../redux/api";
import Pagination from "../components/Pagination";

const Wrapper = styled.ul`
  max-width: 1760px;
  margin: 30px auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const SearchMovie = (props) => {
    const [totalResults, setTotalResults] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [list, setList] = useState();
    const {searchname} = useParams();
    const API_KEY = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        (async () => {
            const list = await api.get(
                `/search/movie?api_key=${API_KEY}&language=en-US&query=${searchname}&page=1&include_adult=false`
            );
            const {data} = list;
            setList(data);
            setTotalResults(data.total_results);
        })();
    }, [searchname]);

    const nextPage = (pageNumber) => {
        (async () => {
            const list = await api.get(
                `/search/movie?api_key=${API_KEY}&language=en-US&query=${searchname}&include_adult=false&page=${pageNumber}`
            );
            const {data} = list;
            setList(data);
            setCurrentPage(pageNumber);
        })();
    };
    const numberPages = Math.floor(totalResults / 20);
    return (
        <>
            <Navigation/>
            <Wrapper>
                {list?.results.map((item, index) => {
                    return <SearchItem key={index} item={item}/>;
                })}
            </Wrapper>
            {totalResults > 20 ? (
                <Pagination
                    pages={numberPages}
                    nextPage={nextPage}
                    currentPage={currentPage}
                    totalResults={list?.total_pages ?? 1}
                />
            ) : (
                ""
            )}
        </>
    );
};

export default SearchMovie;

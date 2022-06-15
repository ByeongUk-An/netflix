import React, {useEffect,useState} from 'react';
import Navigation from "../components/Navigation";
import SearchItem from "../components/SearchItem";
import styled from 'styled-components';
import {useParams} from "react-router-dom";
import api from "../redux/api";

const Wrapper = styled.ul`
  max-width: 1760px;
  margin: 30px auto 0;
  display: flex;
  flex-wrap: wrap;
`;


const SearchMovie = (props) => {
    const {searchname} = useParams();
    const [list,setList] = useState();
    const API_KEY = process.env.REACT_APP_API_KEY;
    useEffect(()=> {
        (async ()=> {
            const list = await api.get(`/search/movie?api_key=${API_KEY}&language=en-US&query=${searchname}&page=1&include_adult=false`);
            const {data} = list;
            setList(data);
        })();
    },[searchname])

    return (
        <>
            <Navigation/>
            <Wrapper>
                {list?.results.map((item,index)=> {
                    return <SearchItem key={index} item={item}/>
                })}

            </Wrapper>
        </>
    )
}

export default SearchMovie;
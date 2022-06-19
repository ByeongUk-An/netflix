import React,{useEffect,useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";

import styled from "styled-components";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StarIcon from '@mui/icons-material/Star';


const RelatedListWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const RelatedList = styled.li`
  width: calc(100% / 4) ;
  padding: 1em;
  margin-bottom: 10px;
  & .item-link {
    cursor: pointer;
    color: #fff;
  }
  @media only screen and (max-width: 1024px) {
    width: calc(100% / 2);
  }
  @media only screen and (max-width: 600px) {
    width: calc(100% / 1);
  }
`;

const RelatedItem = styled.div`
  & div img {
    width: 100%;
    height: 200px;
    margin-bottom: 15px;
  }
  & p {
    margin-bottom: 10px;
  }
  & .calendar-wrap {
    display: flex;
    align-items: center;
    ;
  }
  & .calendar-wrap span {
    margin-left: 5px;
    margin-right: 15px;
  }
  
`

const RelatedMovie = ({related}) => {
    const {results} = related;
    const navigate = useNavigate();
    const location = useLocation();






    return (
        <>
            <RelatedListWrap>
                {results.map((item,index)=> {
                    return <RelatedList key={index}>
                        <div className="item-link">
                            <RelatedItem>
                                <div><a href={`/movies/${item.id}`}><img src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${item.backdrop_path}`} alt=""/></a></div>
                                <p>{item.original_title}</p>
                                <div className="calendar-wrap">
                                    <CalendarMonthIcon/>
                                    <span>{item.release_date}</span>
                                    <StarIcon/>
                                    <span>{item.vote_average.toFixed(1)}</span>
                                </div>
                            </RelatedItem>
                        </div>
                    </RelatedList>
                })}



            </RelatedListWrap>
        </>
    )
}

export default RelatedMovie;
import React from 'react';
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import StarIcon from "@mui/icons-material/Star";
import {useSelector} from "react-redux";

const Wrapper = styled.div`
  width: calc((100%/4 - 20px)) ;
  height: 500px;
  background-image: url(${props => props.img});
  padding: 1em;
  margin: 0 10px;
  margin-bottom: 20px;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  & h1 {
    font-size: 20px;
    font-weight: bold;
  }
  & div {
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
  }
  & div span {
    margin-left: 5px;
    margin-right: 10px;
  }
  & .overview {
    font-size: 16px;
    line-height: 1.2;
  }
`;
const Genre = styled.button`
  padding: 8px;
  background-color:red;
  color:white;
  font-size: 14px;
  margin-right: 10px;
`;


const MovieItem = ({item}) => {
    const navigate = useNavigate();
    const st = item.overview;
    let a = st.substring(0,70);
    const {genreList} = useSelector(state=>state.movie);

    return (
        <>
            <Wrapper img={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${item.poster_path}`} onClick={()=> navigate(`/movies/${item.id}`)} >
                <h1>{item.original_title}</h1>
                <div>
                    <CalendarMonthIcon/>
                    <span>{item.release_date}</span>
                    <StarIcon/>
                    <span>{item.vote_average.toFixed(1)}</span>
                </div>
                <div>
                    {item.genre_ids.map((id,index) => {
                        return <Genre key={index}>{genreList.find(item=>item.id == id).name}</Genre>
                    })}
                </div>
                <p className="overview">{a}...</p>
            </Wrapper>
        </>
    )
}

export default MovieItem;
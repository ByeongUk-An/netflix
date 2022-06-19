import React from 'react';
import styled from 'styled-components';
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const Wrapper = styled.li`
  //width: calc(100% / 3 - 20px);
  width: 30%;
  height: 760px;
  background-image: url(${props => props.img });
  margin-right: 30px;
  margin-bottom: 20px;
  padding: 1em;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  cursor: pointer;
  @media only screen and (max-width: 1524px) {
    width: 100%;
    padding: 1em;
    margin-right: 0;
  }


  &:nth-child(3n) {
    margin-right: 0;
  }

  & h1 {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  & .date-wrap {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  & .date-wrap span {
    display: inline-block;
    margin-right: 10px;
    margin-left: 5px;
    padding-top: 5px;
  }

  & .content {
    font-size: 20px;
    line-height: 1.4;
  }
`;
const Genre = styled.button`
  padding: 12px;
  background-color: red;
  color: white;
  font-size: 18px;
  border-radius: 6px;
  margin-right: 10px;
  margin-bottom: 15px;
`;

const SearchItem = ({item}) => {
    const {genreList} = useSelector(state => state.movie);
    const st = item.overview;
    const contentstr = st.substring(0, 300);
    const navigate = useNavigate();

    return (
        <>
            {item.poster_path ? <Wrapper img={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${item.poster_path}`}
                                         onClick={() => navigate(`/movies/${item.id}`)}>
                <h1>{item.original_title}</h1>
                <div className="date-wrap">
                    <CalendarMonthIcon/>
                    <span>{item.release_date}</span>
                    <StarIcon/>
                    <span>{item.vote_average}</span>
                </div>
                {item.genre_ids.map((id, index) => {
                    return <Genre key={index}>{genreList.find(item => item.id == id)?.name}</Genre>
                })}
                <p className="content">{contentstr}...</p>
            </Wrapper> : <Wrapper img={`https://netflix-youngram.netlify.app/img/noImage.png`}
                                  onClick={() => navigate(`/movies/${item.id}`)}>
                <h1>{item.original_title}</h1>
                <div className="date-wrap">
                    <CalendarMonthIcon/>
                    <span>{item.release_date}</span>
                    <StarIcon/>
                    <span>{item.vote_average}</span>
                </div>
                {item.genre_ids.map((id, index) => {
                    return <Genre key={index}>{genreList.find(item => item.id == id)?.name}</Genre>
                })}
                <p className="content">{contentstr}...</p>
            </Wrapper> }



        </>
    )
}

export default SearchItem;
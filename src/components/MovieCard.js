import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import StarIcon from '@mui/icons-material/Star';
import {useNavigate} from "react-router-dom";

const Card = styled.div`
  background-image: url(${props => props.img});
  width: 300px;
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  &:hover {
    //transform: scale(2);
  }
  &:hover .over-wrap {
    opacity: 1;
    background: rgba(43,41,41,0.9);
    width: 100%;
    height: 100%;
    padding:20px;
  }
  
`;

const Genre = styled.button`
  height:20px;
  background-color:red;
  color:white;
  font-size: 14px;
  border-radius: 6px;
  padding:3px;
  margin-right: 10px;
  margin-bottom: 15px;
`;

const OverWrap = styled.div`
  opacity: 0;
  & h1 {
    font-size: 20px;
    margin-bottom: 15px;
  }
  & .info-wrap {
    display: flex;
    align-items: center;
  }
  
  & .star {
    color: yellow;
    margin-right: 3px;
  }
  
  & .average {
    font-weight: bold;
    margin-right: 10px;
  }
  & .adult {
    color: ${(props)=> props.color ? "#00FFAB" : "red"};
    font-weight: bold;
  }
`;


const MovieCard = ({item}) => {
    const {genreList} = useSelector(state=>state.movie)
    const navigate = useNavigate();

    return (
        <div onClick={()=> navigate(`/movies/${item.id}`)}>
            {item && <Card img={`https://image.tmdb.org/t/p/w355_and_h200_face${item.poster_path}`}>
                <OverWrap className="over-wrap">
                    <h1>{item.title}</h1>

                    <div>
                        {item.genre_ids.map((id,index) => {

                            return <Genre key={index}>{genreList.find(item=>item.id == id).name}</Genre>
                        })}
                    </div>
                    <div className="info-wrap">
                        <StarIcon className="star"/>
                        <span className="average">{item.vote_average}</span>
                        <span className="adult" color={item.adult.toString()}>{item.adult ? "청소년 관람 가능" : "청소년 관람 불가"}</span>
                    </div>
                </OverWrap>
            </Card>}
        </div>
    )
}

export default MovieCard;
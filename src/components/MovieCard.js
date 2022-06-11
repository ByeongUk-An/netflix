import React from 'react';
import styled from "styled-components";

const Card = styled.div`
  background-image: url(${props => props.img});
  width: 300px;
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  &:hover {
    //transform: scale(2);
  }
  &:hover .over-wrap {
    opacity: 1;
    background: rgba(43,41,41,0.9);
    width: 100%;
    height: 100%;
  }
  
`;

const Genre = styled.button`
  height:20px;
  background-color:red;
  color:white;
  font-size: 14px;
  border-radius: 6px;
  padding:3px;
`;

const OverWrap = styled.div`
  opacity: 0;
`;


const MovieCard = ({item}) => {

    return (
        <div>
            {item && <Card img={`https://image.tmdb.org/t/p/w355_and_h200_face${item.poster_path}`}>
                <OverWrap className="over-wrap">
                    <h1>{item.title}</h1>

                    <div>
                        {item.genre_ids.map((id,index) => {
                            return <Genre key={index}>{id}</Genre>
                        })}
                    </div>
                    <div>

                        <span>{item.vote_average}</span>
                        <span>{item.adult ? "청불" : "청소년관람가능"}</span>
                    </div>
                </OverWrap>
            </Card>}
        </div>
    )
}

export default MovieCard;
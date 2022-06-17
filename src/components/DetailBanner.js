import React from 'react';
import styled from "styled-components";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const BgWrap = styled.div`
  background-image: url(${props => props.img});
  width: 100%;
  height: 700px;
  background-repeat: no-repeat;
  //background-size: cover;
  position: relative;
  display: flex;
  align-items: flex-end;
  z-index: -2;
  //margin-bottom: 160px;

  &:before {
    content: "";
    //background:linear-gradient(to top , #1E2428, transparent);
    background: linear-gradient(to bottom, black, transparent);
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
  }

  &:after {
    content: "";
    background: linear-gradient(to top, #1E2428, transparent);
    //background:linear-gradient(to bottom , black, transparent);
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
  }

  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    z-index: 1;
  }

  & div h1 {
    font-size: 70px;
    font-weight: bold;
    margin-bottom: 30px;
  }

  & div p {
    line-height: 2;
    font-size: 18px;
    width: 70%;
    text-align: center;
  }

  & .movie-info {
    margin-top: 30px;
    display: flex;
    flex-direction: row;
  }

  & .movie-info span {
    margin-right: 15px;
    margin-left: 5px;
  }
  @media only screen and (max-width: 768px) {
    height: 500px;
    & div {
      width: 100%;
      margin: 0;
      padding: 0 20px;
      //justify-content: flex-start;
      //align-items: center;
      justify-content: center;
    }
    & div h1 {
      font-size: 30px;
      text-align: center;
      line-height: 1.4;
    }
    & div p {
      width: 100%;
    }
  }
  
`;

const DetailBanner = ({movie}) => {
    const {data} = movie;

    return (
        <>
            <BgWrap img={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${data.poster_path}`}>
                <div>
                    <h1>{data.title}</h1>
                    <p>{data.overview}</p>
                    <div className="movie-info">
                        <CalendarMonthIcon/>
                        <span>{data.release_date}</span>
                        <StarIcon/>
                        <span>{data.vote_average}</span>
                        <AccessTimeFilledIcon/>
                        <span>{data.runtime} minute</span>
                    </div>

                </div>

            </BgWrap>
        </>
    )
}

export default DetailBanner;
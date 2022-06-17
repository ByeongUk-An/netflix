import React from 'react';
import styled from 'styled-components';

const BgWrap = styled.div`
  background-image: url(${props => props.img});
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  z-index: -2;
  margin-bottom: 30px;
  
  &:before {
    content: "";
    //background:linear-gradient(to top , #1E2428, transparent);
    background:linear-gradient(to bottom , black, transparent);
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
  }
  &:after {
    content: "";
    background:linear-gradient(to top , #1E2428, transparent);
    //background:linear-gradient(to bottom , black, transparent);
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
  }
  
  & div {
    width: 40%;
    margin-left: 100px;
  }
  & div h1 {
    font-size: 60px;
    font-weight: bold;
    margin-bottom: 30px;
    line-height: 1.2;
  }
  & div p {
    line-height: 2;
    font-size: 18px;
  }

  @media only screen and (max-width: 768px) {
    & div {
      width: 100%;
      margin: 0;
      padding: 0 20px;
    }
    & div h1 {
      font-size: 40px;
      
      line-height: 1.4;
    }
  }
  
`;

const Banner = ({movie}) => {

    return (
        <>
            <BgWrap img={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.poster_path}`}>
                <div>
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                </div>
            </BgWrap>
        </>
    )
}

export default Banner;
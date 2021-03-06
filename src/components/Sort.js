import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


const Wrapper = styled.div`
  width: 400px;
  margin-right: 30px;
  @media only screen and (max-width: 1024px) {
    width: 100%;
    margin-right: 0;
    padding: 1em;
  }
`;

const Container = styled.div`
  padding: 1.5em;
  border: 1px solid #fff;
  border-radius: 10px;
  margin-bottom: 25px;

  & h2 {
    font-size: 20px;
    margin-bottom: 20px;
  }

  & select {
    padding: 15px;
    width: 100%;
    border-radius: 10px;
    font-size: 16px;

    & option {
      font-size: 20px;

    }
  }
`;

const Container2 = styled.div`
  padding: 1.5em;
  border: 1px solid #fff;
  border-radius: 10px;
  margin-bottom: 25px;

  & h2 {
    font-size: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid darkgray;
    padding: 0 0 15px 0;
  }
  & h3 {
    margin-bottom: 10px;
  }


`;

const PrettoSlider = styled(Slider)({
    color: 'red',
    height: 8,

    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid #fff',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&:before': {
            display: 'none',
        },
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: 'tomato',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
            transform: 'rotate(45deg)',
        },
    },
});


const Sort = ({setUrl,setRange}) => {

    const url = [
        {url : `/movie/popular`,name : `Popular Movie`},
        {url : `/movie/top_rated`,name: `Top Rated Movie`},
        {url : `/movie/upcoming`, name: `Upcoming Movie`},
    ]



    return (
        <Wrapper>
            <Container>
                <h2>Sort</h2>
                <select name='fruits' onChange={(e)=>setUrl(e.target.value)}>
                    {url.map((type,index) => {
                        return <option key={index} value={type.url}>{type.name}</option>
                    })}
                </select>
            </Container>
            <Container2>
                <h2>Filter</h2>

                <Box >
                        <h3>?????????</h3>
                    <PrettoSlider
                        defaultValue={2022} min={1920} max={2022} aria-label="Default" valueLabelDisplay="auto" onChange={(e)=> setRange(e.target.value)}/>
                </Box>
            </Container2>
        </Wrapper>
    )
}

export default Sort;
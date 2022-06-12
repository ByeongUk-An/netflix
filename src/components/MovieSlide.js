import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from "./MovieCard";
import "./styles/movieSlide.css"

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {max: 4000, min: 3000},
        items: 6
    },
    desktop: {
        breakpoint: {max: 3000, min: 1200},
        items: 5
    },
    tablet: {
        breakpoint: {max: 1200, min: 1000},
        items: 3
    },
    mobile: {
        breakpoint: {max: 1000, min: 0},
        items: 1
    }
};

const MovieSlide = ({movies}) => {

    return (
        <>
            <Carousel responsive={responsive}>

                {movies.results.map((item,index)=> {
                        return <MovieCard item={item} key={index}/>
                })}
            </Carousel>
        </>
    )
}

export default MovieSlide;
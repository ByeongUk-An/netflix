import React, {useEffect, useState} from 'react';
import Navigation from "../components/Navigation";
import {useNavigate, useParams} from "react-router-dom";
import styled from "styled-components";
import {useSelector} from "react-redux";
import api from "../redux/api";
import DetailBanner from "../components/DetailBanner";
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import YouTube from 'react-youtube';
import RelatedMovie from "../components/RelatedMovie";
import Review from "../components/Reviews";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 24,

};
const opts = {
    height: '690',
    width: '1040',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
    }
}
//  _onReady(event) {
//     // access to player in all event handlers via event.target
//     event.target.pauseVideo();
// }

const RiviewWrap = styled.div`
  display: flex;
  justify-content: center;


  & button {
    padding: 10px 20px;
    width: 200px;
    height: 50px;
    background-color: transparent;
    border: 1px solid #fff;
    border-radius: 8px;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    margin-top: 30px;
    cursor: pointer;
    margin-bottom: 50px;
  }

  & button:hover {
    border-color: red;
    background-color: red;
    transition: 0.8s;
  }
`;

const ReviewWrap = styled.div`
  margin-left: 30px;
  margin-bottom: 50px;
  & button {
    padding: 1em;
  }

  & button:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }

  & .review {
    background-color: red;
    color: #fff;
    margin-right: 20px;
  }

  & .related {
    color: red;
  }
`;
const ReviewContainer = styled.div`
  max-width: 1400px;
  height: 1000px;
  margin: 80px auto;
`;
const ReviewBoarder = styled.div`
  border: 2px solid #fff;
  padding: 60px 30px;
`;


const MovieDetail = (props) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const navigate = useNavigate();
    const {id} = useParams();
    const [data, setData] = useState();
    const [video, setVideo] = useState();
    const [review, setReview] = useState(true);
    const [reviewData,setReviewData] = useState();
    const [related,setReLated] = useState();
    // const {popularMovies, topRatedMovies, upcomingMovies} = useSelector(state => state.movie);  추후확인
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const detailMovie = async () => {
        const result = await api.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
        return result;
    }
    const videoMovie = async () => {
        const result = await api.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`);
        return result;
    }
    const reviewMovie = async () => {
        const result = await api.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
        return result;
    }
    const relatedMovie = async () => {
        const result = await api.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`);
        return result
    }


    useEffect(() => {
        detailMovie().then((res) => {
            setData(res);
        })
        videoMovie().then((res) => {
            setVideo(res);
        })
        reviewMovie().then((res)=> {
            setReviewData(res.data);
        })
        relatedMovie().then((res)=> {
            setReLated(res.data);
        })
    }, []);


    return (
        <>
            <Navigation/>
            {data && <DetailBanner movie={data}/>}
            {video && <RiviewWrap>
                <button type="button" onClick={handleOpen}>Trailer View</button>
            </RiviewWrap>}

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {video && <YouTube videoId={video.data.results[0].key} opts={opts}/>}
                </Box>
            </Modal>
            <ReviewContainer>
                <ReviewWrap>
                    {reviewData && <button className="review" type="button" onClick={() => setReview(true)}>REVIEWS ({reviewData.results.length})</button>}
                    <button className="related" type="button" onClick={() => setReview(false)}>RELATED MOVIES</button>
                </ReviewWrap>
                <ReviewBoarder>
                    {review ? (reviewData && <Review review={reviewData}/>) : (related && <RelatedMovie related={related}/>)}
                </ReviewBoarder>
            </ReviewContainer>
        </>
    )
}

export default MovieDetail;
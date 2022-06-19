import React from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import styled from "styled-components";


const ReviewList = styled.li`
  margin-bottom: 30px;
`;
const NoReview = styled.li`
  text-align: center;
`;


const UserWrap = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-bottom: 15px;
  & span {
    margin-left: 10px;
  }
`;
const ReviewContent = styled.div`
  line-height: 1.6;
  & div {
    text-align: right;
  }
  & p {
    overflow: hidden;
  }
`;

const Reviews = ({review}) => {
    const {results} = review;

    return (
        <>
            <ul>
                {results.length > 0 ? results.map((item,index)=> {
                        return  <ReviewList key={index}>
                            <UserWrap>
                                <AccountCircleOutlinedIcon/>
                                <span>{item.author}</span>
                            </UserWrap>
                            <ReviewContent>
                                <p>{item.content}</p>
                                <div>{item.updated_at}</div>
                            </ReviewContent>
                        </ReviewList>
                    }) :  <NoReview>There is no review of the movie at the momentarily.</NoReview>}
                


            </ul>
        </>
    )
}

export default Reviews;
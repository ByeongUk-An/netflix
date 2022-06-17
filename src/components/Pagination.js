import React,{useState,useEffect} from 'react';
import styled from 'styled-components';

const PageWrap = styled.ul`
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
`;
const PageItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
    width: 40px;
  height: 40px;
  background-color: red;
  border-radius: 10px;
  margin-right: 10px;
  &:hover {
    transform: scale(1.1);
  }
  & a {
    text-decoration: none;
    color: white;
  }
  
  &.active {
    background-color: #fff;
  }
  &.active a {
    color: black;
  }
`;

const Pagination = ({pages,nextPage,currentPage }) => {
    const pageLinkes = [];

    for(let i = 1; i<= pages + 1; i++) {
        let active = currentPage == i ? "active" : "";

        pageLinkes.push(<PageItem className={`waves-effect ${active}`} key={i} onClick={()=> nextPage(i)}><a href="#">{i}</a> </PageItem>)
    }


    return (
        <>
            <PageWrap>
                {currentPage > 1 ?<PageItem className={`waves-effect`}  onClick={()=> nextPage(currentPage - 1)}><a href="#">Prev</a> </PageItem> : ''}
                {pageLinkes}
                {currentPage < pages + 1 ?<PageItem className={`waves-effect`}  onClick={()=> nextPage(currentPage + 1)}><a href="#">Next</a> </PageItem> : ''}
            </PageWrap>
        </>
    )
}

export default Pagination;
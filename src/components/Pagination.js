import React, { useState, useEffect } from "react";
import styled from "styled-components";

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

const Pagination = ({ pages, nextPage, currentPage, totalResults }) => {
  const [pageLinks, SetPageLinks] = useState([]);

  useEffect(() => {
    const page = Math.floor((currentPage - 1) / 10);

    const newPages = Array(10)
      .fill()
      .map((v, i) => i + 1 + page * 10);
    SetPageLinks(newPages);
  }, [currentPage]);

  return (
    <>
      <PageWrap>
        {currentPage > 1 ? (
          <PageItem
            className={`waves-effect`}
            onClick={() => nextPage(currentPage - 1)}
          >
            <a href="#">Prev</a>{" "}
          </PageItem>
        ) : (
          ""
        )}

        {pageLinks.map((page, index) => {
          let active = currentPage == page ? "active" : "";
          if (page > totalResults) return;
          return (
            <PageItem
              className={`waves-effect ${active}`}
              key={index}
              onClick={() => nextPage(page)}
            >
              <a href="#">{page}</a>{" "}
            </PageItem>
          );
        })}
        {currentPage < pages + 1 ? (
          <PageItem
            className={`waves-effect`}
            onClick={() => nextPage(currentPage + 1)}
          >
            <a href="#">Next</a>{" "}
          </PageItem>
        ) : (
          ""
        )}
      </PageWrap>
    </>
  );
};

export default Pagination;

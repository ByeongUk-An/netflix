import React, {useState} from 'react';
import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';


const Wrapper = styled.div`
  width: 100%;
  height: 120px;
  background-color: #000;
  @media only screen and (max-width: 768px) {
    height: 150px;
  }

`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1800px;
  height: 120px;
  color: #fff;
  display: flex;

  @media only screen and (max-width: 768px) {
  flex-direction: column;
    height: 150px;
  }

`;

const LeftNav = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  & h1 {
    cursor: pointer;
  }

  & .logo {
    width: 180px;
  }
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }

  

`;

const RightNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;

  & .nav-list {
    font-size: 20px;
    color: #918F95;
    text-decoration: none;
    font-weight: bold;
  }

  & .nav-list:hover {
    color: red;
  }

  & ul {
    display: flex;
  }

  & ul li {
    margin-right: 14px;
  }

  & form {
    //height:37px;
    display: flex;
    margin-right: 30px;
  }

  & input {
    padding: 8px;
    border-radius: 5px;
    margin-right: 10px;
    height: 31px;
    line-height: 31px;
    background: transparent;
    border: 1px solid darkgray;
    color: #fff;
  }

  & button {
    width: 31px;
    border-radius: 5px;
    background-color: #000;
    border: 1px solid #8F4A51;
    color: #8F4A51;
    height: 31px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & button:hover {
    border: 1px solid #F40B11;
  }

  & .search-icon {
    font-size: 20px;
  }

  & button:hover .search-icon {
    color: #F40B11;
  }
  @media only screen and (max-width: 768px) {
    width: 360px;
    margin: 0 auto;
    & .nav-list {
      font-size: 16px;
    }
  }
`;


const Navigation = (props) => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const submitform = () => {
        navigate(`/searchmovie/${search}`);
    }

    return (
        <>
            <Wrapper>
                <Container>
                    <LeftNav>
                        <h1 onClick={() => navigate("/")}>
                            <img className="logo"
                                 src="data:image/jpeg;base64,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"
                                 alt="Netflix Logo"/>
                        </h1>

                    </LeftNav>
                    <RightNav>
                        <ul>
                            <li><Link to="/" className="nav-list">Home</Link></li>
                            <li><Link to="/movies" className="nav-list">Movies</Link></li>
                        </ul>
                        <form onSubmit={submitform}>
                            <input type="text" placeholder="Search" value={search}
                                   onChange={(e) => setSearch(e.target.value)}/>
                            <button type="submit"><SearchIcon className="search-icon"/></button>
                        </form>
                    </RightNav>
                </Container>
            </Wrapper>
        </>
    )
}

export default Navigation;
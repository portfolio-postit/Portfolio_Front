import styled from "styled-components";
import { Route, Link } from "react-router-dom";

export const Box = styled.div`
  height: 7%;
  width: 100%;
  background: #1a0c0c;
  display: flex;
  /* text-align: center; */
  @media only screen and (max-width: 768px) {
    height: 80px;
    display: inline;
  }
`;
export const CustomLink = styled(Link)`
  margin-bottom: 1px;
  background-color: #1a0c0c;
  display: flex;
  margin-top: 1.1rem;
  text-decoration: none;
  margin-left: 3rem;
  color: white;
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 1rem;
  &:hover {
    color: #b6b6b6;
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    height: 20px;
    margin-top: 1.5px;
    margin-left: 0;
    outline: none;
    border: none;
    padding-left: 46%;
    padding-bottom: unset;
    padding-top: 1%;
  }
  &:nth-child(3) {
    @media only screen and (max-width: 768px) {
      padding-left: 45.5%;
    }
  }
  &:nth-child(4) {
    @media only screen and (max-width: 768px) {
      padding-left: 46.5%;
    }
  }
  &:nth-child(5) {
    @media only screen and (max-width: 768px) {
      padding-left: 44.7%;
    }
  }
`;

export const Title = styled.div`
  margin-left: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-style: italic;
  background: #1a0c0c;
  @media only screen and (max-width: 768px) {
    font-size: 3.5vw;
    width: 100%;
    height: 50px;
    margin-left: 0;
    padding: unset;
  }
`;

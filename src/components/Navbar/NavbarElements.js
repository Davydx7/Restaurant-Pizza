import styled from "styled-components";
import { NavLink as Link } from "react-router-dom" 
import { FaPizzaSlice } from "react-icons/fa"

export const Nav = styled.nav`
  background: red;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`

export const NavLink = styled(Link)`
  font-size: 2rem;
  /* cursor: pointer; */
  text-decoration: none;
  /* text-align: center; */
  display: flex;
  align-items: center;
  color: #fff;

  /* @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  } */
`

export const NavIcon = styled.div`
  position: absolute;
  width: 6rem;
  margin: 12px 24px;
  /* display:block; */
  /* top: 0; */
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: #fff;

  p {
    /* transform: translate(-175%, 100%); */
    /* font-weight: bold; */
  }
`

export const Pizza = styled(FaPizzaSlice)`
  /* transform: translate(-50%, -15%); */
  font-size: 2rem;
`
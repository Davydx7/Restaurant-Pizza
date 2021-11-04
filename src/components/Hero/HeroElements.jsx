import styled from "styled-components";
import ImgBg from "../../images/pizza-3.jpg"

export const HeroContainer = styled.div`
    background:  linear-gradient(to right, rgba(0,0,0,0.7) , rgba(0,0,0,0.1)), url(${ImgBg});
    min-height: 100vh;
    background-size: cover;
    background-position:center;
`

export const HeroContent = styled.div`
    height: calc(100vh - 80px);
    /* max-height: 100%; */
    /* width: auto; */
    margin: 0 5vw;
    padding: 0 calc((100vw - 1300px) / 2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: #fff;
    text-transform: uppercase;
    line-height: 1;
    font-weight: bold;
`

export const HeroH1 = styled.h1`
  font-size: clamp(3.25rem, 7.5vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
  `

export const HeroP = styled.p`
  font-size: clamp(1.5rem, 3vw, 2rem);
  margin-bottom: 2rem;
`

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`
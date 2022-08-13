import styled from "styled-components";

export const Main = styled.main`
    display:flex;
    flex-direction: column;
    align-items: center;
`

export const Tittle = styled.h1`
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    font-size: 33px;
    color: #FFFFFF;
    margin: 30px 0px 30px 25px;
`

export const TittleBox = styled.section`
    @media(min-width:600px){
        width:63%;
        display:flex;
        justify-content: flex-start;
    }
`

export const LoadingBox = styled.div`
    width: 50px;
    height: 50px;
    margin-top:15vh;
`

import styled from "styled-components";

export const Container = styled.main`
    @media(min-width:600px){
        display:flex;
        flex-direction: column;
        align-items: center;
    }
`

export const Text = styled.h1`
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    font-size: 33px;
    color: #FFFFFF;
    margin: 30px 0px 30px 25px;
`

export const TextBox = styled.div`
    @media(min-width:600px){
        display:flex;
        justify-content: flex-end;
    }
`


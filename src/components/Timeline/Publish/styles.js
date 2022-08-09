import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    background-color: white;
    display:flex;
    justify-content: center;
    
    @media(max-width: 450px){

    }
`

export const Tittle = styled.h1`
    color: #707070;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    font-size: 17px;
`

export const UrlInput = styled.input`
    width: 100%;
    background-color: #EFEFEF;
    border-radius: 5px;
    margin-bottom:5px;
    background-color: #EFEFEF;
    border: 1px solid #EFEFEF;
    border-radius: 5px;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    font-size: 13px;
    color: #949494;
    padding: 6px 0px 8px 0px;
`

export const TextInput = styled.input`
    width: 100%;
    background-color: #EFEFEF;
    border-radius: 5px;
    margin-bottom:6px;
    background-color: #EFEFEF;
    border: 1px solid #EFEFEF;
    border-radius: 5px;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    font-size: 13px;
    color: #949494;
    padding: 10px 0px 21px 0px;
`

export const Button = styled.button`
    width: 122px;
    height: 22px;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: #1877F2;
    border: 1px solid #1877F2;
    border-radius: 5px;

    p{
        font-family: 'Lato', sans-serif;
        font-weight: 700;
        font-size: 13px;
        color: #FFFFFF;
    }
`

export const FormBox = styled.div`
    width: 100%;
`

export const ButtonBox = styled.div`
    display:flex;
    justify-content: flex-end;
`

export const Container = styled.div`
    width: 90%;
`

export const TittleBox = styled.div`
    display: flex;
    justify-content: center;
`
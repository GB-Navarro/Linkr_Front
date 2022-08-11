import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    background-color: white;
    display:flex;
    justify-content: center;
    margin-bottom: 20px;

    @media(min-width: 600px){
        width: 60%;
        border-radius:16px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`

export const Tittle = styled.h1`
    color: #707070;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    font-size: 17px;
`

export const TittleBox = styled.div`
    display: flex;
    justify-content: center;

    @media(min-width: 600px){
        justify-content: flex-start;
    }
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
    padding: 6px 0px 8px 5px;
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
    padding: 10px 0px 21px 5px;
`

export const Button = styled.input`
    width: 122px;
    height: 22px;
    background-color: #1877F2;
    border: 1px solid #1877F2;
    border-radius: 5px;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 13px;
    color: #FFFFFF;
`


export const ButtonBox = styled.div`
    margin-left: 5px;
    display:flex;
    justify-content: flex-end;
    margin-bottom:15px;
    margin-left: 5px;  
`

export const FormBox = styled.form`
    width: 100%;
`

export const MobileContainer = styled.div`
    width: 100%;
`

export const Image = styled.img`
    display:none;
    @media(min-width: 600px){
        display:inline;
        width: 40px;
        height: 40px;
        border-radius: 26.5px;
    }
`

export const ImageBox = styled.aside`
    display:none;
    @media(min-width: 600px){
        display:block;
        margin:10px 14px 0px 8px;
    }
`

export const DesktopContainer = styled.div`
    width: 95%;
    @media(min-width:600px){
        display:flex;
        justify-content: center;
    }
`



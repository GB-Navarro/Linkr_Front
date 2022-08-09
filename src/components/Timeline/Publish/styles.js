import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    background-color: white;
    display:flex;
    justify-content: center;
    margin-bottom: 20px;

    @media(min-width: 600px){
        width: 40%;
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

export const ButtonBox = styled.div`
    display:flex;
    justify-content: flex-end;
    margin-bottom:15px;
`

export const FormBox = styled.div`
    width: 100%;
`

export const MobileContainer = styled.div`
    width: 100%;
    
    @media(min-width: 600px){
        width: 75%;
    }
`

export const Image = styled.img`
    display:none;
    @media(min-width: 600px){
        display:inline;
        width: 50px;
        height: 50px;
        border-radius: 26.5px;
    }
`

export const ImageBox = styled.div`
    display:none;
    @media(min-width: 600px){
        display:block;
        width: 50px;
        height: 50px;
        padding-top:6px;
        margin:0px 15px 0px 5px;
    }
`

export const DesktopContainer = styled.div`
    width: 95%;
    @media(min-width:600px){
        display:flex;
        justify-content: center;
        margin: 10px 10px 10px 10px;
    }
`


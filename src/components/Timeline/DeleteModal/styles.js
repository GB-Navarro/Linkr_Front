import styled from "styled-components";

export const DeleteText = styled.h1`
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 34px;
    color: #FFFFFF;
    margin:0;
`
export const Button = styled.button`
    width: 134px;
    height: 37px;
    border-radius: 5px;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 13px;
    background-color: #1877F2;
    border: 1px solid #1877F2;
    color: #FFFFFF;

    :first-child{
        background-color: #FFFFFF;
        border: 1px solid #FFFFFF;
        color: #1877F2;
        margin-right: 25px;
    }
`
export const ButtonBox = styled.div`
    display:flex;
    justify-content: center;
    margin-top:50px;
`
export const DeleteTextBox = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top:25px;
`
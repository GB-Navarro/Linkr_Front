import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: #151515;
    display:flex;
    justify-content: space-between;
`

export const Logo = styled.h1`
    font-family: 'Passion One', cursive;
    font-size:45px;
    color: #FFFFFF;
    padding: 5px 0px 5px 0px;
    margin-left: 25px;

`

export const Box = styled.section`
    display:flex;
    justify-content: center;
    align-items: center;
    margin-right: 25px;
    color: white;
    font-size: 25px;
`

export const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 26.5px;
    margin-left: 15px;
`

export const LogoutBox = styled.section`
    display:${props => props.display};
    justify-content: flex-end;
`

export const Logout = styled.div`
    width: 150px;
    height: 50px;
    background-color: #151515;
    border-radius: 0px 0px 0px 20px;
    display:flex;
    justify-content: center;
    align-items: center;
`

export const Text = styled.h1`
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: #FFFFFF;
`
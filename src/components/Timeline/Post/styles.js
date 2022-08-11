import styled from "styled-components";

export const Section = styled.section`
    background-color: #171717;
    font-family: 'Lato', sans-serif;
    display:flex;
    justify-content: center;
    margin-bottom: 20px;

    @media(min-width: 600px){
        width: 60%;
        border-radius: 16px;
    }
`

export const Container = styled.div`
    width: 95%;
    display:flex;
    justify-content: center;
`
export const Name = styled.h1`
    color: #FFFFFF;
    font-size: 17px;
    font-weight: 400;
`

export const Description = styled.h2`
    color: #B7B7B7;
    font-size: 15px;
    font-weight: 400;
`

export const Hashtags = styled.p`
    font-size: 15px;
    font-weight: 400;
    display:inline;
    color: #FFFFFF;
`

export const LinkContainer = styled.div`
    border: 1px solid #FFFFFF;
    border-radius: 11px;
    display:flex;
    margin-bottom: 20px;
`

export const LinkBox = styled.div`
    padding-left:6px;
`

export const LinkTittle = styled.h1`
    font-size: 11px;
    font-weight: 400;
    color: #CECECE;
`

export const LinkDescription = styled.p`
    font-size: 9px;
    font-weight: 400;
    color: #9B9595;

`

export const Link = styled.a`
    font-size: 9px;
    font-weight: 400;
    color: #CECECE;
`

export const LinkImage = styled.img`
    width:35%;
    border-radius: 0px 12px 13px 0px;
`

export const PostContainer = styled.article``

export const Aside = styled.aside``

export const ProfileImageBox = styled.div`
    margin:10px 14px 0px 0px;
    @media(min-width:600px){
        margin:10px 14px 0px 8px;
    }
`

export const ProfileImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 26.5px;
`

export const LikesBox = styled.div`
    margin-top:17px;
    color: #FFFFFF;
    display:flex;
    flex-direction: column;
    align-items: center;
    padding-right: 8px;
    font-size: 25px;
    color: ${props => props.postWasLiked === true ? "#A83F39" : "#FFFFFF"};
`

export const LikesCount = styled.p`
    font-size: 12px;
    font-weight: 400;
    color: #FFFFFF;
`

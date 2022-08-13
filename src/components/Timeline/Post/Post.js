import { IonIcon } from "react-ion-icon";
import { Section, Container,Name, Description, Hashtags, LinkContainer, LinkBox, LinkTittle, LinkDescription, Link, LinkImage, PostContainer, Aside, ProfileImageBox, ProfileImage, LikesBox, LikesCount } from "./styles.js";
import descriptionImage from "./../../../assets/images/descriptionImage.png"
import profile from "./../../../assets/images/profile.jpg"
import { useState } from "react";
import axios from "axios";

export default function Post(){
    const [postWasLiked, setPostWasLiked] = useState(false);

    return(
        <>
            <Section>
                <Container>
                    <Aside>
                        <ProfileImageBox>
                            <ProfileImage src={profile} />
                        </ProfileImageBox>
                        <LikesBox postWasLiked={postWasLiked}>
                            {
                                postWasLiked ?
                                <>
                                    <IonIcon name="heart" onClick={() => {
                                        setLikeStatus();
                                    }}/>
                                    <LikesCount>14  likes</LikesCount>
                                </>
                                :
                                <>
                                    <IonIcon name="heart-outline" onClick={() => {
                                        setLikeStatus();
                                    }}/>
                                    <LikesCount>14 likes</LikesCount>
                                </>
                            }
                            
                        </LikesBox>
                    </Aside>
                    <PostContainer>
                        <Name>Rick Sanchez</Name>
                        <Description>
                            Muito maneiro esse tutorial de Material UI
                            com React, deem uma olhada! 
                                <Hashtags> #react #material</Hashtags>
                        </Description>
                        <LinkContainer>
                            <LinkBox>
                                <LinkTittle>Como aplicar o Material UI em um projeto React</LinkTittle>
                                <LinkDescription>Hey! I have moved this tutorial to my personal blog. Same content, new location. Sorry about making you click through to another page.</LinkDescription>
                                <Link>https://medium.com/@pshrmn/a-simple-react-router</Link>
                            </LinkBox>
                            <LinkImage src={descriptionImage}/>
                        </LinkContainer>
                    </PostContainer>
                </Container>           
            </Section>
        </>
    )

    async function setLikeStatus(){
        const token = "5e23c49f-fd86-4921-a338-dc90a235b05b";
        const config = {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
        const data = {
            postId:8,
            userId:1
        }
        if(postWasLiked){
            try{
                const promisse = await axios.post("http://localhost:5000/removelike", data, config);
                setPostWasLiked(false);
            }catch(error){
                console.log(error);
            }
        }else{
            try{
                const promisse = await axios.post("http://localhost:5000/addlike", data, config);
                setPostWasLiked(true);
            }catch(error){
                console.log(error);
            }
        }
    }
}
import { IonIcon } from "react-ion-icon";
import { Section, Container,Name, Description, Hashtags, LinkContainer, LinkBox, LinkTittle, LinkDescription, Link, LinkImage, PostContainer, Aside, ProfileImageBox, ProfileImage, LikesBox, LikesCount } from "./styles.js";
import descriptionImage from "./../../../assets/images/descriptionImage.png"
import profile from "./../../../assets/images/profile.jpg"
import { useState } from "react";

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

    function setLikeStatus(){
        if(postWasLiked){
            setPostWasLiked(false);
        }else{
            setPostWasLiked(true);
        }
    }
}
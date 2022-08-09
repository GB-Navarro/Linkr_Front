import { IonIcon } from "react-ion-icon";
import { Main, Container,Name, Description, Hashtags, LinkContainer, LinkBox, LinkTittle, LinkDescription, Link, LinkImage, PostContainer, Aside, ProfileImageBox, ProfileImage, LikesBox, LikesCount } from "./styles.js";
import descriptionImage from "./../../../assets/images/descriptionImage.png"
import profile from "./../../../assets/images/profile.jpg"

export default function Post(){
    return(
        <>
            <Main>
                <Container>
                    <Aside>
                        <ProfileImageBox>
                            <ProfileImage src={profile} />
                        </ProfileImageBox>
                        <LikesBox>
                            <IonIcon name="heart-outline"/>
                            <LikesCount>13 likes</LikesCount>
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
            </Main>
        </>
    )
}
import { IonIcon } from "react-ion-icon";
import { Section, Container,Name, Description, Hashtags, LinkContainer, LinkBox, LinkTittle, LinkDescription, Link, LinkImage, PostContainer, Aside, ProfileImageBox, ProfileImage, LikesBox, LikesCount } from "./styles.js";
import descriptionImage from "./../../../assets/images/descriptionImage.png"
import profile from "./../../../assets/images/profile.jpg"
import ReactHashtag from "react-hashtag";

export default function Post(){
    return(
        <>
            <Section>
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
                            <ReactHashtag renderHashtag={(hashtag) => (
                              <Link to={`/hashtag/${hashtag.split("#")[1]}`} >
                                 <span>
                                       {hashtag}
                                 </span>
                              </Link>
                           )}>
                           </ReactHashtag>
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
}

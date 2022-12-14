import { IonIcon } from "react-ion-icon";
import { Section, Container,Name, Description, Hashtags, LinkContainer, LinkBox, LinkTittle, LinkDescription, Link, LinkImage, PostContainer, Aside, ProfileImageBox, ProfileImage, LikesBox, LikesCount, Box, IconBox, InfoBox, PostId, UserId } from "./styles.js";
import profile from "./../../../assets/images/profile.jpg"
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import UserContext from "../../../contexts/UserContext.js";

export default function Post(props){
    const {userData} = useContext(UserContext);
    const [postWasLiked, setPostWasLiked] = useState(false);
    const {postId, userId:postOwnerId, username, userText, linkTitle, linkDescription, link, linkImage, likeCount, modalIsOpen, setIsOpen} = props;
    
    return(
        <>
            <Section>
                <Container>
                    <Aside>
                        <ProfileImageBox>
                            <ProfileImage src={profile}/>
                        </ProfileImageBox>
                        <LikesBox postWasLiked={postWasLiked}>
                            {
                                postWasLiked ?
                                <>
                                    <IonIcon name="heart" onClick={() => {
                                        setLikeStatus();
                                    }}/>
                                    <LikesCount>{likeCount}</LikesCount>
                                </>
                                :
                                <>
                                    <IonIcon name="heart-outline" onClick={() => {
                                        setLikeStatus();
                                    }}/>
                                    <LikesCount>{likeCount}</LikesCount>
                                </>
                            }
                            
                        </LikesBox>
                    </Aside>
                    <PostContainer>
                        <InfoBox>
                            <PostId>{postId}</PostId>
                            <UserId>{postOwnerId}</UserId>
                        </InfoBox>
                        <Box>
                            <Name>{username}</Name>
                            <IconBox userId={userData.userId} postOwnerId={postOwnerId}>
                                <IonIcon name="trash" onClick={() => {
                                if(modalIsOpen){
                                    setIsOpen(false);   
                                }else{
                                    setIsOpen(true);
                                }
                            }}/>
                            </IconBox>
                        </Box>
                        <Description>
                            {userText}
                                <Hashtags> #react #material</Hashtags>
                        </Description>
                        <LinkContainer>
                            <LinkBox>
                                <LinkTittle>{linkTitle}</LinkTittle>
                                <LinkDescription>{linkDescription}</LinkDescription>
                                <Link href={link}>{link}</Link>
                            </LinkBox>
                            <LinkImage src={linkImage}/>
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
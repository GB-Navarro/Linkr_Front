import { IonIcon } from "react-ion-icon";
import { Section, Container, Name, Description, Hashtags, LinkContainer, LinkBox, LinkTittle, LinkDescription, Link, LinkImage, PostContainer, Aside, ProfileImageBox, ProfileImage, LikesBox, LikesCount, Top, Icons, EditBox } from "./styles.js";
import profile from "./../../../assets/images/profile.jpg"
import { useState } from "react";
import axios from "axios";

export default function Post(props) {
    const [postWasLiked, setPostWasLiked] = useState(false);
    const { username, userText, linkTitle, linkDescription, link, linkImage, likeCount } = props;
    const [openEditBox, setOpenEditBox] = useState(false);
    const [loading, setLoading] = useState(false);

    let originalDescription = "Muito maneiro esse tutorial de Material UI com React, deem uma olhada!";
    const [newDescription, setNewDescription] = useState(originalDescription);

    return (
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
                                        }} />
                                        <LikesCount>{likeCount}</LikesCount>
                                    </>
                                    :
                                    <>
                                        <IonIcon name="heart-outline" onClick={() => {
                                            setLikeStatus();
                                        }} />
                                        <LikesCount>{likeCount}</LikesCount>
                                    </>
                            }
                        </LikesBox>
                    </Aside>
                    <PostContainer>
                        <Top>
                            <Name>{username}</Name>
                            <Icons>
                                <ion-icon name="pencil-sharp" onClick={() => setOpenEditBox(!openEditBox)}></ion-icon>
                                <ion-icon name="trash-sharp"></ion-icon>
                            </Icons>
                        </Top>
                        <Description>
                            {
                                !openEditBox ? { userText } : <EditBox type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} autoFocus onFocus={focusOnTextareaEnd} onKeyDown={sendNewDescription} disabled={loading}></EditBox>
                            }
                            <Hashtags> #react #material</Hashtags>
                        </Description>
                        <LinkContainer>
                            <LinkBox>
                                <LinkTittle>{linkTitle}</LinkTittle>
                                <LinkDescription>{linkDescription}</LinkDescription>
                                <Link href={link}>{link}</Link>
                            </LinkBox>
                            <LinkImage src={linkImage}/>
                        </LinkContainer >
                    </PostContainer >
                </Container >
            </Section >
        </>
    )

    async function setLikeStatus() {
        const token = "5e23c49f-fd86-4921-a338-dc90a235b05b";
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const data = {
            postId: 8,
            userId: 1
        }
        if (postWasLiked) {
            try {
                const promisse = await axios.post("http://localhost:5000/removelike", data, config);
                setPostWasLiked(false);
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                const promisse = await axios.post("http://localhost:5000/addlike", data, config);
                setPostWasLiked(true);
            } catch (error) {
                console.log(error);
            }
        }
    }

    async function focusOnTextareaEnd(event) {
        let text = event.target.value;
        event.target.value = '';
        event.target.value = text;
    }

    async function sendNewDescription(event) {
        if (event.key === "Escape") {
            setOpenEditBox(false);
            setNewDescription(originalDescription);
        }
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            setLoading(true);

            const token = localStorage.getItem("token");
            const postId = 1;

            const URL = `http://localhost:4000/posts/edit/${postId}`;
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            };
            const body = {
                text: newDescription
            }

            const promise = axios.put(URL, body, config);

            promise.then(res => {
                setLoading(false);
                setOpenEditBox(false);
                setNewDescription(originalDescription);
            });
            promise.catch(err => {
                alert(err.response.data);
                setLoading(false);
                setOpenEditBox(false);
                setNewDescription(originalDescription);
            });

        }
    }
}
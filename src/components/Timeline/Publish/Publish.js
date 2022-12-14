import { Section, Tittle, TittleBox, UrlInput, TextInput, Button, ButtonBox, FormBox, MobileContainer, Image, ImageBox, DesktopContainer } from "./styles.js";
import { useState } from "react";
import profile from "./../../../assets/images/profile.jpg"
import timelineFunctions from "../functions/timelineFunctions.js";

export default function Publish(props){
    
    const [url, setUrl] = useState("");
    const [text, setText] = useState("");
    const [formEnabled, setFormEnabled] = useState(true);
    const {token} = props;
    return(
        <>
            <Section>
                <DesktopContainer>
                    <ImageBox>
                        <Image src={profile}/>
                    </ImageBox>
                    <MobileContainer>
                        <TittleBox>
                            <Tittle> What are you going to share today? </Tittle>
                        </TittleBox>
                        {
                            formEnabled ?
                            <>
                                <FormBox onSubmit={(e) => timelineFunctions.sendPost(e, setFormEnabled, url, text, setUrl, setText, props.posts, props.setPosts, props.setError, props.setLoadingState, token)}>
                                    <UrlInput type="url" placeholder="http://..." value={url} onChange={(e) => setUrl(e.target.value)} required></UrlInput>
                                    <TextInput rows="5" placeholder="Awesome article about #javascript" value={text} onChange={(e) => setText(e.target.value)}></TextInput>
                                    <ButtonBox>
                                        <Button state={formEnabled} type="submit" value="Publish"></Button>
                                    </ButtonBox>
                                </FormBox>
                            </>
                            :
                            <>
                                <FormBox onSubmit={(e) => timelineFunctions.sendPost(e, setFormEnabled, url, text, setUrl, setText,props.posts, props.setPosts, props.setError, props.setLoadingState, token)}>
                                    <UrlInput type="url" placeholder="http://..." value={url} onChange={(e) => setUrl(e.target.value)} disabled></UrlInput>
                                    <TextInput rows="5" placeholder="Awesome article about #javascript" value={text} onChange={(e) => setText(e.target.value)} disabled></TextInput>
                                    <ButtonBox>
                                        <Button state={formEnabled} type="submit" value="Publishing..." disabled></Button>
                                    </ButtonBox>
                                </FormBox>
                            </>

                        }
                    </MobileContainer>
                </DesktopContainer>
            </Section>
        </>
    )
}
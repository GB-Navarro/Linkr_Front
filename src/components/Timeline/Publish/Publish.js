import { Section, Tittle, TittleBox, UrlInput, TextInput, Button, ButtonBox, FormBox, MobileContainer, Image, ImageBox, DesktopContainer } from "./styles.js";
import profile from "./../../../assets/images/profile.jpg"
import { useState } from "react";

export default function Publish(){

    const [url, setUrl] = useState("");
    const [text, setText] = useState("");

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
                        <FormBox onSubmit={sendPublish}>
                            <UrlInput type="url" placeholder="http://..." value={url} onChange={(e) => setUrl(e.target.value)} required></UrlInput>
                            <TextInput rows="5" placeholder="Awesome article about #javascript" value={text} onChange={(e) => setText(e.target.value)}></TextInput>
                            <ButtonBox>
                                <Button type="submit" value="Publish"></Button>
                            </ButtonBox>
                        </FormBox>
                    </MobileContainer>
                </DesktopContainer>
            </Section>
        </>
    )


    function sendPublish(e){
        e.preventDefault();
    }
}
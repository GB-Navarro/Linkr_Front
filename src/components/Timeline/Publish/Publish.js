import { Section, Tittle, TittleBox, UrlInput, TextInput, Button, ButtonBox, FormBox, MobileContainer, Image, ImageBox, DesktopContainer } from "./styles.js";
import profile from "./../../../assets/images/profile.jpg"
import { useState } from "react";
import axios from "axios";

export default function Publish(){

    const [url, setUrl] = useState("");
    const [text, setText] = useState("");
    const [formEnabled, setFormEnabled] = useState(true);

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
                                <FormBox onSubmit={sendPost}>
                                    <UrlInput type="url" placeholder="http://..." value={url} onChange={(e) => setUrl(e.target.value)} required></UrlInput>
                                    <TextInput rows="5" placeholder="Awesome article about #javascript" value={text} onChange={(e) => setText(e.target.value)}></TextInput>
                                    <ButtonBox>
                                        <Button state={formEnabled} type="submit" value="Publish"></Button>
                                    </ButtonBox>
                                </FormBox>
                            </>
                            :
                            <>
                                <FormBox onSubmit={sendPost}>
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

    async function sendPost(e){
        e.preventDefault();
        setFormEnabled(false);
        const token = "";
        const config = {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
        const post = {
            link:url,
            text:text
        }
        
        try{
            const promisse = await axios.post("http://localhost:5000/publish",post,config);
            setUrl("");
            setText("");
            setFormEnabled(true);
        }catch(error){
            console.log(error);
            alert("Houve um erro ao publicar seu link");
            setFormEnabled(true);
        }
        
    }
}
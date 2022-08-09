import { Section, Tittle, TittleBox, UrlInput, TextInput, Button, ButtonBox, FormBox, MobileContainer, Image, ImageBox, DesktopContainer } from "./styles.js";
import profile from "./../../../assets/images/profile.jpg"

export default function Publish(){
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
                        <FormBox>
                            <UrlInput placeholder="http://..."></UrlInput>
                            <TextInput placeholder="Awesome article about #javascript"></TextInput>
                            <ButtonBox>
                                <Button>
                                    <p> Publish </p>
                                </Button>
                            </ButtonBox>
                        </FormBox>
                    </MobileContainer>
                </DesktopContainer>
            </Section>
        </>
    )
}
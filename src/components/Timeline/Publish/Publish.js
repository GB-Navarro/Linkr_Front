import { Section, Tittle, Button, UrlInput, TextInput, FormBox, ButtonBox, Container, TittleBox } from "./styles.js";

export default function Publish(){
    return(
        <>
            <Section>
                <Container>
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
                </Container>
            </Section>
        </>
    )
}
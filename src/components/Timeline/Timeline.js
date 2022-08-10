import Publish from "./Publish/Publish.js";
import Post from "./Post/Post.js";
import Header from "../Header/Header.js"
import { Container, TextBox, Text } from "./styles.js"

export default function Timeline(){
    return(
        <>
            <Header></Header>
            
            <Container>
            <TextBox>
                    <Text> timeline </Text>
            </TextBox>
                <Publish></Publish>
                <Post></Post>
                <Post></Post>
                <Post></Post>
                <Post></Post>
            </Container>
        </>
    )
}
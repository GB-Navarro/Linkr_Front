import Publish from "./Publish/Publish.js";
import Post from "./Post/Post.js";
import Header from "../Header/Header.js"
import { Text } from "./styles.js"

export default function Timeline(){
    return(
        <>
            <Header></Header>
            <Text> timeline </Text>
            <Publish></Publish>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            
        </>
    )
}
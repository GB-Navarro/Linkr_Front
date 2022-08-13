import Publish from "./Publish/Publish.js";
import Post from "./Post/Post.js";
import Header from "../Header/Header.js";
import { Main, TittleBox, Tittle} from "./styles.js"

export default function Timeline(){
    return(
        <>
            <Header></Header>
            <Main>
                <TittleBox>
                        <Tittle> timeline </Tittle>
                </TittleBox>
                <Publish></Publish>
                <Post></Post>
                <Post></Post>
                <Post></Post>
                <Post></Post>                 
            </Main>
        </>
    )
}
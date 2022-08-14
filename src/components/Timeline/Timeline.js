import Publish from "./Publish/Publish.js";
import Post from "./Post/Post.js";
import Header from "../Header/Header.js";
import { useState } from "react";
import { Main, TittleBox, Tittle, LoadingBox } from "./styles.js"
import { BallTriangle } from "react-loader-spinner";
import timelineFunctions from "./functions/timelineFunctions.js";
 
export default function Timeline(){
    
    const [posts, setPosts] = useState([]);

    return(
        <>
            <Header></Header>
            <Main>
                <TittleBox>
                        <Tittle onClick={() => {
                            timelineFunctions.getPosts(posts, setPosts);
                        }}> timeline </Tittle>
                </TittleBox>
                <Publish posts={posts} setPosts={setPosts}></Publish>
                {
                    posts.length > 0 ? 
                    <>
                        {posts.map((post) => {
                            return(
                                <>
                                    <Post username={post.username} userText={post.userText} linkTitle={post.urlTitle} linkDescription={post.urlDescription} link={post.url} linkImage={post.urlImage} likeCount={post.likeCount}></Post>        
                                </>
                            )
                        })}
                    </>
                    :
                    <>
                        <LoadingBox>
                            <BallTriangle color='#FFFFFF' height='10' width='10'></BallTriangle>
                        </LoadingBox>
                    </>
                }  
            </Main>
        </>
    )
}
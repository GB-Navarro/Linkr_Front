import Publish from "./Publish/Publish.js";
import Post from "./Post/Post.js";
import Header from "../Header/Header.js";
import { useState, useEffect } from "react";
import { Main, TittleBox, Tittle, LoadingBox, Text } from "./styles.js"
import { BallTriangle } from "react-loader-spinner";
import timelineFunctions from "./functions/timelineFunctions.js";
 
export default function Timeline(){
    
    const [posts, setPosts] = useState([]);
    let [error, setError] = useState("");
    let [loadingState, setLoadingState] = useState(false); 

    useEffect(() => {
        setTimeout(() => {
            timelineFunctions.getPosts(posts, setPosts, setError, setLoadingState);
        }, 100)
    },[])

    return(
        <>
            <Header></Header>
            <Main>
                <TittleBox>
                        <Tittle onClick={() => {
                            timelineFunctions.getPosts(posts, setPosts, setError, setLoadingState);
                        }}> timeline </Tittle>
                </TittleBox>
                <Publish posts={posts} setPosts={setPosts} setError={setError} setLoadingState={setLoadingState}></Publish>
                {
                    error === "" ?
                    <>
                        {loadingState === true ?
                            <>
                                <LoadingBox>
                                    <BallTriangle color='#FFFFFF' height='10' width='10'></BallTriangle>
                                </LoadingBox>
                            </>
                            :
                            <>
                                {posts.length === 0 ?
                                    <>
                                        <Text>"There are no posts yet"</Text>
                                    </>
                                    :
                                    <>
                                        {posts.map((post) => {
                                            return(
                                                <>
                                                    <Post username={post.username} userText={post.userText} linkTitle={post.urlTitle} linkDescription={post.urlDescription} link={post.url} linkImage={post.urlImage} likeCount={post.likeCount}></Post>        
                                                </>
                                            )
                                        })}
                                    </>
                                }
                            </>
                        }
                    </>
                    :
                    <>
                        <Text>❌ {error} ❌</Text>
                    </>
                }
            </Main>
        </>
    )

    
}


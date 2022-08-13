import Publish from "./Publish/Publish.js";
import Post from "./Post/Post.js";
import Header from "../Header/Header.js";
import { useState } from "react";
import { Main, TittleBox, Tittle, LoadingBox } from "./styles.js"
import axios from "axios";
import { Audio, BallTriangle } from "react-loader-spinner";
 
export default function Timeline(){
    
    const [posts, setPosts] = useState([]);

    return(
        <>
            <Header></Header>
            <Main>
                <TittleBox>
                        <Tittle onClick={() => {
                            getPosts();
                        }}> timeline </Tittle>
                </TittleBox>
                <Publish></Publish>
                {
                    posts.length > 0 ? 
                    <>
                        {posts.map((post) => {
                            return(
                                <>
                                    <Post username={post.userId} userText={post.userText} linkTitle={post.urlTitle} linkDescription={post.urlDescription} link={post.url} linkImage={post.urlImage} likeCount={post.likeCount}></Post>        
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

    async function getPosts(){
        const token = "5e23c49f-fd86-4921-a338-dc90a235b05b";
        const config = {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
        try{
            const promisse = await axios.get("http://localhost:5000/timeline",config);
            setPosts(...posts, promisse.data);
        }catch(error){
            console.log(error)
        }
    }
}
import Post from "./Post/Post.js";
import Header from "../Header/Header.js";
import Publish from "./Publish/Publish.js";
import DeleteModal from "./DeleteModal/DeleteModal.js";
import timelineFunctions from "./functions/timelineFunctions.js";
import { useState, useEffect } from "react";
import { Main, TittleBox, Tittle, LoadingBox, Text } from "./styles.js"
import { BallTriangle } from "react-loader-spinner";
import { useContext } from "react";
import UserContext from "./../../contexts/UserContext.js";

export default function Timeline(){
    const {userData, setUserData} = useContext(UserContext);
    const [posts, setPosts] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);
    let [error, setError] = useState("");
    let [loadingState, setLoadingState] = useState(false); 
    useEffect(() => {
        setTimeout( async () => {
            timelineFunctions.getPosts(posts, setPosts, setError, setLoadingState);
            const data = await timelineFunctions.getUserDataFromToken('token');
            setUserData(data);
        }, 100)
    },[])

    return(
        <>
            <Header></Header>
            <Main>
                <DeleteModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} posts={posts} setPosts={setPosts} setError={setError} setLoadingState={setLoadingState}></DeleteModal>
                <TittleBox>
                        <Tittle onClick={() => console.log(userData)}> timeline </Tittle>
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
                                                    <Post username={post.username} userText={post.userText} linkTitle={post.urlTitle} linkDescription={post.urlDescription} link={post.url} linkImage={post.urlImage} likeCount={post.likeCount} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} postId={post.postId} userId={post.userId} ></Post>        
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


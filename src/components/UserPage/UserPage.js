import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";

import Header from "../Header/Header.js";
import Post from "../Timeline/Post/Post.js";
import { Main, TittleBox, Tittle, LoadingBox, Text } from "./styles.js";


export default function UserPage() {
    const { id } = useParams();

    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState();
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState("");

    function getPostsByUserId() {
        const URL = `http://localhost:4000/posts/${id}`;
        const promise = axios.get(URL);
        setLoading(true);

        promise.then(res => {
            setUser(res.data.username);
            setPosts(res.data.posts);
            setLoading(false);
        });
        promise.catch(err => {
            console.log(err.response.data);
            setError(err.response.data);
        });
    }

    useEffect(() => getPostsByUserId(), []);

    function assemblePosts() {
        if (posts.length === 0) {
            return (
                <>
                    <Text>"There are no posts yet"</Text>
                </>
            )
        }

        return (
            <>
                {
                    posts.map((post, index) => <Post key={index} username={post.username} userText={post.userText} linkTitle={post.urlTitle} linkDescription={post.urlDescription} link={post.url} linkImage={post.urlImage} likeCount={post.likeCount}></Post>)
                }
            </>
        )
    }

    return (
        <>
            <Header></Header>
            <Main>
                {
                    error === "" ?
                        <>
                            {loading === true ?
                                <>
                                    <LoadingBox>
                                        <BallTriangle color='#FFFFFF' height='10' width='10'></BallTriangle>
                                    </LoadingBox>
                                </>
                                :
                                <>
                                    <TittleBox>
                                        <Tittle> {user}'s posts </Tittle>
                                    </TittleBox>
                                    {assemblePosts()}
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
import axios from "axios";

async function sendPost(e, setFormEnabled, url, text, setUrl, setText, posts, setPosts, setError, setLoadingState, token){
    e.preventDefault();
    setFormEnabled(false);
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    const post = {
        link:url,
        text:text
    }
    try{
        const promisse = await axios.post("http://localhost:5000/publish",post,config);
        setUrl("");
        setText("");
        setFormEnabled(true);
        await getPosts(posts, setPosts, setError, setLoadingState, token);
    }catch(error){
        console.log(error);
        alert("Houve um erro ao publicar seu link");
        setFormEnabled(true);
    }   
}

async function getPosts(posts, setPosts, setError, setLoadingState, token){
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    try{
        setLoadingState(true);
        const promisse = await axios.get("http://localhost:5000/posts",config);
        setLoadingState(false);
        setPosts(promisse.data);
    }catch(promisseError){
        console.log(promisseError)
        setError("An error occured while trying to fetch the posts, please refresh the page");
    }
}

async function getUserDataFromToken(token){
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    try{
        const promisse = await axios.get("http://localhost:5000/user",config);
        const userData = promisse.data;
        return userData;
    }catch(error){
        console.log(error);
    }
}

async function deletePost(postId, token, posts, setPosts, setError, setLoadingState, setIsOpen){
    console.log(postId);
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    try{
        const promisse = await axios.delete(`http://localhost:5000/post/${postId}`,config);
        console.log(promisse)
        await getPosts(posts, setPosts, setError, setLoadingState);
        setIsOpen(false);
    }catch(error){
        setIsOpen(false);
        alert("Sorry, could not delete post");
        console.log(error);
    }
}

const timelineFunctions = {
    sendPost,
    getPosts,
    getUserDataFromToken,
    deletePost
}

export default timelineFunctions;
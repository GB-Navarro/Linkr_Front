import Publish from "./Publish/Publish.js";
import Post from "./Post/Post.js";
import Header from "../Header/Header.js";
import { useState, useEffect } from "react";
import { Main, TittleBox, Tittle, LoadingBox, Text, DeleteText, DeleteTextBox, Button, ButtonBox } from "./styles.js"
import { BallTriangle } from "react-loader-spinner";
import timelineFunctions from "./functions/timelineFunctions.js";
import Modal from "react-modal";
 
const customStyles = {
    content: {
        width: '600px',
        height: '260px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: '#333333',
        borderRadius: '50px'
    },
};

export default function Timeline(){
    
    const [posts, setPosts] = useState([]);
    let [error, setError] = useState("");
    let [loadingState, setLoadingState] = useState(false); 

    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    

    Modal.setAppElement('#root');


    useEffect(() => {
        setTimeout(() => {
            timelineFunctions.getPosts(posts, setPosts, setError, setLoadingState);
        }, 100)
    },[])

    return(
        <>
            <Header></Header>
            <Main>
                <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal}style={customStyles}>
                    <DeleteTextBox>
                        <DeleteText>Are you sure you want</DeleteText>
                        <DeleteText>to delete this post?</DeleteText>
                    </DeleteTextBox>
                    <ButtonBox>
                        <Button>No, go back</Button>
                        <Button>Yes, delete it</Button>
                    </ButtonBox>
                </Modal>
                <TittleBox>
                        <Tittle /*onClick={() => {
                            timelineFunctions.getPosts(posts, setPosts, setError, setLoadingState);
                        }}*/ onClick={openModal}> timeline </Tittle>
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


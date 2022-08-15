import Modal from "react-modal";
import customStyles from "../functions/modalStyles.js";
import { afterOpenModal, closeModal } from "../functions/modalFunctions.js";
import {DeleteText, DeleteTextBox, Button, ButtonBox} from "./styles.js";
import timelineFunctions from "../functions/timelineFunctions.js";

export default function DeleteModal(props){

    let subtitle;
    const { posts, setPosts, setError, setLoadingState } = props;
    Modal.setAppElement('#root');

    return(
        <>
            <Modal isOpen={props.modalIsOpen} onAfterOpen={() => afterOpenModal(subtitle)} onRequestClose={() => closeModal(props.setIsOpen)}style={customStyles}>
                    <DeleteTextBox>
                        <DeleteText>Are you sure you want</DeleteText>
                        <DeleteText>to delete this post?</DeleteText>
                    </DeleteTextBox>
                    <ButtonBox>
                        <Button onClick={() => props.setIsOpen(false)}>No, go back</Button>
                        <Button onClick={() => timelineFunctions.deletePost(21,'5e23c49f-fd86-4921-a338-dc90a235b05b', posts, setPosts, setError, setLoadingState, props.setIsOpen)}>Yes, delete it</Button>
                    </ButtonBox>
            </Modal>
        </>
    )
}
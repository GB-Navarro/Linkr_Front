import Modal from "react-modal";
import customStyles from "../functions/modalStyles.js";
import { afterOpenModal, closeModal } from "../functions/modalFunctions.js";
import {DeleteText, DeleteTextBox, Button, ButtonBox} from "./styles.js";

export default function DeleteModal(props){

    let subtitle;

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
                        <Button>Yes, delete it</Button>
                    </ButtonBox>
            </Modal>
        </>
    )
}
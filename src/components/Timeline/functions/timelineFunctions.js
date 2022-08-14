import axios from "axios";

async function sendPost(e, setFormEnabled, url, text, setUrl, setText ){
    e.preventDefault();
    setFormEnabled(false);
    //5e23c49f-fd86-4921-a338-dc90a235b05b
    //4096a77a-f637-4767-a6dc-e01f93e4613c
    const token = "5e23c49f-fd86-4921-a338-dc90a235b05b";
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
    }catch(error){
        console.log(error);
        alert("Houve um erro ao publicar seu link");
        setFormEnabled(true);
    }   
}

const timelineFunctions = {
    sendPost
}

export default timelineFunctions;
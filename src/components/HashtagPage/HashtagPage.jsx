import {useEffect, useState, useContext} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import UserContext from "../contexts/UserContext";
import TimeLine from "../components/TimeLine/TimeLine";


export default function HashtagPage({ updateState }){
    const [postsList, setPostsList] = useState([]);
    const [userState] = useContext(UserContext);
    const {hashtag} = useParams();
    const [currentPage, setCurrentPage] = useState('2040-09-28T22:59:02.448804522Z');

    useEffect(() => {
        const config = {headers: { authorization: `Bearer ${userState.token}`}};
        const URL = process.env.REACT_APP_API_URL+`/hashtag/${hashtag}?timestamp=` + currentPage;
        const promise = axios.get(URL, config);
        promise.then(response => {
            setPostsList(previousPosts => [...previousPosts, ...response.data]);
        });
        promise.catch(error => console.log(error));
    }, [currentPage]);

    return (<TimeLine
        updateState={updateState}
        title={"# " + hashtag}
        postsList={postsList}
        setPostsList={setPostsList}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        timeline={false}
    />);
}

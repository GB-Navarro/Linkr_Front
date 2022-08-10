import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

import { ThreeDots } from 'react-loader-spinner';

export default function SignUpPage() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
        pictureUrl: ""
    });


    function assembleForm() {
        if (!loading) {
            return (
                <form onSubmit={signUp}>
                    <Input required type="email" placeholder="e-mail" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} ></Input>
                    <Input required type="password" placeholder="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} minLength={5}></Input>
                    <Input required type="text" placeholder="username" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} minLength={2} maxLength={25}></Input>
                    <Input required type="text" placeholder="picture url" value={user.pictureUrl} onChange={(e) => setUser({ ...user, pictureUrl: e.target.value })}></Input>
                    <Button type="submit">Sign Up</Button>
                </form>
            )
        }
        else {
            return (
                <form onSubmit={signUp}>
                    <Input disabled={true} required type="email" placeholder="e-mail" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} ></Input>
                    <Input disabled={true} required type="password" placeholder="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} minLength={8}></Input>
                    <Input disabled={true} required type="text" placeholder="username" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} minLength={2} maxLength={25}></Input>
                    <Input disabled={true} required type="text" placeholder="picture url" value={user.pictureUrl} onChange={(e) => setUser({ ...user, pictureUrl: e.target.value })}></Input>
                    <Button disabled={true} type="submit"><ThreeDots width={51} height={13} color="#FFFFFF" /></Button>
                </form>
            )
        }
    }

    function signUp(event) {
        event.preventDefault();

        const URL = "http://localhost:4000/sign-up";

        setLoading(true);
        const promise = axios.post(URL, user);

        promise.then(res => {
            navigate("/");
        });
        promise.catch(err => {
            alert(err.response.data);
            setUser({
                email: "",
                password: "",
                username: "",
                pictureUrl: ""
            });
            setLoading(false);
        });
    }

    return (
        <Page>
            <LeftSide>
                <h1>
                    linkr
                </h1>
                <h2>
                    save, share and discover
                    the best links on the web
                </h2>
            </LeftSide>

            <RightSide>
                {assembleForm()}
                <SignInLink to="/">
                    Switch back to log in
                </SignInLink>
            </RightSide>
        </Page>
    )
}

const Page = styled.div`
    display: flex;
`

const LeftSide = styled.div`
    width: 1005px;
    height: 100vh;
    background-color: #151515;
    color: #FFFFFF;
    padding-left: 144px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        font-size: 106px;
        font-weight: 700;
        font-family: 'Passion One', cursive;
        margin: 0;
    }
    h2 {
        width: 442px;
        font-size: 43px;
        font-weight: 700;
        font-family: 'Oswald', sans-serif;
    }
`

const RightSide = styled.div`
    width: 635px;
    height: 100vh;
    background-color: #333333;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const Input = styled.input`
	width: 429px;
    height: 65px;
    background-color: #FFFFFF;
	border-radius: 6px;
    border: 0px;
    margin-bottom: 13px;
	transition: .2s;

    ::placeholder {
        color: #9F9F9F;
        font-size: 27px;
        font-family: 'Oswald', sans-serif;
    }
	:valid {
        border: 2px solid #03AC00;
    }
	
`

const Button = styled.button`
	width: 429px;
    height: 65px;
    background-color: #1877F2;
    font-size: 27px;
	font-weight: 700;
    font-family: 'Oswald', sans-serif;
	color: #FFFF;
	border-radius: 6px;
	border: 0px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
    transition: .2s;
`

const SignInLink = styled(Link)`
    margin-top: 14px;
	font-size: 20px;
    font-weight: 400;
    font-family: 'Lato', sans-serif;
    color: #FFFFFF;
    text-decoration: underline;
`
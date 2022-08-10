import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

import { ThreeDots } from 'react-loader-spinner';

export default function SignInPage() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [login, setLogin] = useState({
        email: "",
        password: ""
    });

    function assembleForm() {
        if (!loading) {
            return (
                <form onSubmit={signIn}>
                    <Input required type="email" placeholder="e-mail" value={login.email} onChange={(e) => setLogin({ ...login, email: e.target.value })} ></Input>
                    <Input required type="password" placeholder="password" value={login.password} onChange={(e) => setLogin({ ...login, password: e.target.value })} minLength={8}></Input>
                    <Button type="submit">Log In</Button>
                </form>
            )
        }
        else {
            return (
                <form onSubmit={signIn}>
                    <Input disabled={true} required type="email" placeholder="e-mail" value={login.email} onChange={(e) => setLogin({ ...login, email: e.target.value })} ></Input>
                    <Input disabled={true} required type="password" placeholder="password" value={login.password} onChange={(e) => setLogin({ ...login, password: e.target.value })} minLength={8}></Input>
                    <Button disabled={true} type="submit"><ThreeDots width={51} height={13} color="#FFFFFF" /></Button>
                </form>
            )
        }
    }

    function signIn(event) {
        event.preventDefault();

        const URL = "http://localhost:4000/sign-in";

        setLoading(true);
        const promise = axios.post(URL, login);

        promise.then(res => {
            localStorage.setItem("token", (res.data));
            navigate("/timeline");
        });
        promise.catch(err => {
            alert(err.response.data);
            setLogin({
                email: "",
                password: ""
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
                <SignUpLink to="/sign-up">
                    First time? Create an account!
                </SignUpLink>
            </RightSide>
        </Page>
    )
}

const Page = styled.div`
    background-color: #151515;
    display: flex;
    justify-content: space-between;

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
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

    @media (max-width: 600px) {
        width: 100vw;
        height: 175px;
        padding: 15px;
        align-items: center;

        h1 {
            font-size: 76px;
        }
        h2 {
            width: 280px;
            font-size: 23px;
            text-align: center;
            margin: 0;
        }
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

    @media (max-width: 600px) {
        width: 100vw;
        padding-top: 40px;
        justify-content: initial;
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

    @media (max-width: 600px) {
        width: 330px;
        height: 55px;

        ::placeholder {
            font-size: 22px;
        }
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

    @media (max-width: 600px) {
        width: 330px;
        height: 55px;
        font-size: 22px;
    }
`

const SignUpLink = styled(Link)`
    margin-top: 14px;
	font-size: 20px;
    font-weight: 400;
    font-family: 'Lato', sans-serif;
    color: #FFFFFF;

    @media (max-width: 600px) {
        font-size: 17px;
    }
`
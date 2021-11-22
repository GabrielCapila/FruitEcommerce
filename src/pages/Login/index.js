import React, { useState } from "react";
import { Navigate, Route } from "react-router";
import {useRedirect} from 'hookrouter';
import { Router, useNavigate } from "react-router-dom";
import './style.css'
import IndexPage from "..";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }
    console.log(email)

    let navigate = useNavigate()

    function fakeLogin(){
        if(email === "teste@gmail.com" || password === "123"){
            navigate('/home')
        }else{
            alert('Email e/ou senha invalidos')
        }
    }

    return (
        <div>
            <div className="container">
                <div className="column">
                    <form className="col-lg-12" >
                        <div className="containerLogin">
                            <div className="login">
                                <div>
                                    <input 
                                        className="inputDiv"
                                        autoFocus
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div>
                                    <input 
                                        className="inputDiv"
                                        autoFocus
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div>
                                    <button onClick={fakeLogin} className="buttonLogin" disabled={!validateForm()}>
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
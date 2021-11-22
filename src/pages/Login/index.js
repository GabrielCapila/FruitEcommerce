import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './style.css'

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

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
                            <div className="divTitle">
                                <h1>Fruit E-commerce</h1>
                                </div>
                            <div className="login">
                                <div>
                                    <label className="labelLogin">Email</label>
                                    <input 
                                        className="inputDiv"
                                        autoFocus
                                        placeholder="Digite seu email..."
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div>
                                <label className="labelLogin">Senha</label>
                                    <input 
                                        className="inputDiv"
                                        autoFocus
                                        placeholder="Digite sua senha..."
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
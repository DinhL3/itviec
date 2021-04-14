import React from "react"
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="container login-box">
            <h2>Sign in now to access your account on ITviec </h2>
            <input className="login" type="text" placeholder="Email"></input>
            <input className="login" type="text" placeholder="Password"></input>
            <button>Sign in</button>
        </div>
    )
}

export default Login;
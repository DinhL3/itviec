import React from "react"
import { Link } from "react-router-dom";

function Login() {
    return (
        <div>
            <Link className="link" to="/">Go back Home</Link>
            <h2>Login</h2>
        </div>
    )
}

export default Login;
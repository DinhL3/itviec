
import React from "react"
import { Link } from "react-router-dom";



const Navbar = () => {
    return (
        <div className="navbar" >
            <div className="navbar-left">
                <img class="logo-itviec" alt="itviec" src="https://itviec.com/assets/logo-itviec-cbdd5aaa838496d457cf9f8f816600d9d6baf4dd353ad02ab61cce93cbbc697c.png" width="108" height="42"></img>
                <Link className="nav-link" to="">All Jobs</Link>
                <Link className="nav-link" to="">IT Companies</Link>
                <Link className="nav-link" to="">Blog</Link>
            </div>
            <Link className="nav-link" to="/login">Sign In</Link>
        </div >
    )
}

export default Navbar
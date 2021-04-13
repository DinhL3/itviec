import React, { useEffect } from "react"
import { Link } from "react-router-dom";
import axios from "axios"

function Homepage() {
    const getJobs = async () => {
        const res = await axios.get(`http://localhost:5001/jobs`)
        console.log(res.data)
    }

    useEffect(() => {
        getJobs()
    }, [])

    return (
        <div>
            <h2>Home</h2>
            <Link to="/login">Login</Link>
            <div className="job-listing">

            </div>
        </div>
    )
}

export default Homepage;
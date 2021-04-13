import React, { useEffect } from "react"
import { Link } from "react-router-dom";
import axios from "axios"

import Search from "../components/Search"

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
            <div className="header">
                <div className="container">
                    <Search />
                </div>
            </div>
            <div className="job-list">
                <div className="container">
                    <h1>All jobs</h1>
                    <p>Job 1</p>
                    <p>Job 2</p>
                </div>
            </div>
        </div>
    )
}

export default Homepage;
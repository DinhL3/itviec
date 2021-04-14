import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import axios from "axios"

import Search from "../components/Search"
import JobList from "../components/JobList"

function Homepage() {
    const [jobs, setJobs] = useState([])

    const getJobs = async () => {
        const res = await axios.get(`http://localhost:5001/jobs`)
        console.log(res.data)
        setJobs(res.data)
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
            <div className="all-jobs">
                <div className="container">
                    <h1>All jobs in Vietnam</h1>
                    <JobList jobs={jobs} />
                </div>
            </div>
        </div>
    )
}

export default Homepage;
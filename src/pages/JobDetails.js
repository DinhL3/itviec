import React, { useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"


function JobDetails() {
    const { id } = useParams()

    const getSingleJob = async () => {
        const res = await axios.get(`https://my-json-server.typicode.com/lqdquangdinh/itviec/jobs/${id}`)
        console.log(res.data)
    }

    useEffect(() => {
        getSingleJob()
    }, [])

    return (

        <div>

            <h2>Job Details</h2>
        </div >
    )
}

export default JobDetails;
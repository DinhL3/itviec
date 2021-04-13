import React from "react"
import { Link } from "react-router-dom";



const Search = () => {
    return (
        <div className="search">
            <h1>6 low-paying jobs for desperate developers</h1>
            <form>
                <input className="search-bar" type="text" placeholder="Keyword skill (Java, iOS...), Job Title, Company..."></input>

                <button class="btn-search" type="button">Search</button>
            </form>
        </div>
    )
}

export default Search
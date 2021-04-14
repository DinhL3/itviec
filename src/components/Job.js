import React from 'react';
import Moment from 'react-moment';


const Job = (props) => {
    return (
        <div className="job">
            <div className="job-left">{props.img}</div>
            <div className="job-mid">
                <h2>{props.title}</h2>
                {/* <p>{props.description}</p> */}
                <p className="salary">$ {props.salary}</p>
                <ul>{props.benefits.map(item => <li>{item}</li>)}</ul>
                <p>{props.tags.map(item => <span className="tags">{item}</span>)}</p>
            </div>
            <div className="job-right">
                {props.hot == true ? <p className="hot">Hot</p> : <div></div>}
                <p className="city">{props.city}</p>
                <p className="time"><Moment fromNow>{props.time}</Moment></p>
            </div>

        </div>
    );
};

export default Job;
import React from 'react';

import Job from './Job';

const JobList = (props) => {
    return (
        <div className="job-list">
            {/* return <Job /> with props for every object in array */}
            {props.jobs.map((item) => (
                <Job
                    img={item.img}
                    title={item.title}
                    // description={item.description}
                    salary={item.salary}
                    benefits={item.benefits}
                    tags={item.tags}
                    hot={item.isHotjob}
                    city={item.city}
                    time={item.time}
                />
            ))}
        </div>
    );
};

export default JobList;
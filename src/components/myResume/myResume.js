import React from "react";
import {Col, Row} from "react-bootstrap";

const timeline = [
    {
        position: "left",
        title: "ELT Editorial Specialist",
        subtitle: "Editor / Writer / Consultant",
        duration: "2005 - Present",
    },
    {
        position: "right",
        title: "Fiction Editorial Services",
        // subtitle: "Girl Scouts of Western Washington",
        duration: "2005 – Present",
    },
    {
        position: "left",
        title: "Teacher Training",
        // subtitle: "Girl Scouts of Western Washington",
        duration: "2000 – Present",
    },
    {
        position: "right",
        title: "Teacher Consultancy",
        // subtitle: "Girl Scouts of Western Washington",
        duration: "2010 – Present",
    },
    {
        position: "left",
        title: "Foreign Language School Owner",
        // subtitle: "Girl Scouts of Western Washington",
        duration: "1991-2010",
    },
    // {
    //     position: "right",
    //     title: "EDITOR",
    //     subtitle: "St. Louis University School of Law",
    //     duration: "October 2002 – September 2007",
    // }
];

const education = [
    {
        position: "left",
        title: "University of Sydney",
        subtitle: "Diploma of Education",
        duration: "1989-1990",
    },
    {
        position: "right",
        title: "University of Sydney",
        subtitle: "B.A. Hons.",
        duration: "1986-1990",
    },
];


const MyResume = () => {
    return (
        <div className="overlay-resume" id={`#my-resume`}>
            <section>
                <h1 className='text-center mb-5 mt-5'> My Resume </h1>
                <p>
                </p>
            </section>
            <Row>
                <Col md={12}>
                    <div className="timeline">
                        <div className="timeline-category exp-category">
                            <a className="large bt-timeline"> Experience </a>
                            <div className="timeline-category-icon">
                                <div className="iconspace"><i className=" fa fa-folder-open "/></div>
                            </div>
                        </div>
                        {timeline.map((item, idx) =>
                            <div key={idx} className={`timeline-post timeline-post-${item.position}`}>
                                <div className="timeline-post-content-holder">
                                    <div className="timeline-post-icon"/>
                                    <div className="timeline-post-title">
                                        <h4>{item.title}</h4>
                                    </div>
                                    <div className="timeline-post-subtitle">
                                        <p><span>{item.subtitle}</span><span
                                            className="timeline-duration">{item.duration}</span></p>
                                    </div>
                                    <div className="timeline-post-content">
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <div className="timeline">
                        <div className="timeline-category exp-category">
                            <a className="large bt-timeline"> Education </a>
                            <div className="timeline-category-icon">
                                <div className="iconspace"><i className=" fa fa-graduation-cap "/></div>
                            </div>
                        </div>
                        {education.map((item,idx)=>
                            <div key={idx} className={`timeline-post-edu timeline-post-${item.position}`}>
                                <div className="timeline-post-content-holder">
                                    <div className="timeline-post-icon"/>
                                    <div className="timeline-post-title">
                                        <h4>{item.title}</h4>
                                    </div>
                                    <div className="timeline-post-subtitle">
                                        <p><span>{item.subtitle}</span><span
                                            className="timeline-duration">{item.duration}</span></p>
                                    </div>
                                    <div className="timeline-post-content">
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="timeline-end-icon"><span> <i className="fa fa-bookmark"/></span></div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default MyResume
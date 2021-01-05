import React from "react";
import {Col, Row} from "react-bootstrap";

const timeline = [
    {
        position: "left",
        title: "Associate Vice President, Marketing",
        subtitle: "Girl Scouts of Western Washington",
        duration: "December 2019-Present",
    },
    {
        position: "right",
        title: "DIRECTOR OF MARKETING &amp; COMMUNICATIONS",
        subtitle: "Girl Scouts of Western Washington",
        duration: "May 2017-December 2019",
    },
    {
        position: "left",
        title: "PUBLIC RELATIONS DIRECTOR",
        subtitle: "Girl Scouts of Western Washington",
        duration: "December 2019-Present",
    },
    {
        position: "right",
        title: "WRITING SPECIALIST",
        subtitle: "Girl Scouts of Western Washington",
        duration: "2000 - Present",
    },
    {
        position: "left",
        title: "FREELANCE WRITER",
        subtitle: "Girl Scouts of Western Washington",
        duration: "September 2008 - July 2011",
    },
    {
        position: "right",
        title: "EDITOR",
        subtitle: "St. Louis University School of Law",
        duration: "October 2002 – September 2007",
    }
];

const education = [
    {
        position: "left",
        title: "Certificat de Patisserie - Mention Bien",
        subtitle: "De L'Ecole Le Cordon Bleu",
        duration: "2007-2008",
    },
    {
        position: "right",
        title: "B.A. in Education with Secondary Certification",
        subtitle: "University of Missouri-St. Louis",
        duration: "1997-2000",
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
                            <a className="large bt-timeline"> Experiences </a>
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
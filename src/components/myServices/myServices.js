import React from "react";
import {Col, Row} from "react-bootstrap";

const MyServices = () => {
    return (
        <section id={`#my-services`}>
            <h2 className='text-center mb-5 mt-5'>
                My Services </h2>
            <p>
            </p>
            <Row>
                <Col className='float-left' md={6}>
                    <div className="service-box">
                        <i className="service-icon fa fa-edit"/>
                        <div className="service-content">
                            <h3>ELT Editing</h3>
                            <p></p>
                        </div>
                    </div>
                    <div className="service-box">
                        <i className="service-icon fa fa-pencil"/>
                        <div className="service-content">
                            <h3>ELT Writing</h3>
                            <p></p>
                        </div>
                    </div>
                    <div className="service-box">
                        <i className="service-icon fa fa-graduation-cap"/>
                        <div className="service-content">
                            <h3>ELT Graded Readers</h3>
                            <p></p>
                        </div>
                    </div><div className="service-box">
                        <i className="service-icon fa fa-users"/>
                        <div className="service-content">
                            <h3>ELT Consultancy</h3>
                            <p></p>
                        </div>
                    </div>
                </Col>
                <Col className='float-right' md={6}>

                    <div className="service-box">
                        <i className="service-icon fa fa-comment"/>
                        <div className="service-content">
                            <h3>Teacher Development</h3>
                            <p/>
                        </div>
                    </div>
                    <div className="service-box">
                        <i className="service-icon fa fa-microphone"/>
                        <div className="service-content">
                            <h3>Teacher Consultant</h3>
                            <p></p>
                        </div>
                    </div>
                    <div className="service-box">
                        <i className="service-icon fa fa-bullseye"/>
                        <div className="service-content">
                            <h3>Fiction Editing</h3>
                            <p></p>
                        </div>
                    </div>
                </Col>
            </Row>
        </section>)
}

export default MyServices
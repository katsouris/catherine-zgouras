import React from "react";
import {Col, Row} from "react-bootstrap";

const MyServices = () => {
    return (
        <section>
            <h2 className='text-center mb-5 mt-5'>
                My Services </h2>
            <p>
            </p>
            <Row>
                <Col className='float-left' md={6}>
                    <div className="service-box">
                        <i className="service-icon fa fa-edit"/>
                        <div className="service-content">
                            <h3>Editing</h3>
                            <p></p>
                        </div>
                    </div>
                    <div className="service-box">
                        <i className="service-icon fa fa-pencil"/>
                        <div className="service-content">
                            <h3>Copywriting &amp; Profiles</h3>
                            <p></p>
                        </div>
                    </div>
                    <div className="service-box">
                        <i className="service-icon fa fa-cutlery"/>
                        <div className="service-content">
                            <h3>Food Writing &amp; Recipe Development</h3>
                            <p></p>
                        </div>
                    </div>
                </Col>
                <Col className='float-right' md={6}>

                    <div className="service-box">
                        <i className="service-icon fa fa-qq"/>
                        <div className="service-content">
                            <h3>Ghost Writing</h3>
                            <p/>
                        </div>
                    </div>
                    <div className="service-box">
                        <i className="service-icon fa fa-microphone"/>
                        <div className="service-content">
                            <h3>PR Consultation</h3>
                            <p></p>
                        </div>
                    </div>
                    <div className="service-box">
                        <i className="service-icon fa fa-bullseye"/>
                        <div className="service-content">
                            <h3>Strategy &amp; Campaign Development</h3>
                            <p></p>
                        </div>
                    </div>
                </Col>
            </Row>
        </section>)
}

export default MyServices
import React from "react";
import {Col, Container, Row} from "react-bootstrap";

const Contact = () => {
    return (
        <section id={`#contact-me`} className="section" data-stellar-background-ratio="0.6" data-stellar-vertical-offset="20">
            <div className="overlay-contact">
                <Container>
                    <div className="text-center mb-5 pt-5">
                        <h2>Contact Me </h2>
                        <p>
                        </p>
                    </div>
                    <Row>
                        <Col md={6}>
                            <h4>GET IN TOUCH</h4>
                            <ul className="get_in">
                                <li><i className="fa fa-envelope-o"/><p>stefanie@stefanieellis.com</p></li>
                                <li><i className="fa fa-map-marker"/><p>Seattle, WA</p></li>
                            </ul>
                        </Col>
                        <Col md={6}>
                            <h4>SEND ME A NOTE</h4>
                            <div role="form" className="wpcf7" id="wpcf7-f4-p38-o1" lang="en-US" dir="ltr">
                                <div className="screen-reader-response">
                                    <p role="status" aria-live="polite"
                                       aria-atomic="true"/>
                                    <ul></ul>
                                </div>
                                <form action="/#wpcf7-f4-p38-o1" method="post" className="wpcf7-form init"
                                      noValidate="novalidate" data-status="init">
                                    <div style={{display: "none"}}>
                                        <input type="hidden" name="_wpcf7" value="4"/>
                                        <input type="hidden" name="_wpcf7_version" value="5.3.2"/>
                                        <input type="hidden" name="_wpcf7_locale" value="en_US"/>
                                        <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f4-p38-o1"/>
                                        <input type="hidden" name="_wpcf7_container_post" value="38"/>
                                        <input type="hidden" name="_wpcf7_posted_data_hash"
                                               value=""/>
                                    </div>
                                    <p>Your Name (required)<br/>
                                    <span className="wpcf7-form-control-wrap your-name">
                                            <input type="text"
                                                   name="your-name"
                                                   value="" size="40"
                                                   className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                   aria-required="true"
                                                   aria-invalid="false"/></span><br/>
                                    Your Email (required)<br/>
                                    <span className="wpcf7-form-control-wrap your-email">
                                            <input type="email"
                                                   name="your-email"
                                                   value="" size="40"
                                                   className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                                   aria-required="true"
                                                   aria-invalid="false"/></span><br/>
                                    Subject<br/>
                                    <span className="wpcf7-form-control-wrap your-subject">
                                            <input type="text"
                                                   name="your-subject"
                                                   value="" size="40"
                                                   className="wpcf7-form-control wpcf7-text"
                                                   aria-invalid="false"/></span><br/>
                                    Your Message<br/>
                                    <span className="wpcf7-form-control-wrap your-message"><textarea
                                        name="your-message" cols="40" rows="10"
                                        className="wpcf7-form-control wpcf7-textarea"
                                        aria-invalid="false"/></span><br/>
                                    <input type="submit" value="Send"
                                           className="wpcf7-form-control wpcf7-submit"/><span
                                    className="ajax-loader"/></p>
                                    <div className="wpcf7-response-output" aria-hidden="true"/>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default Contact
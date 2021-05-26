import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {useQuery} from "react-query";

const Contact = ({baseUrl}) => {
    const [fields,setFields]=useState({
        webform_id: "contact",
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    const [loading,setLoading]=useState(false)


    const handleOnChange=(e)=>{
        setFields({
          ...fields,
          [e.target.name]: e.target.value
        })
    }

    const onSubmit= async (e)=>{e.preventDefault();
        fetch('https://api.catherinezgouras.com/webform_rest/submit', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(fields),
        })
            .then(response =>{setLoading(true); return response.json()} )
            .then(data => {
                setFields({
                    webform_id: "contact",
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                })
                setLoading(false)
            })
            .catch((error) => {
            });
    }
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
                                <li><i className="fa fa-envelope-o"/><p>zgourasc@yahoo.com</p></li>
                                <li><i className="fa fa-map-marker"/><p>UK / Greece</p></li>
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
                                <form  className="wpcf7-form init">
                                    <p>Your Name (required)<br/>
                                    <span className="wpcf7-form-control-wrap your-name">
                                            <input type="text"
                                                   name="name"
                                                   required={true}
                                                   value={fields.name}
                                                   onChange={(e)=>handleOnChange(e)}
                                                   size="40"
                                                   className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                   aria-required="true"
                                                   aria-invalid="false"/></span><br/>
                                    Your Email (required)<br/>
                                    <span className="wpcf7-form-control-wrap your-email">
                                            <input type="email"
                                                   onChange={(e)=>handleOnChange(e)}
                                                   name="email"
                                                   required={true}
                                                   value={fields.email}
                                                   size="40"
                                                   className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                                   aria-required="true"
                                                   aria-invalid="false"/></span><br/>
                                    Subject (required)<br/>
                                    <span className="wpcf7-form-control-wrap your-subject">
                                            <input type="text"
                                                   onChange={(e)=>handleOnChange(e)}
                                                   name="subject"
                                                   value={fields.subject}
                                                   size="40"
                                                   required={true}
                                                   className="wpcf7-form-control wpcf7-text"
                                                   aria-invalid="false"/></span><br/>
                                    Your Message (required)<br/>
                                    <span className="wpcf7-form-control-wrap your-message"><textarea
                                        name="message" onChange={(e)=>handleOnChange(e)} value={fields.message} cols="40" rows="10"
                                        className="wpcf7-form-control wpcf7-textarea"
                                        aria-invalid="false"/></span><br/>
                                    <input type="submit" value="Send" onClick={(e)=>onSubmit(e)}
                                           disabled={loading}
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
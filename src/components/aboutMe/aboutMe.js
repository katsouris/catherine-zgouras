import React from "react";
import {Col, Row} from "react-bootstrap";
import logo from '../../assets/photos/kate-hliznitsova-ewRSEBHyO_c-unsplash.jpg';

const AboutMe = () => {
    return (
        <section id={`#about-me`}>
            <h1 className='text-center mb-5 mt-5'>About me</h1>
            <p>A disciplined and creative ELT/ fiction / editor and writer since 2005, I love engaging
                with the projects I work on, helping the writer produce a polished piece of art without
                changing or modifying their voice. I am curious and proactive, passionate about any
                publishing project, no matter how big or small. I also specialise in ELT - developing,
                editing, processing and writing. Get in touch and let&#39;s discuss your needs over a cup
                of tea or coffee.</p>
            <Row>
                <Col sm={4}>
                    <img
                        style={{marginTop: "3px"}}
                        width={200}
                        height={260}
                        src={logo}
                        className="img-responsive" alt="Catherine Zgouras"/>
                </Col>
                <Col sm={4}>
                    <div className="about-info">
                        <div className="float-left">
                            <p>Email: zgourasc@yahoo.com</p>
                            <p>Likes: Creative processes, think tanks, reading anything and everything.</p>
                            <p>Dislikes: Cauliflower and grumpy people.</p>
                        </div>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="about-extra">
                        <h4>HOBBIES &amp; INTERESTS</h4>
                        <div className="about-extra-icon-style2">
                            <ul>
                                <li><p className='pt-4'><i className="fa fa-smile-o"/><br/><span>Kindness</span></p></li>
                                <li><p><i className="fa fa-unlock"/><br/><span style={{fontSize: 10}}>Thinking out of the box</span></p></li>
                                <li><p><i className="fa fa-thumbs-up"/><br/><span style={{fontSize: 13}}>Wellness for success</span></p></li>
                                <li><p className='pt-4'><i className="fa fa-plane"/><br/><span>Travel</span></p></li>
                                <li><p className='pt-4'><i className="fa fa-cutlery"/><br/><span><span>Food</span></span></p></li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </section>
    )
}

export default AboutMe
import React from "react";
import {Col, Row} from "react-bootstrap";

const AboutMe = () => {
    return (
        <section id={`#about-me`}>
            <h1 className='text-center mb-5 mt-5'>About me</h1>
            <p>An disciplined and creative editor since 2005, I love engaging with the projects I work on, helping the writer produce a polished piece of art without changing or modifying their voice.  I am a curious and proactive editor, passionate about any publishing project, no matter how big or small. I also specialise in ELT - developing, editing, processing and writing. Get in touch and let's discuss your needs over a cup of tea or coffee</p>
            <Row>
                <Col sm={4}>
                    <img
                        src="http://www.stefanieellis.com/wp-content/uploads/2015/12/Screen-Shot-2015-12-17-at-10.13.00-PM.jpg"
                        className="img-responsive" alt="STEFANIE ELLIS"/>
                </Col>
                <Col sm={4}>
                    <div className="about-info">
                        <div className="float-left"><p>Email</p><p>Likes</p><p>Dislikes</p></div>
                        <div className="float-left">
                            <p>: stefanie@stefanieellis.com </p>
                            <p>: The color pink. </p>
                            <p>: Cauliflower and grumpy people. </p></div>
                        <p className="about-signature">Stefanie Ellis</p>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="about-extra">
                        <h4>HOBBIES &amp; INTERESTS</h4>
                        <div className="about-extra-icon-style2">
                            <ul>
                                <li><p><i className="fa fa-smile-o"/><br/><span>Nice People</span></p></li>
                                <li><p><i className="fa fa-lightbulb-o"/><br/><span>Fearless Ideas</span></p></li>
                                <li><p><i className="fa fa-thumbs-up"/><br/><span>Forward Thinkers</span></p></li>
                                <li><p><i className="fa fa-plane"/><br/><span>Travel</span></p></li>
                                <li><p><i className="fa fa-anchor"/><br/><span>Mermaids</span></p></li>
                                <li><p><i className="fa fa-cutlery"/><br/><span><span>Food</span></span></p></li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </section>
    )
}

export default AboutMe
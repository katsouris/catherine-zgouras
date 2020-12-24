import React from "react";
import {Col, Row} from "react-bootstrap";

const AboutMe = () => {
    return (
        <section>
            <h1 className='text-center mb-5'>About me</h1>
            <p>I like to tell stories. I imagine that my pen is like a magic wand, and I can use words to change
                things.</p>
            <p>Sometimes I write stories that make people think. Other times&nbsp;I write things that make people
                hungry. Often,&nbsp;I write things that make people cry. On a good day, I can do all three at the same
                time!</p>
            <p>I have written for <em>Saveur</em>, <em>Eating Well</em>, <em>The Washington
                Post</em>, <em>Seattle</em> magazine, <em>VegNews</em>,&nbsp;<em>USA Today</em>, <em>The Seattle
                Times</em>, <em>Sip Northwest</em>, <em>Northwest Travel &amp; Life</em>, <em>The
                Guardian</em>, <em>Paste</em>, the <em>St. Louis Post-Dispatch</em>, <em>St. Louis</em> magazine and
                more.</p>
            <p>My areas of interest include Filipino, Icelandic and Bosnian cuisine, and pastry from around the world.
                I’m especially interested in cultures that forage for what many of us may consider odd or easily
                discarded here in the U.S. I also love vegan and sustainable, organic cuisine and related topics such as
                composting and farming.</p>
            <Row>
                <Col sm={4}>
                    <img
                        src="http://www.stefanieellis.com/wp-content/uploads/2015/12/Screen-Shot-2015-12-17-at-10.13.00-PM.jpg"
                        className="img-responsive" alt="STEFANIE ELLIS"/>
                </Col>
                <Col sm={4}>
                    <div className="about-info">
                        <div className="float-left"><p>Email</p><p>Likes</p><p>Dislikes</p></div>
                        <div className="float-left"><p>: stefanie@stefanieellis.com </p><p>: The color pink. </p><p>:
                            Cauliflower and grumpy people. </p></div>
                        <p className="about-signature">Stefanie Ellis</p>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="about-extra">
                        <h4>HOBBIES &amp; INTERESTS</h4>
                        <div className="about-extra-icon-style2">
                            <ul>
                                <li><p><i className="fa fa-smile-o"/><br/><span>Nice People</span></p></li>
                                <li><p><i className="icon-lightbulb"/><br/><span>Fearless Ideas</span></p></li>
                                <li><p><i className="icon-angellist"/><br/><span>Forward Thinkers</span></p></li>
                                <li><p><i className="fa fa-plane"/><br/><span>Travel</span></p></li>
                                <li><p><i className="fa fa-anchor"/><br/><span>Mermaids</span></p></li>
                                <li><p><i className="icon-fast-food"/><br/><span><span>Food</span></span></p></li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </section>
    )
}

export default AboutMe
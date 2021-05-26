import React from "react";
import {Col, Container, Row} from "react-bootstrap";

const Awards = ()=>{
    return(
        <div className="parallax-overlay-4" id={`#awards`}>
            <Container>
                <Col md={12}>
                    <section >
                        <h1 className="text-center mb-5 pt-5">AWARDS</h1></section>
                    <Row className="count">
                        <Col xs={6} sm={6} md={4} className={'single'}>
                            <div className="total-numbers" data-perc="1300">
                                <div className="iconspace"><i className="cicon fa fa-glass"/></div>
                                <span className="sum">May 2014</span>
                                Macmillan Lesson Share
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={3} className={'single'}>
                            <div className="total-numbers" data-perc="1300">
                                <div className="iconspace"><i className="cicon fa fa-star"/></div>
                                <span className="sum">May 2015</span>
                                Macmillan Lesson Share
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={4} className={'single'}>
                            <div className="total-numbers" data-perc="1300">
                                <div className="iconspace"><i className="cicon fa fa-star"/></div>
                                <span className="sum">2013</span>
                                Person of the Year <br/>
                                <small style={{fontSize: 10}}>
                                    Voted in as person of the year for Patras after gathering
                                    important information and statistics to use in a campaign
                                    to open the local airport.
                                </small>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Container>
        </div>
    )
}

export default Awards
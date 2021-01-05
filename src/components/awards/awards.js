import React from "react";
import {Col, Container, Row} from "react-bootstrap";

const Awards = ()=>{
    return(
        <div className="parallax-overlay-4" id={`#awards`}>
            <Container>
                <Col md={12}>
                    <section className="text-center mb-5 pt-5">
                        <h3>AWARDS</h3></section>
                    <Row className="count">
                        <Col xs={6} sm={6} md={3} className={'single'}>
                            <div className="total-numbers" data-perc="1300">
                                <div className="iconspace"><i className="cicon fa fa-glass"/></div>
                                <span className="sum">2020</span>
                                Writing Between the Vines, Writers Retreat Recipient
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={3} className={'single'}>
                            <div className="total-numbers" data-perc="1300">
                                <div className="iconspace"><i className="cicon fa fa-star"/></div>
                                <span className="sum">2010</span>
                                Greenbrier Scholarship, the Greenbrier Symposium for Professional Food Writers
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={3} className={'single'}>
                            <div className="total-numbers" data-perc="1300">
                                <div className="iconspace"><i className="cicon fa fa-star"/></div>
                                <span className="sum">2008</span>
                                Fred Thompson Scholarship, the Greenbrier Symposium for Professional Food Writers
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={3} className={'single'}>
                            <div className="total-numbers" data-perc="1300">
                                <div className="iconspace"><i className="cicon fa fa-trophy"/></div>
                                <span className="sum">2007</span>
                                Culinary Trust Scholarship, Le Cordon Bleu London, Patisserie
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Container>
        </div>
    )
}

export default Awards
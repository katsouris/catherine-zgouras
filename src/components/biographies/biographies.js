import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Card from "../card/card";

const Biographies = ({publications}) => {
    return (
        <div className="parallax-overlay-5" id={`#biographies`}>
            <Container>
                <Col md={12}>
                    <section className="text-center mb-5 pt-5">
                        <h1 className='text-center mb-5 mt-5'>BIBLIOGRAPHY</h1></section>
                    <Row className="count">
                        {publications.map(item=>
                            <Col xs={12} sm={6} lg={3} className={'single'}>
                                <Card
                                    src={item.image || 'http://api.catherinezgouras.com/sites/default/files/styles/thumbnail/public/2021-04/product-not-found.png'}
                                    title={item.title}
                                    subTitle={item.subTitle}
                                />
                            </Col>
                        )}
                    </Row>
                </Col>
            </Container>
        </div>
    )
}

export default Biographies
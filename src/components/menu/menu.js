import React, {useEffect, useRef, useState} from "react";
import style from './menu.module.scss'
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import logo from "../../assets/photos/CatherineZgouras.jpg"

const Menu = () => {
    const [position, setPosition] = useState(null);
    let menuRef = useRef(null);

    const handleScroll = () => {
        if (menuRef.current) {
            setPosition(menuRef.current.offsetTop - window.pageYOffset)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true});

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    return (
        <div style={{height: 80}} ref={menuRef}>
            <Navbar className={`${position && position <= 0 ? style['fixed'] : ''}`} bg="light" expand="lg">
                <Navbar.Brand> <img
                    src={logo}
                    height="55"
                    alt=" logo"
                /></Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <LinkContainer  to="#home"><Nav.Link>HOME</Nav.Link></LinkContainer>
                        <LinkContainer  to="#about-me"><Nav.Link>ABOUT ME</Nav.Link></LinkContainer>
                        <LinkContainer  to="#my-services"><Nav.Link>MY SERVICES</Nav.Link></LinkContainer>
                        <LinkContainer  to="#my-resume"><Nav.Link>MY RESUME </Nav.Link></LinkContainer>
                        <LinkContainer  to="#awards"><Nav.Link> AWARDS </Nav.Link></LinkContainer>
                        <LinkContainer  to="#contact-me"><Nav.Link> CONTACT ME </Nav.Link></LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

    )
}
export default Menu
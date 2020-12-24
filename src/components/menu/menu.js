import React, {useEffect, useRef, useState} from "react";
import style from './menu.module.scss'
import {Nav, Navbar, NavDropdown} from "react-bootstrap";

const Menu = () => {
    const [position, setPosition] = useState(null);
    let menuRef = useRef(null);

    const handleScroll = () => {
        if (menuRef.current) {
            setPosition(menuRef.current.offsetTop - window.pageYOffset)
        }
    };
console.log(position)
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true});

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    return (
        <div ref={menuRef}>
            <Navbar className={`${position && position <= 0 ? style['fixed'] : ''}`} bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

    )
}
export default Menu
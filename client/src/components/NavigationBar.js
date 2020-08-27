import React from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #222;
    }

    .navbar-brand, .navbar-nav, .nav-link {
        color: #bbb;

        &:hover {
            color: white;
        }
    }
`;


export const NavigationBar = () => (
    <Styles>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
        </Navbar>
    </Styles>
)

{/* <Navbar expand='lg'>
<Navbar.Brand href="/">Test Website!</Navbar.Brand>
<Navbar.Collapse id="basic-navbar-nav">
    <Nav classname="ml-auto">
        <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav.Item>
    </Nav>
</Navbar.Collapse>
</Navbar> */}
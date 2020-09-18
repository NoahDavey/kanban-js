import React from 'react';
import { Nav, Navbar, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #222;
    }

    .navbar-brand, .navbar-nav, .nav-link {
        color: #fffff;

        &:hover {
            color: white;
        }
    }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">Kanban</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <Form inline>
            <Button variant="outline-primary">New task</Button>
            </Form>
        </Navbar.Collapse>
        </Navbar>
    </Styles>
)
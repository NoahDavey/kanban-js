import React from 'react';
import Nav from 'react-bootstrap/Nav'

export const VerticalNav = () => (
    <Nav defaultActiveKey="/home" variant="pills" className="flex-column">
        <Nav.Link href="/">Board</Nav.Link>
        <Nav.Link href="/no-match">No where!</Nav.Link>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>
            Disabled
        </Nav.Link>
    </Nav>
)
import React from 'react';
import { Jumbotron as Jumbo, Container} from 'react-bootstrap';
import { JumbotronStyles } from "../styles.js"


export const Jumbotron = () => (
    <JumbotronStyles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Welcome Noah</h1>
                <p>Whats on today?</p>
            </Container>
        </Jumbo>
    </JumbotronStyles>
)

//External Imports
import React, { Component } from 'react';
import { Container } from "react-bootstrap";

//Internal Imports
import KanbanBoard from "../components/KanbanBoard";



class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return(
        <div>

                <KanbanBoard/>

        </div>
        )
    }
}

export default Home;
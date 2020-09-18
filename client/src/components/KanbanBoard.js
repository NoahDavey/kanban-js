import React, { Component } from 'react'
import KanbanCard from "../components/KanbanCard";
import { Row } from "react-bootstrap";
import KanbanSwimlane from './KanbanSwimlane';

class KanbanBoard extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Row>
                    <KanbanSwimlane id="swimlane-1">
                        <h1>ToDo</h1>
                        <KanbanCard id="card-1" draggable="true" cardID="1"/>

                    </KanbanSwimlane>
                    <KanbanSwimlane id="swimlane-2">
                        <h1>In Progress</h1>
                        <KanbanCard id="card-2" draggable="true" cardID="2"/>

                    </KanbanSwimlane>
                    <KanbanSwimlane id="swimlane-3">
                        <h1>Done</h1>
                        <KanbanCard id="card-3" draggable="true" cardID="3"/>
                    </KanbanSwimlane>
                </Row>
            </div>
        );
    }
}

export default KanbanBoard;
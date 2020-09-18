import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { ButtonStyles } from "../styles.js";
import useWindowDimensions from '../util/useWindowDimensions';

function KanbanSwimlane (props) {

    const {height, width} = useWindowDimensions();
    
    const drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');

        const card = document.getElementById(card_id);
        card.style.display = 'block';
        
        e.target.appendChild(card)
    }

    const dragOver = e => {
        e.preventDefault();
    }

    return (
        <Col>
            <div
                id={props.id}
                className={props.className}
                onDrop={drop}
                onDragOver={dragOver}
                style={{"background-color":"blue", "height":height-150}}
            >
                    { props.children }
            </div>
            <ButtonStyles>
                <Button className="button">+ New Task</Button>
            </ButtonStyles>
        </Col>
    )

}

export default KanbanSwimlane;
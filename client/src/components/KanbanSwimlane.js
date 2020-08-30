import React from 'react';
import { Col } from 'react-bootstrap';

function KanbanSwimlane (props) {

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
                style={{"background-color":"blue"}}
            >
                    { props.children }
            </div>
        </Col>
    )

}

export default KanbanSwimlane;
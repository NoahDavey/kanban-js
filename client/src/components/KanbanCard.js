import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Avatar from '../assets/avatar.png'

class KanbanCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cardID: props.cardID,
            card: ''
        }
    }

    dragStart = e => {
        const target = e.target;

        e.dataTransfer.setData('card_id', target.id);

        setTimeout(() => {
            target.style.display="none";
        }, 0)
    }

    dragOver = e => {
        e.stopPropagation();
    }


    componentDidMount() {
        fetch(`http://localhost:9000/cards/${this.state.cardID}`)
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            this.setState({card: data})
            console.log(this.state);
        })
        .catch(err => err);
    }

    render() {
        if(this.state.card === '') {
            return (
                <div>
                    <p>This card is undefined!</p>
                </div>
            )
        } else {
            return (
                <div
                    id={this.props.id}
                    className={this.props.className}
                    draggable={this.props.draggable}
                    onDragStart={this.dragStart}
                    onDragOver={this.dragOver}
                >
                    <Card border="dark">
                        <Card.Header>Card #{this.state.cardID}</Card.Header>
                        <Card.Body>
                            <Card.Title>{this.state.card.summary}</Card.Title>
                            <Card.Text>
                            {this.state.card.description}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            )
        }
    }
}

export default KanbanCard;
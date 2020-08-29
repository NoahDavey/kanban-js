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
                <div>
                    <Card border="dark" style={{ width: '18rem' }}>
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

// const KanbanCard = ({card}) => {  
//     if(card === ''){
//         return (
//             <div>
//                 <p>The card was undefined!</p>
//             </div>
//         )
//     } else {
//         return (
//             // <div>
//             //     {card.map((c) => (
//             //         <Card border="dark" style={{ width: '18rem' }}>
//             //             <Card.Header>Card #{c.card}</Card.Header>
//             //             <Card.Body>
//             //             <Card.Title>{c.summary}</Card.Title>
//             //             <Card.Text>
//             //                 {c.description}
//             //             </Card.Text>
//             //             </Card.Body>
//             //         </Card>
//             //     ))}
//             // </div>
//             <div>
//                 <Card border="dark" style={{ width: '18rem' }}>
//                     <Card.Header>Card# 101</Card.Header>
//                     <Card.Body>
//                         <Card.Title>{card.summary}</Card.Title>
//                         <Card.Text>
//                         {card.description}
//                     </Card.Text>
//                     </Card.Body>
//                 </Card>
//             </div>
//         )
//     }          
// };

export default KanbanCard;
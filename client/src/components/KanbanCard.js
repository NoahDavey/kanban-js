import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Avatar from '../assets/avatar.png'

// class KanbanCard extends Component {
    
//     constructor(props) {
//         super(props);
//         this.state = { apiResponse: "" };
//     }


//     render(){
//         return (
//             <Card border="dark" style={{ width: '18rem' }}>
//                 <Card.Header>Card# 101</Card.Header>
//                 <Card.Body>
//                 <Card.Title>{this.props.summary}</Card.Title>
//                 <Card.Text>
//                     {this.props.description}
//                 </Card.Text>
//                 </Card.Body>
//             </Card>
//         );
//     }
// }

const KanbanCard = ({card}) => {
    // return (    
    //     <div>    
    //     {cardObj.map((card) => (
    //         <Card border="dark" style={{ width: '18rem' }}>
    //             <Card.Header>Card# 101</Card.Header>
    //             <Card.Body>
    //             <Card.Title>{card.summary}</Card.Title>
    //             <Card.Text>
    //                 {card.description}
    //             </Card.Text>
    //             </Card.Body>
    //         </Card>
    //     ))}
    //     </div>
    // )
    // console.log("The cards are: " + JSON.stringify(card))
    
    if(card === undefined){
        return (
            <div>
                <p>The card was undefined!</p>
            </div>
        )
    } else {
        return (
            <div>
                {card.map((c) => (
                    <Card border="dark" style={{ width: '18rem' }}>
                        <Card.Header>Card# 101</Card.Header>
                        <Card.Body>
                        <Card.Title>{c.summary}</Card.Title>
                        <Card.Text>
                            {c.description}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        )
    }
    // return (
    //     <div>
    //         <p>{JSON.stringify(card)}</p>
    //         <p>{console.log("Card log: " + card)}</p>
    //         <p>{card[0].summary}</p>

    //         <p>This should be here: {card.map((c) => (c.summary))}</p>
    //     </div>
    // )
            
};

export default KanbanCard;
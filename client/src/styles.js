import styled from "styled-components";
import background from './assets/background2.png';


export const ButtonStyles = styled.div`
    .button {
        transition-duration: 0.4s;
        background-color: white;
        color: black;
        border: 2px solid #1e6794; /* Blue */
        width: 100%;
        margin-top:20px;
    }
  
    .button:hover {
        background-color: #1e6794; /* Blue */
        color: white;
    }
`

export const JumbotronStyles = styled.div`
    .jumbotron {
        background: url(${background}) no-repeat fixed bottom;
        background-size: cover;
        color: #ccc;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity: 0.1;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

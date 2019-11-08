import React from 'react';
import styled from 'styled-components';

const DisplayContainer = styled.section`

    display: flex;
    justify-content: space-evenly;
    border 4px solid black;
    margin: 2% 8%;

    div {

        display: flex;
        flex-flow: column;
        align-items: center;
        flex-basis: 50%;
        
        p:first-child {

            border-bottom: 2px solid black;
            align-self: stretch;
            padding: 12% 0;
            background: darkgreen;
            color: white; 
            font-weight: bold;
            margin: 0;
        }
        
        p:last-child {

            border: 2px solid black;
            padding: 6% 15%;
            background: green;
            color: white;
           
        }

    }

`;

function Display (props) {

   

    return(
        <DisplayContainer>
            <div>
                <p>Strikes</p>
                <p>{props.counts.strikes}</p>
            </div>
            <div>
                <p>Balls</p>
                <p>{props.counts.balls}</p>
            </div>
        </DisplayContainer>

    );
}

export default Display;
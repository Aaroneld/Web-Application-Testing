import React from 'react';
import styled from 'styled-components';


const DashboardContainer = styled.section`

    display: flex;
    justify-content: space-evenly;
    border: 4px solid black;
    padding: 10% 0;
    margin: 2% 5%;

    button {

        background: green;
        border: none;
        flex-basis: 22%;
        padding: 2% 0;
        border-radius: 10px;
        outline: none;
        color: white;
        font-weight: bold;

        &:hover {

            background: darkgreen;
            color: #FFA500;
        }
    }
`;
function Dashboard (props) {

    const handleHits = _ => {

        props.setCounts({...props.counts,
                         balls: 0,
                         strikes: 0 });
    };

    const handleStrikes = _ => {

        props.setCounts({...props.counts,
                        strikes: ++props.counts.strikes});
      
        if (props.counts.strikes >= 3)
                props.setCounts({...props.counts,
                                balls: 0,
                                strikes: 0 });
    };

    const handleBalls = _ => {

        props.setCounts({...props.counts,
            balls: ++props.counts.balls});

        if (props.counts.balls >= 4)
            props.setCounts({...props.counts,
                            balls: 0,
                            strikes: 0 });

    };

    const handleFouls = _ => {

        if (props.counts.strikes <= 1)
            props.setCounts({...props.counts,
                            strikes: props.counts.strikes + 2});
        else
            props.setCounts({...props.counts,
                            balls: 0,
                            strikes: 0 });        

    };

    return (
        <DashboardContainer>
            <button onClick={handleHits}>Hit</button>
            <button onClick={handleStrikes}>Strike</button>
            <button onClick={handleFouls}>Foul</button>
            <button onClick={handleBalls}>Ball</button>
        </DashboardContainer>
    );
}

export default Dashboard;
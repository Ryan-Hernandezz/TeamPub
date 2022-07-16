/* eslint-disable no-unused-vars */
import React from 'react';
import './GameBox.css';

const GameBox = ({league, summary, date, status}) => {
    return (
        <div className='game-app'>
            <div className='game-box'>
                <h4>{league}</h4>
                <h3>{summary}</h3>
                <h5>{date}</h5>
                <div>
                    <p>{status}</p>
                </div>
            </div>
        </div>
    )
}

export default GameBox;

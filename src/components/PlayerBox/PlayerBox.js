/* eslint-disable no-unused-vars */
import React from 'react';
import './PlayerBox.css';

const PlayerBox = ({player, position, number, team}) => {
    return (
        <div className='player-app'>
            <div className='player-item'>
                <h1>{player}</h1>
                <div>
                    <h2>{position}  -  {number}</h2>
                </div>
                <h2>{team}</h2>
            </div>
        </div>
    )
}


export default PlayerBox;


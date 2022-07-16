/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PlayerBox from '../../components/PlayerBox/PlayerBox';
import './Players.css';

function Players() {

  const [input, setInput] = useState('');
  const [result, setResult]  = useState([]);

  useEffect(() => {
    const getPlayers = async () => {
        const headers = {
            'X-RapidAPI-Key': '1878e2709amsh6543d00efced0f2p1cb85ajsn55174a9685bc',
            'X-RapidAPI-Host': 'national-football-players.p.rapidapi.com'
        };
        const response = await axios.get(`https://national-football-players.p.rapidapi.com/player/${input}`, {headers});
        setResult(response.data);
    }
    getPlayers(); 
  }, [input])

  const handleSubmit = e => {
    e.preventDefault();
    console.log(input);
    setInput('');
  }

  return (
    <div>
        <header className='head'>
            <h2>Players</h2>
        </header>
        <div className='form'>
            <p className='sub-head'>Enter player name below. Use a - between first and last name. Ex: Tom-Brady</p>
            <form onSubmit={handleSubmit}>
                <input type='text' value={input} onChange={e => setInput(e.target.value)} placeholder='Player' className='player-input' />
                <button type='submit' className='btn'>
                    Search
                </button>
            </form>
        </div>
        <div className='p-box'>
                <PlayerBox
                    player={result.player}
                    position={result.position}
                    number={result.number}
                    team={result.team}
                />
        </div>
    </div>
  )
}

export default Players;

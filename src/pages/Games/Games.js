/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import GameBox from '../../components/GameBox/GameBox';
import './Games.css';

function Games() {

  const [results, setResults] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      const headers = {
        'X-RapidAPI-Key': '1878e2709amsh6543d00efced0f2p1cb85ajsn55174a9685bc',
        'X-RapidAPI-Host': 'sportspage-feeds.p.rapidapi.com'
      };
      const response = await axios.get('https://sportspage-feeds.p.rapidapi.com/games', {headers});
      setResults(response.data.results);
    }
    getGames();
  }, [])

  function formateDate(date) {
    date = new Date(date);
    date = date.getDay();
    let days = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];
    return(days[date]);
  }

  return (
    <div>
        <div>
            <header className='head'>
                <h2>Games Today</h2>
            </header>
        </div>
        {results.map(result => {
          return(
            <GameBox
              key={result.gameId}
              league={result.details.league}
              summary={result.summary}
              date={formateDate(result.schedule.date)}
              status={result.status}
            />
          )
        })}
    </div>
  )
}

export default Games;


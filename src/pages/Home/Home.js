/* eslint-disable no-unused-vars */
import React from 'react';
import NewsList from '../../components/NewsItem/NewsList';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import './Home.css';

function Home() {
  return (
    <div>
      <div>
        <header className='head'>
          <h2>Top Stories</h2>
        </header>
      </div>
      <div className='news'>
        <NewsList />
      </div>
    </div>
  );
}

export default Home;

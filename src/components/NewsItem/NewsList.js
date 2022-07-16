/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';

function NewsList() {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
        const response = await axios.get(`https://newsapi.org/v2/everything?domains=espn.com&pageSize=15&apiKey=4a7416a8bc144f7aba53de37a2e4b832`);
        setArticles(response.data.articles);
    }
    getArticles();
  }, [])
  
  return (
    <div>
        {articles.map(article => {
            return(
                <NewsItem 
                    key={article.title}
                    title={article.title}
                    description={article.description}
                    url={article.url}
                    urlToImage={article.urlToImage}
                />
            )
        })}
    </div>
  )
}

export default NewsList;

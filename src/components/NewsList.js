import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import NewsItem from './NewsItem';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 768px;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const sampleArticle = {
  title: 'sample title',
  description: 'sample desc',
  url: 'https://google.com',
  urlToImage: 'https://via.placeholder.com/160',
};

NewsList.defaultProps = {
  category: 'general',
};

function NewsList({ category }) {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&category=${category}`;
      try {
        const result = await axios.get(url);
        console.log({ result });
        setArticles(result.data.articles);
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    };
    fetch();
  }, [category]);

  if (loading) return <div>loading...</div>;
  if (!articles) return null;

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.title} article={article} />
      ))}
    </NewsListBlock>
  );
}

export default React.memo(NewsList);

import React from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import useFetch from 'hooks/useFetch';

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

function NewsList({ category }) {
  const [loading, response, error] = useFetch(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${
      process.env.REACT_APP_NEWS_API_KEY
    }&category=${category ? category : ''}`;
    return axios.get(url);
  }, [category]);
  if (loading) return <NewsListBlock>loading...</NewsListBlock>;
  if (error) return <NewsListBlock>{error}</NewsListBlock>;
  if (!response) return null;

  const { articles } = response.data;
  if (articles && articles.length === 0)
    return <NewsListBlock>data is empty.</NewsListBlock>;

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.title} article={article} />
      ))}
    </NewsListBlock>
  );
}

export default NewsList;

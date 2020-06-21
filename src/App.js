import React, { useState, useCallback } from 'react';
// import axios from 'axios';
import NewsList from 'components/NewsList';
import Categories from 'components/Categories';

function App() {
  // const [articles, setArticles] = useState(null);
  //
  // const fetch = useCallback(async () => {
  //   const url = `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&category=business`;
  //   try {
  //     const result = await axios.get(url);
  //     console.log({ result });
  //     setArticles(result.data);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }, []);

  return (
    <div>
      <h1>news viewer</h1>
      <Categories />
      <NewsList />
    </div>
  );
}

export default App;

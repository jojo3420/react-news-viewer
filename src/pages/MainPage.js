import React, { useCallback } from 'react';
import Categories from 'components/Categories';
import NewsList from 'components/NewsList';

function MainPage({ match }) {
  let category = match.params.category || '';

  return (
    <div>
      <h1>News viewer</h1>
      <Categories />
      <NewsList category={category} />
    </div>
  );
}

export default MainPage;

import React, { useCallback } from 'react';
import NewsList from 'components/NewsList';
import Categories from 'components/Categories';

function NewsPage({ match }) {
  console.log({ match });
  let category = match.params.category || 'general';

  const handleCategory = useCallback(
    (c) => {
      category = c;
    },
    [category],
  );

  return (
    <div>
      <h1>News views</h1>
      <Categories category={category} handleCategory={handleCategory} />
      <NewsList category={category} />
    </div>
  );
}

export default NewsPage;

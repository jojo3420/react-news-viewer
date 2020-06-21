import React, { useState, useCallback } from 'react';
import NewsList from 'components/NewsList';
import Categories from 'components/Categories';

function App() {
  const [category, setCategory] = useState('general');
  const handleCategory = useCallback((category) => {
    setCategory(category);
  }, []);

  return (
    <div>
      <h1>news viewer</h1>
      <Categories handleCategory={handleCategory} />
      <NewsList category={category} />
    </div>
  );
}

export default App;

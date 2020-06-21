import React, { useState, useCallback } from 'react';
// import axios from 'axios';
import NewsList from 'components/NewsList';
import Categories from 'components/Categories';

function App() {
  const [category, setCategory] = useState('general');
  const handleCategory = useCallback((category) => {
    if (category) {
      setCategory(category);
    }
  }, []);

  return (
    <div>
      <h1>news viewer</h1>
      <Categories category={category} handleCategory={handleCategory} />
      <NewsList category={category} />
    </div>
  );
}

export default App;

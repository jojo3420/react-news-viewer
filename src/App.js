import React, { useState, useCallback } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  // console.log(process.env.REACT_APP_NEWS_API_KEY);

  const fetch = useCallback(async () => {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    axios
      .get(url)
      .then((response) => setData(response.data))
      .catch((err) => console.error(err));

    // try {
    //   const result = await axios.get(url);
    //   console.log({ result });
    //   setData(result.data);
    // } catch (e) {
    //   console.error(e);
    // }
  }, []);

  return (
    <div>
      <h1>news viewer</h1>
      <button onClick={fetch}>fetch api test</button>
      <textarea
        value={JSON.stringify(data, null, 2)}
        rows={10}
        readOnly={true}
      />
    </div>
  );
}

export default App;

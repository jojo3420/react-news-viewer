import { useState, useEffect } from 'react';

export default function usePromise(requestFn, deps = []) {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  if (requestFn && typeof requestFn === 'function') {
    useEffect(() => {
      const fetch = async () => {
        try {
          const r = await requestFn();
          console.log({ 'response: ': r });
          setResponse(r);
        } catch (e) {
          console.error(e);
          setError(e);
        }
        setLoading(false);
      };

      fetch();
    }, [...deps]);
  } else {
    throw new Error('requestFn is not working..');
  }

  return [loading, response, error];
}

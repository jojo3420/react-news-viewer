import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

useFetch.propTypes = {
  request: PropTypes.func.isRequired,
  deps: PropTypes.array.isRequired,
};

export default function useFetch(request, deps = []) {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  if (request && typeof request === 'function') {
    useEffect(() => {
      const fetch = async () => {
        try {
          const response = await request();
          console.log({ response });
          setResponse(response);
        } catch (e) {
          console.error(e);
          setError(e);
        }
      };
      fetch();
      setLoading(false);
    }, [...deps]);

    return [loading, response, error];
  }

  throw new Error('request function is not working..');
}

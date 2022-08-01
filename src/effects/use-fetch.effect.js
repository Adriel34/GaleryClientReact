import { useState, useEffect } from 'react';

const useFetch = url => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const dataArray = await res.json();
      setData(dataArray);
    };

    fetchData();
  }, [url]);

  return data;
};

export default useFetch;
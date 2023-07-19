import { useState, useEffect } from 'react';

interface useFetchProps {
  id: number,
  marca: string
  modelo: string
  km: string
  preco: string
  foto: string
}

const useFetch = (url: string) => {
  const [data, setData] = useState<useFetchProps[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const responseData: useFetchProps[] = await response.json();
        setData(responseData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, isLoading };
};

export default useFetch;
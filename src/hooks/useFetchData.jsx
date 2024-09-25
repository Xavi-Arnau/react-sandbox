import { useEffect, useState } from "react";

export default function useFetchData(url, options = {}) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setPending(true);
        const response = await fetch(url, { ...options });
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const result = await response.json();
        setData(result);
        setError(null);
        setPending(false);
      } catch (error) {
        setError(`${error}. Some error ocurred`);
        setPending(false);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { data, error, pending };
}

import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Errore nella risposta: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setData(data);
                setError(null);
            })
            .catch(error => {
                setError(error.message);
                setData(null);
            })
            .finally(() => setLoading(false));
    }, [url]);

    return { data, loading, error };
}

export default useFetch;

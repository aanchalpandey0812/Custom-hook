import { useState, useEffect } from "react";

function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
         .then((res) => {
            if (!res.ok) {
                throw new Error("Faild to fetch");
            }
            return res.json();
         })
          .then((result) => {
            setData(result);
            setLoading(false);
         })
         .catch((err) => {
            setError("Error fetching data");
            setLoading(false);
         });
        }, [url]);

        return {data, loading, error};
    }
    export default useFetch;

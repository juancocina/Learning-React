import { useState, useEffect } from "react";

// can fetch data + authentication, modifying state here could end up in an infinite loop...
const useFetch = (url) => { // in javascript, custom hooks need to have the 'use' part in useFetch
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal }) //returns a promise
            .then(res => {
                if(!res.ok){
                    throw Error('Coud not fetch the data for that resource');
                }
                return res.json(); // also returns a promise (async)
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                if(err.name === 'AbortError') { console.log('fetch aborted') }
                else {
                    setError(err.message);
                    setIsPending(false);
                }
            });
        return () => abortCont.abort();
    }, [url]); 
    // including [] will make the function run on just the first render...
    // including something inside the [] will make the function keep track of the variable
    // in this case, whenever URL changes, the data will be fetched again

    return { data, isPending, error }
}

export default useFetch;
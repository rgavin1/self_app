import { useState, useEffect } from 'react'

const useUser = () => {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        (async () => {
            setError(false);
            setLoading(true);

            try {
                setData("data");
            } catch {
                setError(true);
            }
            setLoading(false)
        })()
    })

    return [data, loading, error]
}

export default useUser
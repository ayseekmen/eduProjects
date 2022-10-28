import { useState } from "react";
import axios from "axios";

function usePost() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const post = async (url, apiData) => {
        try {
            setLoading(true);
            const { data: responseData } = await axios.post(url, apiData);
            setData(responseData);
            console.log("data",responseData)
            setLoading(false);
        } catch (err) {
            console.log("err",err)
            setError(err);
            setLoading(false);
        }
    };

    return { data, loading, error, post };
}

export default usePost;
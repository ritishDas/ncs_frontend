import { useState, useEffect } from "react";
import url from "./config.js";

function useData() {
    const [college, setCollege] = useState([]);
    const [service, setService] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const collegeResponse = await fetch(`${url}/api/college/allCollege`);
                const collegeData = await collegeResponse.json();
                setCollege(collegeData);

                const serviceResponse = await fetch(`${url}/api/service/allService`);
                const serviceData = await serviceResponse.json();
                setService(serviceData);
            } catch (err) {
                console.error("Error occurred in data fetch:", err);
                setError(err);
            }
        }
        fetchData();
    }, []);

    return { college, service, error };
}

export default useData;


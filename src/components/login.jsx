import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import url from "../config.js";

function AuthCheck({ children }) {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(null); // null for loading state

    useEffect(() => {
            let isMounted = true; // To handle component unmount scenarios
            (async () => {
             try {
             const response = await fetch(`${url}/api/user/auth`, {
credentials: "include",
});
             const data = await response.json();
             if (isMounted) {
             setIsAuthenticated(data.login);
             }
             } catch (error) {
             console.error("Authentication check failed:", error);
             if (isMounted) {
             setIsAuthenticated(false);
             }
             }
             })();
            return () => {
            isMounted = false; // Cleanup flag
            };
}, []);

if (isAuthenticated === null) {
    // Loading state
    return <div>Loading...</div>;
}

if (!isAuthenticated) {
    // Fallback content
    return (
            <div style={{
background:"rgb(0,0,0,0.5)",
width:"100%", 
height:"150px",
display:"flex", 
justifyContent:"center",
alignItems:"center"}}>

<h2 style={{
width:"50%",
background:"grey",
margin:"20px auto 20px auto",
textAlign:"center"
}}>You need to login first</h2>

<button style={{margin:"auto"}} onClick={() => navigate("/login")}>Login</button>
</div>
);
    }

// Authenticated content
return <>{children}</>;
}

export default AuthCheck;

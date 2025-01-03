import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import url from "../config.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  const res = await fetch(`${url}/api/user/login`,{method:"post",
headers:{"content-type":"application/json"},
credentials:"include",
body:JSON.stringify({email,password})

   }).then(res=>res.json());

   alert(res.message);
   console.log(res);
    
  };

    return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <button type="submit" style={{ padding: "10px 20px", marginRight: "10px" }}>Submit</button>
        <button type="button" onClick={()=>navigate("/register")} style={{ padding: "10px 20px" }}>Register New User</button>
      </form>
    </div>
  );
};

export default Login;

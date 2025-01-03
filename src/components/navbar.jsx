import {Link,useNavigate} from "react-router-dom";
import {useState,useEffect} from "react";
import url from "../config.js";
function navbar(){
const navigate = useNavigate();
const [navbut,setNavbut] = useState(
        <button onClick = {()=>navigate("/login")}>Login/Register</button>);

        useEffect(()=>{
(async()=>{
const login=await fetch(`${url}/api/user/auth`,{
credentials:"include"
}).then(res=>res.json());
console.log(login);
if(login.login) setNavbut(
<button onClick = {()=>navigate("/profile")}>Profile</button>
);
})();
        },[]);


    return(
        <div className="navbar">
        <div>
        <h2>Nagpur <br/>College</h2>
        </div>
        <ul>
        <li><Link className="nav-link" to="https://x.com/RDCasual116">X</Link>
        </li>
        <li><Link className="nav-link" to="https://www.linkedin.com/in/ritish-das-979536277">LinkedIn</Link>
        </li>
        <li><Link className="nav-link" to="https://github.com/RDCasual116/">Github</Link>
        </li>
        </ul>
        {navbut}
        </div>

    );
}

export default navbar;

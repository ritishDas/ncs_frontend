import { useParams,Link } from "react-router-dom";
import { useEffect,useState } from "react";
import Comment from "../components/comment.jsx";
import Commentform from "../components/commentform.jsx";
import Auth from "../components/login.jsx";
import Imageslider from "../components/imageslider.jsx";
import url from "../config.js";

function College(props) {
  const { id } = useParams();
const[college,setCollege] = useState([]);
let style = {
		background:"white",
		cursor:"pointer",
			borderRadius:"30px",
			padding:"1rem",
		margin:"60px"
	};
  useEffect(() => {
    (async () => {
let res;
      try {
        if(props.type==="college") 
	      res = await fetch(`${url}/api/college/${id}`);
else  res = await fetch(`${url}/api/service/${id}`);

        const [json] = await res.json();
console.log(json);
setCollege(
<div className="college-container">
<div className="college-head">
<h1>{json.name}</h1>
<Link to={json.llink}><img src="../googlemap.png"/>{json.location}</Link>
</div>

<p><h2>About</h2><p>{json.feature[0]}</p></p>
{props.type==="college"?
	<Link style={style} to={json.website}>Visit Official College Website</Link>:
	<div ><h1 style={style}>Price:{json.price} ₹/month</h1><p style={style}>phone no:{json.contact}</p></div>}

<Imageslider images={json.photo}/>

<ul>{json.feature.map((f,ind)=>{
if(ind===json.feature.length-1) return <li><Link to={f}>Know more</Link></li>
return <li>{f}</li>
})}</ul>

<div className="college-comment">
<h2>Comments</h2>
<h2>Add Comments</h2>
<Auth>
<Commentform
collegeId={id}
type={props.type}
/>
</Auth>
<div>
{
json.comment.map((comment,index)=>
<Comment 
content={comment.content}
rating={comment.rating}
key={index}
by={comment.by.name}/>

)
}
</div>

</div>
</div>
);
      } catch (error) {
        console.error("Error fetching API:", error);
      }
    })();
  }, [id]);

  return <>{college}</>;
}

export default College;

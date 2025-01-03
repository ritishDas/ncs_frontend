import { useNavigate } from "react-router-dom";
import url from "../config.js";

function Card(props) {
  const navigate = useNavigate();

  // Determine the navigation link based on props.price
  const navilink = props.price
    ? `/service/${props.id}`
    : `/college/${props.id}`;

async function handlesave(){
try{
const type = props.price?"service":"college";
const res = await fetch(`${url}/api/${type}/save/${props.id}`,{
method:"put",
credentials:"include"
}).then(res=>res.json());
alert(res.message);
}catch(err){
alert(err.message);
}
}

async function handleremove()
{
try{
const type = props.price?"service":"college";
const res = await fetch(`${url}/api/${type}/remove/${props.id}`,{
method:"put",
credentials:"include"
}).then(res=>res.json());
alert(res.message);
}catch(err){
alert(err.message);
}
}
  return (
    <div className="cardContainer">
      <div
        className="Card"
        onClick={() => navigate(navilink)} // Use the navigate function
      >
        <img src={props.photo} alt={`${props.name}`} />
        <span>{props.name}</span>
        <span>{props.location}</span>
        {props.price && <span>{props.price}</span>}
      </div>
{props.prof?<button onClick={handleremove}>Remove</button>:
     <button onClick={handlesave}>Save</button>}
    </div>
  );
}

export default Card;

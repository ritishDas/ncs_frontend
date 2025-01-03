import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import Navbar from "../components/navbar.jsx";
import Card from "../components/card.jsx";
import useData from "../data.js";
import Auth from "../components/login.jsx";

function Home() {
const navigate = useNavigate();
    const [homeCollege, sethomeCollege] = useState([]);
    const [homeRoom, sethomeRoom] = useState([]);
    const [homeTiffin, sethomeTiffin] = useState([]);

    const {college,service} =  useData();
console.log(service);
    useEffect(() => {
            const homecoll = [];
            const homeroom = [];
            const hometiffin = [];

            for (let i = 0; i < college.length && i < 3; i++) {
            homecoll.push(college[i]);
            }

            for (let i = 0; i < service.length; i++) {
            if (homeroom.length === 4 && hometiffin.length === 4) break;
            if (service[i].type === "room" && homeroom.length < 4) {
            homeroom.push(service[i]);
            } else if (service[i].type !== "room" && hometiffin.length < 4) {
            hometiffin.push(service[i]);
            }
            }

            sethomeCollege(() =>
                    homecoll.map(coll => (
                            <Card
                            key={coll.id} 
                            name={coll.name}
                            location={coll.location}
                            photo={coll.photo[0]}
                            id={coll.id}
                            />
                            ))
                    );

            sethomeTiffin(() =>
                    hometiffin.map(coll => (
                            <Card
                            key={coll.id} 
                            name={coll.name}
                            location={coll.location}
                            photo={coll.photo[0]}
                            price={coll.price}
                            id={coll.id}
                            />
                            ))
                    );

            sethomeRoom(() =>
                    homeroom.map(coll => (
                            <Card
                            key={coll.id} 
                            name={coll.name}
                            location={coll.location}
                            photo={coll.photo}
                            price={coll.price[0]}
                            id={coll.id}
                            />
                            ))
                    );


    }, [college,service]);




	return (
		<>
		<Navbar />
		<div className="homebg">
		<img src="navbg.jpg" />
		<div>
		<h1>SEARCH</h1>
		<h1>BEST COLLEGES</h1>
		<h1>IN NAGPUR</h1>
		</div>
		</div>

		<div className="category">
		<div>
		<button onClick={()=>navigate("/college")}>Colleges</button>
		<button onClick={()=>navigate("/room")}>Services</button>
		<button onClick={()=>navigate("/tiffin")}>Tiffin</button>
		</div>
		</div>
		<div className="home-college-div">
		<span>
		<img src="byservice.jpg" />
		<h2>Advertise your<br />room and tiffin<br />service</h2>
		</span>
		<span>
		<img src="adservice.jpg" />
		<h2>Buy<br />room and tiffin<br />service</h2>
		</span>
		<div>
		<h1>Colleges</h1>
		<div>
		{homeCollege}
		</div>

		</div>
		</div>
		<Auth>
		<div className="home-add">
		<button onClick={()=>navigate("/addcollege")}>Add Your College</button>
		<button onClick={()=>navigate("/addservice")}>Add Your Service</button>
		</div>
		</Auth>
		<div className="home-service">
		<h1>Rooms</h1>
		<div>
		{homeRoom}
		</div>
		</div>
		<div className="home-service">
		<h1>Tiffin</h1>
		<div>{homeTiffin}</div>
		</div>

		</>
	);
}

export default Home

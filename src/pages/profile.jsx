import { useState, useEffect } from "react";
import Card from "../components/card.jsx";
import url from "../config.js";

function Profile() {
  const [data, setData] = useState({
    name: "",
    email: "",
   favcoll: [],
    favser: [],
    service: [],
  });

  useEffect(() => {
    (async () => {
      const Data = await fetch(`${url}/api/user/user`, {
        credentials: "include",
      }).then((res) => res.json());
      console.log(Data)
      setData(Data);
    })();
  }, []);

  return (
    <div>
<div className="profile-name">
      <h1>{data.name}</h1>
      <h2><i>email: </i>{data.email}</h2>
</div>
      <h2>Your Services</h2>
      <div className="profile-cardcon">
        {data.service.length===0?<p>This list is empty</p>:data.service.map((serv) => (
          <Card
            key={serv.id}
            name={serv.name}
            photo={serv.photo[0]}
            price={serv.price}
            location={serv.location}
id={serv.id}
          />
        ))}
      </div>

      <h2>Your Favourite Colleges</h2>
      <div className="profile-cardcon">
        {data.favcoll.length===0?<p>This list is empty</p>:data.favcoll.map((coll) => (
          <Card
            key={coll.id}
            name={coll.name}
            photo={coll.photo[0]}
            location={coll.location}
id={coll.id}
prof={true}
          />
        ))}
      </div>

      <h2>Your Favourite Services</h2>
      <div className="profile-cardcon">
         {data.favser.length===0?<p>This list is empty</p>:data.favser.map((fav) => (
          <Card
            key={fav.id}
            name={fav.name}
            photo={fav.photo[0]}
id={fav.id}
price={fav.price}
            location={fav.location}
prof={true}
          />
        ))}
      </div>
    </div>
  );
}

export default Profile;

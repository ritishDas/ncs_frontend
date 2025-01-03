import { useState } from "react";
import useData from "../data.js";
import Card from "../components/card.jsx";

function ShowPage(props) {
    const { college, service } = useData();

    let component;

    if (props.type === "college") {
        component = (
            <div>
                <h1 style={{
margin:"30px",
}}>All Colleges</h1>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    {college.map(c => (
                        <Card
                            key={c.id}
                            name={c.name}
                            location={c.location}
                            id={c.id}
                            photo={c.photo[0]}
                        />
                    ))}
                </div>
            </div>
        );
    } else if (props.type === "room") {
        component = (
            <div>
                <h1 style={{
margin:"30px",
}}>                All Rooms and PG</h1>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    {service.map(s => {
                        if (s.type === "room") {
                            return (
                                <Card
                                    key={s.id}
                                    name={s.name}
                                    id={s.id}
                                    price={s.price}
                                    location={s.location}
                                    photo={s.photo[0]}
                                />
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        );
    } else {
        component = (
            <div>
                <h1 style={{
margin:"30px",
}}>             All Tiffin and Mess Service</h1>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    {service.map(s => {
                        if (s.type === "tiffin") {
                            return (
                                <Card
                                    key={s.id}
                                    name={s.name}
                                    id={s.id}
                                    price={s.price}
                                    location={s.location}
                                    photo={s.photo[0]}
                                />
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        );
    }

    return <>{component}</>;
}

export default ShowPage;

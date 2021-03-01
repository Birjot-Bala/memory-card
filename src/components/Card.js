import React from "react";
import '../styles/card.css'

const Card = ({ id, source, onClick }) => {
    return (
        <button className="card" id={id} onClick={onClick}>
            <img className="picture" src={source} alt={"card-" + id} />
        </button>
    )
};

export default Card;
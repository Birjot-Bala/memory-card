import React from "react";

const Card = ({ id, source, onClick }) => {
    return (
        <button className="card" id={id} onClick={onClick}>
            <img className="picture" src={source} alt={"card-" + id} />
        </button>
    )
};

export default Card;
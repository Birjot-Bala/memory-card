import React from "react";
import useImage from "../hooks/useImage";
import '../styles/card.css'

const Card = ({ id, source, onClick }) => {
    const { hasLoaded, hasError } = useImage(source);

    if (hasError) {
        return null;
    }

    return (
        <button className="card" id={id} onClick={onClick}>
            {hasLoaded 
                ? <img className="image" src={source} alt={"card-" + id} />
                : <span>Loading...</span>}
        </button>
    )
};

export default Card;
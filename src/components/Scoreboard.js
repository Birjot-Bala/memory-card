import React from "react";

const Scoreboard = ({ score, bestScore }) => {
    return (
        <div>
            <div>Score: {score}</div>
            <div>Best Score: {bestScore}</div> 
        </div>
    )
};

export default Scoreboard;
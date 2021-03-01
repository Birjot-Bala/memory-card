import React from "react";
import Card from "./Card";

const CardList = ({ sources, onClick }) => {
    const listItems = sources.map((source, index) => {
        const stringIndex = index.toString();
        return (
            <Card key={stringIndex} id={stringIndex} source={source} onClick={onClick} />
        );
    });

    const shuffleList = (list) => {
        for (let i = list.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [list[i], list[j]] = [list[j], list[i]];
        }
        return list;
    };

    return (
        <ul>{shuffleList(listItems)}</ul>
    )
};

export default CardList;
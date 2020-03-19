import React from 'react';
import './card.style.css';

export const Card = props => {

return (
    <div className="card-container">
        <img alt={`monster_${props.monster.id}`  } src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
        <h1 key={props.monster.id}>{props.monster.name}</h1>
    </div>
)
}
import React from "react";

const POKE_API =
  "https://raw.githubusercontent.com/" +
  "PokeAPI/sprites/master/sprites/pokemon/";

function Pokecard(props) {
  let imgSrc = `${POKE_API}${props.id}.png`;
  return (
    <div className="card col-sm-1 col-lg-3 m-3">
      <div className="card-body">
        <h3 className='card-title'>{props.name}</h3>
        <img src={imgSrc} alt={props.name} />
        <p>Type: {props.type}</p>
        <p>EXP: {props.base_experience} </p>
      </div>
    </div>
  );
}

export default Pokecard;

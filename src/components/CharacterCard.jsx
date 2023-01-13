import React from "react";
import "./CharacterCard.css"
import {Button} from "@mui/material";


function CharacterCard({character}) {
  return (
    <div className="flip-card">
      < div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={character.image} alt={character.name}/>
        </div>
        <div className="flip-card-back">
          <p>{character.name}</p>
          <Button variant="contained" color="primary">More Info</Button>
        </div>
      </div>
    </div>


  );
}

export default CharacterCard;

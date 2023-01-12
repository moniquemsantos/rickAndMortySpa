import React from "react";
import { Button } from "react-bootstrap";
import "../style/CharacterCard.css"



function CharacterCard({ character }) {
  return (

    
    <div className="flip-card"> 
  < div className = "flip-card-inner">
    < div className="flip-card-front">
      <img src={character.image} alt={character.name} />
      
    </div>
    <div className="flip-card-back">
    <p>{character.name}</p>  
    < Button />
    </div>
    </div>
    </div>
    
    

  );
}

export default CharacterCard;
